import { NORMALIZERS } from '@offirmo-private/normalize-string'

import { TABLE_USERS } from './consts'
import get_db from '../db'
import logger from '../utils/logger'

////////////////////////////////////

export async function delete_by_email(
	raw_email: string,
	trx: ReturnType<typeof get_db> = get_db()
): Promise<void> {
	const normalized_email = NORMALIZERS.normalize_email_full(raw_email)
	logger.log('deleting user by email...', { raw_email, normalized_email })
	await trx(TABLE_USERS)
		.where('normalized_email', normalized_email)
		.delete()
}

// No need for sub-user delete, the deletion cascades
