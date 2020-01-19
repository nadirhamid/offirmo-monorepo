import path from 'path'

import assert from 'tiny-invariant'

import { EXIF_POWERED_FILE_EXTENSIONS } from './consts'
import { SimpleYYYYMMDD, AbsolutePath } from './types'


export interface Params {
	YYYY_lower_bound: number
	YYYY_upper_bound: number
	date_lower_bound: SimpleYYYYMMDD
	date_upper_bound: SimpleYYYYMMDD
	root: AbsolutePath
	dry_run: boolean
	extensions_to_normalize: { [k: string]: string }
	media_files_extensions: string[]
	extensions_to_delete: string[]
}

// the earliest known photo was taken in 1826
// https://en.wikipedia.org/wiki/View_from_the_Window_at_Le_Gras
const YYYY_LOWER_BOUND = 1826
const YYYY_UPPER_BOUND = (new Date()).getUTCFullYear() + 1
assert(YYYY_LOWER_BOUND >= 1826, 'earliest known')
assert(YYYY_UPPER_BOUND >= YYYY_LOWER_BOUND, 'higher > lower')

const DATE_LOWER_BOUND: SimpleYYYYMMDD = YYYY_LOWER_BOUND * 10000 +  101
const DATE_UPPER_BOUND: SimpleYYYYMMDD = YYYY_UPPER_BOUND * 10000 + 1231


export function get_params(): Params {
	// TODO some interface
	return {
		YYYY_lower_bound: YYYY_LOWER_BOUND,
		YYYY_upper_bound: YYYY_UPPER_BOUND,
		date_lower_bound: DATE_LOWER_BOUND,
		date_upper_bound: DATE_UPPER_BOUND,

		root: path.normalize(`/Users/${process.env.USER}/Documents/- photos sorter/- sorted`),
		dry_run: true,
		extensions_to_normalize: {
			// TODO
			'.jpeg': '.jpg',
		},
		media_files_extensions: [
			'.gif',
			'.png',
			'.psp', // photoshop I believe, screens from Warcraft III are in this format
			'.tga', // WoW
			...EXIF_POWERED_FILE_EXTENSIONS,
		],
		extensions_to_delete: [ '.AAE', '.DS_Store', ].map(s => s.toLowerCase()),
	}
}

/*
const DIGITS = '01234567890123456789'
export function get_allowed_digits_by_position() {
	const y0 = DIGITS.slice(
		Math.round(YYYY_LOWER_BOUND/1000),
		Math.round(YYYY_UPPER_BOUND/1000)
	)
	const y1 = DIGITS.slice(
		Math.round((YYYY_LOWER_BOUND % 1000)/100),
		Math.round((YYYY_UPPER_BOUND % 1000)/100) + Math.min(1, y0.length - 1) * 10,
	)
	const y2 = DIGITS.slice(
		Math.round((YYYY_LOWER_BOUND % 100)/10),
		Math.round((YYYY_UPPER_BOUND % 100)/10) + Math.min(1, y1.length - 1) * 10,
	)
	const y3 = DIGITS.slice(
		Math.round(YYYY_LOWER_BOUND % 10),
		Math.round(YYYY_UPPER_BOUND % 10) + Math.min(1, y2.length - 1) * 10,
	)
	return [
		// YYYY
		y0,
		y1,
		y2,
		y3,
		// MM
		'01',
		'0123456789',


	]
}
*/