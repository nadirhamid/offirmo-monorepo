import React, { Component, Fragment, StrictMode } from 'react'
import PropTypes from 'prop-types'
import Form, { FormHeader, FormSection, FormFooter } from '@atlaskit/form';

import {AppStateConsumer, AppStateListenerAndProvider} from '../context'
import GlobalSwitch from './global-switch'
import Overrides from './overrides'


//const StrictCheck = StrictMode
const StrictCheck = Fragment

export default class Root extends Component {
	static propTypes = {
	}

	render_view = ({app_state}) => {
		console.log(`🔄 root render_view`, {app_state})

		if (!app_state.is_eligible) {
			return (
				<Fragment>
					<p>
						This tab is not eligible, only normal web pages can be manipulated.
					</p>
					<p>
						If you think this is a mistake, please <a href="https://github.com/Offirmo/offirmo-monorepo/issues" target="_blank">report here</a>.
					</p>
				</Fragment>
			)
		}

		const { overrides } = app_state
		const overrides_count = Object.keys(overrides).length
		const show_overrides = !!overrides_count && app_state.is_injection_enabled
			return (
			<Fragment>
				<GlobalSwitch />
				{show_overrides && <FormSection title="Overrides">
					<Overrides/>
				</FormSection>
				}
				<FormFooter>
					<button>Reload page</button>
				</FormFooter>
			</Fragment>
		)
	}

	render() {
		return (
			<StrictCheck>
				<AppStateListenerAndProvider>
					<Form onSubmit={data => console.log('form data', data)}>
						{({ formProps }) => (
							<form {...formProps}>
								<FormHeader title="Universal Web Dev Tool" />
								<AppStateConsumer render={this.render_view} />
							</form>
						)}
					</Form>
				</AppStateListenerAndProvider>
			</StrictCheck>
		)
	}
}
