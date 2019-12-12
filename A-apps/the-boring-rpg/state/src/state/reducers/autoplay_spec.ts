import { expect } from 'chai'

import { dump_pretty_json } from '@offirmo-private/prettify-json'

import { ItemQuality, Item, InventorySlot } from '@oh-my-rpg/definitions'
import { xxx_internal_reset_prng_cache } from '@oh-my-rpg/state-prng'
import { Weapon, matches as matches_weapon } from '@oh-my-rpg/logic-weapons'
import { Armor, matches as matches_armor } from '@oh-my-rpg/logic-armors'


import { LIB } from '../../consts'
import {
	is_inventory_full,
} from '../../selectors'
import {
	STARTING_WEAPON_SPEC,
	STARTING_ARMOR_SPEC,
	create,
} from './create'
import { autoplay } from './autoplay'

describe(`${LIB} - reducer`, function() {
	beforeEach(() => xxx_internal_reset_prng_cache())

	describe('autoplay', function() {

		it('should allow playing a huge number of time (interface 1)', () => {
			let state = create()

			try {
				for (let i = 0; i < 1000; ++i) {
					state = autoplay(state, { DEBUG: false })
				}
			}
			catch (err) {
				console.error('CRASH!')
				dump_pretty_json('crash', state)
				throw err
			}

			//dump_pretty_json('success', state)
			expect(state.u_state.progress.statistics.good_play_count).to.equal(1000)
			expect(state.u_state.progress.statistics.bad_play_count).to.equal(0)
		})

		it('should automatically make good decisions (interface 2)', () => {
			let state = create()

			try {
				state = autoplay(state, {
					target_good_play_count: 1000,
				})
			}
			catch (err) {
				dump_pretty_json('crash', state)
				throw err
			}

			//dump_pretty_json('success', state)
			expect(state.u_state.avatar.klass).not.to.equal('novice')
			expect(is_inventory_full(state.u_state)).to.be.false
			const equipped_armor: Armor = state.u_state.inventory.slotted[InventorySlot.armor]!
			const equipped_weapon: Weapon = state.u_state.inventory.slotted[InventorySlot.weapon]!
			expect(matches_armor(equipped_armor, STARTING_ARMOR_SPEC)).to.be.false
			expect(matches_weapon(equipped_weapon, STARTING_WEAPON_SPEC)).to.be.false
		})

		it('should allow auto-looping with good and bad (interface 2)', () => {
			let state = create()

			try {
				state = autoplay(state, {
					target_good_play_count: 2000,
					target_bad_play_count: 100,
				})
			}
			catch (err) {
				dump_pretty_json('crash', state)
				throw err
			}

			//dump_pretty_json('success', state)
			expect(state.u_state.progress.statistics.good_play_count).to.equal(2000)
			expect(state.u_state.progress.statistics.bad_play_count).to.equal(100)
		})
	})
})