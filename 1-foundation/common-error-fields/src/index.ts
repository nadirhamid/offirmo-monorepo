import { XError } from "./types"

function create(): Set<string> {
	return new Set<string>([

		// standard fields
		// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Error/prototype
		'name',
		'message',

		// quasi-standard
		// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Error/prototype
		'stack',

		// non standard but widely used
		// ?

		// Offirmo extensions
		'logicalStack',
	])
}

const default_instance = create()
const COMMON_ERROR_FIELDS = default_instance

export {
	XError,
	COMMON_ERROR_FIELDS,
	create,
}
