import {
	LogLevel,
	LogDetails,
	Logger,
} from '@offirmo/practical-logger-types'

import {
	ALL_LOG_LEVELS,
	LEVEL_TO_INTEGER as LOG_LEVEL_TO_INTEGER,
	LEVEL_TO_HUMAN as LOG_LEVEL_TO_HUMAN,
} from './consts'

import {
	create as createLogger
} from './core'

// export what's needed to create a final logger
export {
	//LogLevel,
	//LogDetails,
	Logger,

	createLogger,

	ALL_LOG_LEVELS,
	LOG_LEVEL_TO_INTEGER,
	LOG_LEVEL_TO_HUMAN,
}
