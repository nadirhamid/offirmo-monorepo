import { Enum } from 'typescript-string-enums'

import { BaseUState } from '@offirmo-private/state'

/////////////////////

interface State extends BaseUState {
	persistence_id: string | null | undefined

	is_web_diversity_supporter: boolean

	is_logged_in: boolean
	roles: string[]
}

/////////////////////

export {
	State,
}

/////////////////////
