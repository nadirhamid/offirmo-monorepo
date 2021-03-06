import { Enum } from 'typescript-string-enums'

import { HumanReadableTimestampUTCMinutes } from '@offirmo-private/timestamps'
import { BaseUState } from '@offirmo-private/state'

/////////////////////

interface CodeSpec<T> {
	code: string // also serves as unique key
	redeem_limit: number | null // null = no limit or non-count limit (see is_redeemable)
	is_redeemable: (infos: Readonly<T>, state: Readonly<State>) => boolean
	redemption_success_message?: string
	//redemption_success_reducer: (state: Readonly<State>) => Readonly<State>,
}

interface CodeRedemption {
	redeem_count: number
	last_redeem_date_minutes: HumanReadableTimestampUTCMinutes
}
/////////////////////

interface State extends BaseUState {
	redeemed_codes: { [key: string]: CodeRedemption }
}

/////////////////////

export {
	CodeSpec,
	CodeRedemption,
	State,
}

/////////////////////
