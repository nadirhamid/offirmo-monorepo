import React, { Component, Fragment } from 'react'
import PropTypes from 'prop-types'
import Range from '@atlaskit/range'
import { ALL_LOG_LEVELS } from '@offirmo/practical-logger-core'

const MIN_LEVEL = 0
const DEFAULT_LEVEL = 4
const MAX_LEVEL = ALL_LOG_LEVELS.length - 1

export default class LogLevelRange extends Component {
	static propTypes = {
		// mimic atlaskit
		onChange: PropTypes.func.isRequired,
		value: PropTypes.string.isRequired,
		isDisabled: PropTypes.bool.isRequired,
	}

	render() {
		const { isDisabled, value, onChange, ...field_props } = this.props
		console.log(`🔄 LogLevelRange`, {
			isDisabled,
			value,
		})

		const index = ALL_LOG_LEVELS.findIndex(v => v === value)
		if (value && index === -1)
			console.error(`LogLevelRange: unrecognised log level "${value}"!`)
		const value_int = index === -1
				? DEFAULT_LEVEL
				: index

		return (
			<Fragment>
				<Range
					{...field_props}
					isDisabled={isDisabled}
					min={MIN_LEVEL} max={MAX_LEVEL} step={1}
					value={value_int}
					onChange={value_int => onChange(ALL_LOG_LEVELS[value_int])}
				/>
				<span className={'override-input-label override-input-LogLevel-label o⋄font⁚roboto-condensed'}>
					<Fragment>Level <b>{ALL_LOG_LEVELS[value_int]}</b> and above will be logged</Fragment>
				</span>
			</Fragment>
		);
	}
}
