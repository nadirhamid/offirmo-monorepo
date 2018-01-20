import React from 'react'

import { render_full_inventory } from '@oh-my-rpg/view-rich-text'

import { rich_text_to_react } from '../../../utils/rich_text_to_react'


// TODO context
function Inventory({workspace}) {
	const state = workspace.instance.get_latest_state()

	const doc = render_full_inventory(state.inventory, state.wallet)

	return (
		<div className={'page page--inventory'}>
			{rich_text_to_react(doc)}
		</div>
	)
}

export {
	Inventory,
}
