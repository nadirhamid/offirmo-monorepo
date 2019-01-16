/////////////////////

import { Random, Engine } from '@offirmo/random'
import { UUID } from '@offirmo/uuid'
import { TimestampUTCMs, get_UTC_timestamp_ms } from '@offirmo/timestamps'

/////////////////////

import { InventorySlot, Item, ItemQuality } from '@oh-my-rpg/definitions'

import { Weapon, matches as matches_weapon } from '@oh-my-rpg/logic-weapons'
import { Armor, matches as matches_armor } from '@oh-my-rpg/logic-armors'
import { appraise_power_normalized } from '@oh-my-rpg/logic-shop'
import {
	CharacterAttribute,
	CharacterAttributes,
	CharacterClass,
	increase_stat,
	rename,
	switch_class,
} from '@oh-my-rpg/state-character'
import { Currency } from '@oh-my-rpg/state-wallet'

import * as EnergyState from '@oh-my-rpg/state-energy'
import * as WalletState from '@oh-my-rpg/state-wallet'
import * as InventoryState from '@oh-my-rpg/state-inventory'
import * as EngagementState from '@oh-my-rpg/state-engagement'

/////////////////////

import { State } from '../../types'

import {
	appraise_item_value,
	is_inventory_full,
} from '../../selectors'

import { get_lib_SEC } from '../../sec'

import {STARTING_ARMOR_SPEC, STARTING_WEAPON_SPEC} from "./create";

/////////////////////

function __compare_items_by_normalized_power(a: Readonly<Item>, b: Readonly<Item>): number {
	const power_a = appraise_power_normalized(a)
	const power_b = appraise_power_normalized(b)

	return power_b - power_a
}

/////////////////////

// XXX those internal reducers:
// - do not refresh achievements or update the T-state
// - do not increment the revision

// note: some are mainly used in tests

function _loose_all_energy(state: Readonly<State>): Readonly<State> {
	let [ u_state, t_state ] = state.energy
	t_state = EnergyState.loose_all_energy(state.energy)
	return {
		...state,
		energy: [ u_state, t_state ],
	}
}

function _update_to_now(state: Readonly<State>, now_ms: TimestampUTCMs = get_UTC_timestamp_ms()): Readonly<State> {
	let [ u_state, t_state ] = state.energy
	t_state = EnergyState.update_to_now(state.energy, now_ms)

	if (t_state === state.energy[1])
		return state // no change

	return {
		...state,
		energy: [ u_state, t_state ],
	}
}

function _receive_stat_increase(state: Readonly<State>, stat: CharacterAttribute, amount = 1): Readonly<State> {
	return {
		...state,
		avatar: increase_stat(get_lib_SEC(), state.avatar, stat, amount),
	}
}

function _receive_item(state: Readonly<State>, item: Item): Readonly<State> {
	// inventory shouldn't be full since we prevent playing in this case
	return {
		...state,
		inventory: InventoryState.add_item(state.inventory, item),
	}
}

function _sell_item(state: Readonly<State>, uuid: UUID): Readonly<State> {
	const price = appraise_item_value(state, uuid)

	return {
		...state,
		inventory: InventoryState.remove_item_from_unslotted(state.inventory, uuid),
		wallet: WalletState.add_amount(state.wallet, Currency.coin, price),
	}
}

function _receive_coins(state: Readonly<State>, amount: number): Readonly<State> {
	return {
		...state,
		wallet: WalletState.add_amount(state.wallet, Currency.coin, amount),
	}
}

function _receive_tokens(state: Readonly<State>, amount: number): Readonly<State> {
	return {
		...state,
		wallet: WalletState.add_amount(state.wallet, Currency.token, amount),
	}
}

////////////

function _ack_all_engagements(state: Readonly<State>): Readonly<State> {
	if (!state.engagement.queue.length) return state

	return {
		...state,
		engagement: EngagementState.acknowledge_all_seen(state.engagement),
	}
}

function _auto_make_room(state: Readonly<State>, options: { DEBUG?: boolean } = {}): Readonly<State> {
	const { DEBUG } = options

	if (DEBUG) console.log(`  - _auto_make_room()… (inventory holding ${state.inventory.unslotted.length} items)`)

	// inventory full
	if (is_inventory_full(state)) {
		if (DEBUG) console.log(`    Inventory is full (${state.inventory.unslotted.length} items)`)
		let freed_count = 0

		// sell stuff, starting from the worst, but keeping the starting items (for sentimental reasons)
		Array.from(state.inventory.unslotted)
			.filter((e: Readonly<Item>) => {
				switch (e.slot) {
					case InventorySlot.armor:
						if (matches_armor(e as Armor, STARTING_ARMOR_SPEC))
							return false
						break
					case InventorySlot.weapon:
						if (matches_weapon(e as Weapon, STARTING_WEAPON_SPEC))
							return false
						break
					default:
						break
				}
				return true
			})
			.sort(__compare_items_by_normalized_power)
			.reverse() // to put the lowest quality items first
			.forEach((e: Readonly<Item>) => {
				//console.log(e.quality, e.slot, appraise_power_normalized(e))
				switch(e.slot) {
					case InventorySlot.armor:
						if (matches_armor(e as Armor, STARTING_ARMOR_SPEC))
							return
						break
					case InventorySlot.weapon:
						if (matches_weapon(e as Weapon, STARTING_WEAPON_SPEC))
							return
						break
					default:
						break
				}

				if (e.quality === ItemQuality.common || freed_count === 0) {
					//console.log('    - selling:', e)
					state = _sell_item(state, e.uuid)
					freed_count++
					return
				}
			})

		if (freed_count === 0)
			throw new Error('Internal error: _auto_make_room(): inventory is full and couldn’t free stuff!')

		if (DEBUG) console.log(`    Freed ${freed_count} items, inventory now holding ${state.inventory.unslotted.length} items.`)
	}

	return state
}

/////////////////////

export {
	_update_to_now,

	_loose_all_energy,

	_receive_stat_increase,
	_receive_item,
	_sell_item,
	_receive_coins,
	_receive_tokens,

	_ack_all_engagements,
	_auto_make_room,
}