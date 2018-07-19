import React, { Component } from 'react';

import MultiRenderer from './multi-renderer'

import { DEMO_BASE_TYPES, DEMO_ADVANCED_TYPES, MSG_01, MSG_02, MSG_03 } from '../../examples'

export default class Root extends Component {
	state = {
		doc: DEMO_ADVANCED_TYPES,
	}
	render() {

		return (
			<div>
				<MultiRenderer doc={this.state.doc} />
			</div>
		)
	}
}
