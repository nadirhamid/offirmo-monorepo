import deepFreeze from 'deep-freeze-strict'
import { State } from './types'

// needed to test migrations, both here and in composing parents

// a full featured, non-trivial demo state
// needed for demos

const DEMO_STATE: State = deepFreeze({
	schema_version: 1,
	revision: 5,

	uuid: 'uu1dgqu3h0FydqWyQ~6cYv3g',
	name: 'Offirmo',
	email: 'offirmo.net@gmail.com',
	allow_telemetry: false,
})

// the oldest format we can migrate from
// must correspond to state above
const OLDEST_LEGACY_STATE_FOR_TESTS: any = DEMO_STATE // TODO ALPHA freeze that

// some hints may be needed to migrate to demo state
const MIGRATION_HINTS_FOR_TESTS: any = deepFreeze({
})

/////////////////////

export {
	DEMO_STATE,
	OLDEST_LEGACY_STATE_FOR_TESTS,
	MIGRATION_HINTS_FOR_TESTS,
}
