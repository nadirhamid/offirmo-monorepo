import { LIB } from '../consts'

export const INELIGIBILITY_REASON_INTERNAL_ERROR = 'internal_error'
export const INELIGIBILITY_REASON_KILL_SWITCHED = 'kill_switch'
export const INELIGIBILITY_REASON_COHORTED_OUT = 'cohorted_out'

export const INELIGIBILITY_REASON_NOT_RESOLVED_YET = 'xxx_not_resolved' // should never happen in production!

export const ERROR_MSG_MISSING_INFOS = `${LIB}: Missing infos!` // TODO review