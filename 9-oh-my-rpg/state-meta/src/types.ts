import { Enum } from 'typescript-string-enums'

import { BaseUState } from '@offirmo-private/state'

/////////////////////

interface State extends BaseUState {

	// undefined = not created yet
	// null = opted out DEPRECATED we can always backup, just no social features
	persistence_id: undefined | string

	is_web_diversity_supporter: boolean

	is_logged_in: boolean
	roles: string[]
}

/////////////////////

export {
	State,
}

/////////////////////
