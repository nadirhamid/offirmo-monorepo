import assert from 'tiny-invariant'
import stable_stringify from 'json-stable-stringify'
import { get_UTC_timestamp_ms } from '@offirmo-private/timestamps'
import tiny_singleton from '@offirmo/tiny-singleton'
import { overrideHook } from '@offirmo/universal-debug-api-minimal-noop'
import { Storage } from '@offirmo-private/ts-types'

import { OMRContext } from '@oh-my-rpg/definitions'
import {
	NUMERIC_VERSION,
	State,
} from '@tbrpg/state'
import {
	Action,
	ActionStartGame,
	ActionType,
	SyncResult,
	TbrpgStorage,
	StorageKey,
} from '@tbrpg/interfaces'

import { LIB as ROOT_LIB } from '../../consts'
import { SoftExecutionContext } from '../../sec'
import { CloudStore } from '../types'
import { create as create_synchronizer } from './synchonizer'
import { create as create_jsonrpc_client } from './json-rpc-client'

const LIB = `${ROOT_LIB}/CloudStore`

function get_persisted_pending_actions(SEC: SoftExecutionContext, local_storage: Storage): Action[] {
	try {
		return SEC.xTry(`retrieving persisted actions`, ({}: OMRContext): Action[] => {
			let raw = local_storage.getItem(StorageKey['cloud.pending-actions'])
			if (!raw) return []

			let pending_actions = JSON.parse(raw)
			assert(Array.isArray(pending_actions), 'get_persisted_pending_actions type check')

			return pending_actions
		})
	}
	catch {
		return []
	}
}

function persist_pending_actions(SEC: SoftExecutionContext, local_storage: Storage, pending_actions: Action[]): void {
	return SEC.xTryCatch(`persisting ${pending_actions.length} action(s)`, ({}: OMRContext): void => {
		local_storage.setItem(
			StorageKey['cloud.pending-actions'],
			stable_stringify(pending_actions),
		)
	})
}

function reset_pending_actions(SEC: SoftExecutionContext, local_storage: Storage): void {
	return persist_pending_actions(SEC, local_storage, [])
}

function get_json_rpc_url(SEC: SoftExecutionContext) {
	// TODO auto depending to env
	return overrideHook('tbrpg.json-rpc-endpoint', 'http://localhost:9000/tbrpg-rpc')
}

function forbidden_get(): Readonly<State> | null {
	// this should never be called
	throw new Error(`[${LIB}] Unexpected get()!`)
}

