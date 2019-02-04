/////////////////////

import { compare_items_by_quality } from '@oh-my-rpg/definitions'

import { Weapon } from './types'
import { get_potential } from './selectors'

/////////////////////

// for sorting
function compare_weapons_by_potential(a: Readonly<Weapon>, b: Readonly<Weapon>): number {
	const a_dmg = get_potential(a)
	const b_dmg = get_potential(b)
	if (a_dmg !== b_dmg)
		return b_dmg - a_dmg

	// fallback to other attributes
	return compare_items_by_quality(a, b) || a.uuid.localeCompare(b.uuid)
}

/////////////////////

export {
	compare_weapons_by_potential,
}

/////////////////////
