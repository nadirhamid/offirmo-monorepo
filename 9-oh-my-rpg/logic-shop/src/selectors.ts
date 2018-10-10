/////////////////////

import { Item, InventorySlot } from '@oh-my-rpg/definitions'
import {
	Armor,
	get_medium_damage_reduction,
	MAX_ENHANCEMENT_LEVEL as ARMOR_MAX_ENHANCEMENT_LEVEL,
} from '@oh-my-rpg/logic-armors'
import {
	Weapon,
	get_medium_damage,
	MAX_ENHANCEMENT_LEVEL as WEAPON_MAX_ENHANCEMENT_LEVEL,
} from '@oh-my-rpg/logic-weapons'

/////////////////////

const ARMOR_DMG_REDUCTION_TO_POWER_RATIO = 5.
function appraise_armor_power(armor: Readonly<Armor>, potential: boolean): number {
	armor = {
		...armor,
		enhancement_level: potential ? ARMOR_MAX_ENHANCEMENT_LEVEL: armor.enhancement_level,
	}
	return Math.round(get_medium_damage_reduction(armor) * ARMOR_DMG_REDUCTION_TO_POWER_RATIO)
}

const WEAPON_DMG_TO_POWER_RATIO = 5.
function appraise_weapon_power(weapon: Readonly<Weapon>, potential: boolean): number {
	weapon = {
		...weapon,
		enhancement_level: potential ? WEAPON_MAX_ENHANCEMENT_LEVEL: weapon.enhancement_level,
	}
	return Math.round(get_medium_damage(weapon) * WEAPON_DMG_TO_POWER_RATIO)
}

function appraise_power(item: Readonly<Item>, potential: boolean = true): number {
	switch(item.slot) {
		case InventorySlot.armor:
			return appraise_armor_power(item as Armor, potential)
		case InventorySlot.weapon:
			return appraise_weapon_power(item as Weapon, potential)
		default:
			throw new Error(`appraise_power(): no appraisal scheme for slot "${item.slot}" !`)
	}
}

///////
// TODO take rarity into account (shouldn't be linear)

const ARMOR_DMG_REDUCTION_TO_COINS_RATIO = 1.8
function appraise_armor_value(armor: Readonly<Armor>): number {
	return Math.round(get_medium_damage_reduction(armor) * ARMOR_DMG_REDUCTION_TO_COINS_RATIO)
}

const WEAPON_DMG_TO_COINS_RATIO = 0.8
function appraise_weapon_value(weapon: Readonly<Weapon>): number {
	return Math.round(get_medium_damage(weapon) * WEAPON_DMG_TO_COINS_RATIO)
}

function appraise_value(item: Readonly<Item>): number {
	switch(item.slot) {
		case InventorySlot.armor:
			return appraise_armor_value(item as Armor)
		case InventorySlot.weapon:
			return appraise_weapon_value(item as Weapon)
		default:
			throw new Error(`appraise_value(): no appraisal scheme for slot "${item.slot}" !`)
	}
}

/////////////////////

export {
	appraise_power,
	appraise_value,
}
