import { getGlobalThis } from '@offirmo/globalthis-ponyfill'
import { DebugApiRoot, DebugApi } from '@offirmo/universal-debug-api-interface'

import createV1, { OWN_LOGGER_NAME } from './v1'

const globalThis = getGlobalThis()

// ensure the root is present
globalThis._debug = globalThis._debug || {}

const root: DebugApiRoot = globalThis._debug

//////////// v1 ////////////

// install globally if no better implementation already present
root.v1 = ((existing) => {
	// We CAN'T replace an existing one, even if we are more recent,
	// because the existing one may already have been called
	// and be having a state that can't be carried over.
	// HOWEVER some hints may help the user:
	const candidate = createV1()
	let ownLogger = candidate.getLogger({name: OWN_LOGGER_NAME})
	ownLogger.log('as a candidate, attempting to attach…')

	if (!existing) {
		ownLogger.log('nominal install ✅')
		return candidate // nominal case, this implementation is first
	}

	// something is wrong,
	// help the user figure it out
	let isExistingAPlaceholder = !existing._ // we know that the placeholder doesn't define this optional prop

	if (isExistingAPlaceholder) {
		ownLogger.warn('install warning: a placeholder is already present, you may have missed some calls! the true implementation should be imported earlier! Check the order of your scripts!')
		// better than nothing, may still miss some calls
		ownLogger.log('as a candidate, replacing existing ⚠')
		return candidate
	}

	ownLogger = existing.getLogger({name: OWN_LOGGER_NAME})
	ownLogger.warn('install warning: several true implementation coexists, only the top module should import it. Check your submodules!')

	try {
		const minVersion = Math.min(existing._!.minor, candidate._!.minor)
		if (minVersion !== candidate._!.minor)
			ownLogger.warn(`install warning: several true implementation coexists, including an outdated one: "v${minVersion}"!`)
	} catch (err) {
		ownLogger.warn(err)
	}

	ownLogger.log('as a candidate, discarding myself: existing is good enough ✅')
	return existing // don't replace
})(root.v1)

//////////// latest ////////////

// directly expose the latest implementation known to this lib
const instance: DebugApi = root.v1

const {
	getLogger,
	exposeInternal,
	overrideHook,
	addDebugCommand,
} = instance

export {
	getLogger,
	exposeInternal,
	overrideHook,
	addDebugCommand,

	globalThis, // for convenience

	createV1, // special cases
}

// types
export * from '@offirmo/universal-debug-api-interface'
