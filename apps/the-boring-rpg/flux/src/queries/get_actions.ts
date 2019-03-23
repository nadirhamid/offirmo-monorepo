import { UUID } from '@offirmo/uuid'
import { get_unslotted_item } from '@oh-my-rpg/state-inventory'
import { UState } from '@tbrpg/state'
import {
	ACTIONS_SCHEMA_VERSION,
	Action,
	ActionEquipItem,
	ActionSellItem,
	ActionType
} from '@tbrpg/interfaces'

/////////////////////

function get_actions_for_unslotted_item(u_state: Readonly<UState>, uuid: UUID): Readonly<Action>[] {
	const actions: Action[] = []

	const equip: ActionEquipItem = {
		v: ACTIONS_SCHEMA_VERSION,
		time: 0, // to indicate that action time is pending
		type: ActionType.equip_item,
		expected_sub_state_revisions: {
			inventory: u_state.inventory.revision,
		},
		target_uuid: uuid,
	}
	actions.push(equip)

	const sell: ActionSellItem = {
		v: ACTIONS_SCHEMA_VERSION,
		time: 0, // to indicate that action time is pending
		type: ActionType.sell_item,
		expected_sub_state_revisions: {
			inventory: u_state.inventory.revision,
		},
		target_uuid: uuid,
	}
	actions.push(sell)

	return actions
}


function get_actions_for_element(u_state: Readonly<UState>, uuid: UUID): Readonly<Action>[] {
	const actions: Action[] = []

	const as_unslotted_item = get_unslotted_item(u_state.inventory, uuid)
	if (as_unslotted_item)
		actions.push(...get_actions_for_unslotted_item(u_state, uuid))

	return actions
}

/////////////////////

export {
	get_actions_for_element,
}