function create(
	SEC: SoftExecutionContext,
	local_storage: Storage,
	initial_state: Readonly<State>,
	set: (new_state: Readonly<State>) => void, // useful for the cloud store to overwrite the mem store
): CloudStore {
	return SEC.xTry(LIB, ({SEC: ROOT_SEC}: OMRContext): CloudStore => {

		function re_create_cloud_store(initial_state: Readonly<State>) {
			return ROOT_SEC.xTry(`re-creating cloud store`, ({SEC, logger}: OMRContext): CloudStore => {
				let opt_out_reason: string | null = 'unknown!!' // so far
				let is_logged_in: boolean = false // so far
				let pending_actions = get_persisted_pending_actions(SEC, local_storage)
				//let last_sync_result: Promise<SyncResult> // TODO

				const call_json_rpc = create_jsonrpc_client({
					rpc_url: get_json_rpc_url(SEC),
				})

				function opt_out(reason: string) {
					opt_out_reason = reason
					logger.info(`[${LIB}] opted out of cloud sync.`, { reason })
				}

				function set(authoritative_state: Readonly<State>) {
					// TODO pushback!
					throw new Error(`[${LIB}] cloud store set() NIMP!`)
				}

				const get_synchronizer = tiny_singleton(() => create_synchronizer({
					SEC,
					call_remote_procedure: call_json_rpc,
					on_successful_sync: (result: SyncResult) => {
						const { common: { numver }, processed_up_to_time, authoritative_state } = result

						if (numver !== NUMERIC_VERSION) {
							// TODO trigger a refresh to update
							// TODO stop the sync?
							opt_out('We are outdated!')
							return
						}

						pending_actions = pending_actions.filter(action => action.time > processed_up_to_time)
						persist_pending_actions(ROOT_SEC, local_storage, pending_actions)

						if (authoritative_state) {
							set(authoritative_state)
						}
					},
					initial_pending_actions: pending_actions,
					initial_state,
				}))

				function dispatch(action: Readonly<Action>, eventual_state_hint?: Readonly<State>): void {
					assert(eventual_state_hint, 'state MUST be hinted!')
					if (opt_out_reason) return

					const { time, ...debug } = action
					logger.log(`[${LIB}] ⚡ action dispatched: ${action.type}`, {
						//action: debug,
						//pending_actions: pending_actions.length,
					})

					// snoop on some actions
					if (action.type === ActionType.on_logged_in_refresh) {
						is_logged_in = action.is_logged_in
					}

					// ignore some actions
					if (action.type === ActionType.update_to_now) {
						return
					}
					else if (action.type === ActionType.on_logged_in_refresh) {
						// don't persist but still continue executing
					}
					else {
						pending_actions.push(action)
						persist_pending_actions(ROOT_SEC, local_storage, pending_actions)
					}

					if (is_logged_in) {
						get_synchronizer().sync(pending_actions, eventual_state_hint!)
					}
				}

				SEC.xTryCatch(`restoring state from all bits`, ({logger}: OMRContext) => {

					if (initial_state.u_state.meta.persistence_id === null) {
						// intentionally not handled by cloud
						opt_out('intentional')
						return
					}

					if (initial_state.u_state.meta.persistence_id === undefined) {
						if (pending_actions.length === 0 && initial_state.u_state.revision === 0) {
							// new game freshly created
							opt_out_reason = null
							logger.info(`[${LIB}] new game, never persisted yet, could be in the future.`)

							const action: ActionStartGame = {
								time: get_UTC_timestamp_ms(),
								type: ActionType.start_game,
								expected_revisions: {},
								seed: initial_state.u_state.prng.seed,
							}
							dispatch(action)
							return
						}

						// how to check if state and pending actions match?
						if (pending_actions.length !== initial_state.u_state.revision) {
							// something is wrong, state and pending actions are out of sync
							console.log({pending_actions})
							logger.error(`${LIB} cloud store: never persisted yet but out of sync!`, {
								'pending_actions.length': pending_actions.length,
								revision: initial_state.u_state.revision
							})

							// what else can we do?
							opt_out('mismatching infos :(')
							return
						}

						// looks ok...
						opt_out_reason = null
						logger.info(`[${LIB}] existing game, never persisted yet, some pending actions`, {
							'pending_actions.length': pending_actions.length,
							revision: initial_state.u_state.revision
						})
						return
					}

					// we have a remote persistence id.
					// we still need to wait for the user to be logged in
					opt_out_reason = null
					logger.info(`[${LIB}] cloud sync enabled!`, {
						'pending_actions.length': pending_actions.length,
						revision: initial_state.u_state.revision
					})
				})

				// TODO check that we can write in LS
				// TODO send messages if data not synced

				return {
					set,
					dispatch,
					get: forbidden_get,
				}
			})
		}

		let real_cloud_store = re_create_cloud_store(initial_state)

		let indirect_store = {
			set(new_state: Readonly<State>): void {
				reset_pending_actions(ROOT_SEC, local_storage)
				real_cloud_store = re_create_cloud_store(new_state)
			},
			dispatch(action: Readonly<Action>, eventual_state_hint?: Readonly<State>): void {
				return real_cloud_store.dispatch(action, eventual_state_hint)
			},
			get(): Readonly<State> | null {
				return real_cloud_store.get()
			},
		}

		return indirect_store
	})
}

export default create
export {
	CloudStore,
	create,
}
