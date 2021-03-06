import React from 'react'

import { render_full_inventory } from '@oh-my-rpg/view-rich-text'

import { Chat } from '../../templates/chat-interface'
import { with_game_instance } from '../../context/game-instance-provider'
import { rich_text_to_react } from '../../../utils/rich_text_to_react'


class InventoryBase extends React.Component {

	componentWillMount () {
		console.info('~~ InventoryBase componentWillMount')

		this.props.instance.set_client_state(client_state => ({
			mode: 'inventory',
		}))
	}

	componentDidMount() {
		console.info('~~ InventoryBase componentDidMount')
		// subscribe to future state changes
		this.unsubscribe = this.props.instance.subscribe(() => this.forceUpdate())
	}
	componentWillUnmount () {
		console.info('~~ InventoryBase componentWillUnmount', arguments)
		this.unsubscribe()
	}

	render() {
		const { instance } = this.props
		const state = instance.get_latest_state()

		const doc = render_full_inventory(state.inventory, state.wallet)

		return (
			<div className='page page--inventory o⋄overflow-y⁚auto'>
				<div className='page-top-content'>
					{rich_text_to_react(doc)}
				</div>
			</div>
		)
	}
}

const Inventory = with_game_instance(InventoryBase)

export {
	Inventory,
}
