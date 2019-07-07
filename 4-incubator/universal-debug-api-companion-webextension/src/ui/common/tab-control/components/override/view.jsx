import React, { Component, Fragment } from 'react'
import PropTypes from 'prop-types'

import { Field } from '@atlaskit/form'
import { ToggleStateless } from '@atlaskit/toggle'
import Select from '@atlaskit/select'
import LogLevelRange from './log-level-range'

import './index.css'

export const STANDARD_COHORTS = [
	'not-enrolled',
	'control',
	'variation',
	'variation-1',
	'variation-2',
	'variation-3',
	'variation-4',
]

function build_cohort_select_option(cohort) {
	return {
		label: cohort,
		value: `"${cohort}"`,
		//defaultSelected: cohort === 'not-enrolled',
		//selected: cohort === 'not-enrolled',
	}
}
const COHORT_SELECT_OPTIONS = STANDARD_COHORTS.map(build_cohort_select_option)

function ActivityIndicator({has_activity}) {
	// TODO yellow on reload needed
	let classes = ['activity-indicator']
	if (has_activity) classes.push('activity-indicator--with-activity')
	return (
		<span className={classes.join(' ')}>●</span>
	)
}

export default class Switch extends Component {
	static propTypes = {
		is_injection_enabled: PropTypes.bool.isRequired,
		on_change: PropTypes.func.isRequired,
		override: PropTypes.any.isRequired, // TODO refine
	}

	get_enable_toggle(field_props, is_enabled) {
		const { is_injection_enabled, on_change, override } = this.props

		const is_disabled = !is_injection_enabled

		return (
			<ToggleStateless
				{...field_props}
				size="large"
				isChecked={is_enabled}
				isDisabled={is_disabled}
				onChange={(event) => on_change({is_enabled: !is_enabled})}
			/>
		)
	}

	get_default_value() {
		const { override } = this.props
		const { type, value_json } = override.spec

		switch (type) {
			case 'boolean':
				return Boolean(value_json)
			case 'Cohort':
				return build_cohort_select_option(JSON.parse(value_json))
			case 'LogLevel':
				return 123
			default:
				return 'XXX'
		}
	}

	get_input(field_props, is_enabled) {
		const { is_injection_enabled, on_change, override } = this.props
		const { type, value_json } = override.spec

		// bad API
		const is_disabled = !is_injection_enabled || !is_enabled

		switch (type) {
			case 'boolean': {
				const value = Boolean(value_json)
				return (
					<Fragment>
						{is_disabled ? '' : <span
							className={'o⋄font⁚roboto-condensed override-input-label'}>forced to <b>{`${value}`}</b></span>}
						<ToggleStateless
							{...field_props}
							size="large"
							isDisabled={is_disabled}
							isChecked={value}
							onChange={(event) => on_change({value: value === 'true' ? 'false' : 'true'})}
						/>
					</Fragment>
				)
			}
			case 'Cohort': {
				const value = value_json
				return (
					<Fragment>
						{is_disabled ? '' :
							<span className={'o⋄font⁚roboto-condensed override-input-label'}>forced to </span>}
						<Select
							{...field_props}
							isDisabled={is_disabled}
							className="single-select"
							classNamePrefix="react-select"
							onChange={({value}) => on_change({value})}
							options={COHORT_SELECT_OPTIONS}
							placeholder="Choose a cohort"
						/>
					</Fragment>
				)
			}
			case 'LogLevel': {
				const value = value_json
				return (
					<LogLevelRange
						{...field_props}
						isDisabled={is_disabled}
						value={value}
						onChange={(value) => on_change({value})}
					/>
				)
			}
			default:
				return <span>Error! Unknown type "{type}"!</span>
		}
	}

	render() {
		const { override } = this.props
		const { key } = override
		const { type } = override.spec

		const requested_value_json = override.spec.value_json
		let default_value_json = requested_value_json
		if (type === 'co')
			default_value_json = COHORT_SELECT_OPTIONS.find(({value: opt_value}) => requested_value_json === `"${opt_value}"`)

		console.log(`🔄 Override "${key}"`, {
			props: this.props,
			default_value_json,
		})

		const has_activity = override.last_reported > 0
		const is_enabled = override.spec.is_enabled

		return (
			<div className={`left-right-aligned override-line`}>
				<div>
					<ActivityIndicator has_activity={has_activity} />

					<span className={`box-sizing-reset override-enable-toggle`}>
						<Field name={key + '_enabled'} defaultValue={is_enabled} isRequired>
							{({ fieldProps, error }) => error? error : this.get_enable_toggle(fieldProps, is_enabled) }
						</Field>
					</span>

					<span className={`override-label`}>
						{key}
					</span>
				</div>

				<div className={`box-sizing-reset override-input override-input-${type}`}>
					<Field name={key} defaultValue={this.get_default_value()} isRequired>
						{({ fieldProps, error }) => error ? error : this.get_input(fieldProps, is_enabled) }
					</Field>
				</div>
			</div>
		)
	}
}
