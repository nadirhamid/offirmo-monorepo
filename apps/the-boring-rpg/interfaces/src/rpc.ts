import { Enum } from 'typescript-string-enums'

import { JSONRpcRequest, JSONRpcResponse } from '@offirmo/json-rpc-types'
import { TimestampUTCMs } from '@offirmo/timestamps'
import { ActionType } from '@tbrpg/flux'

////////////////////////////////////

const Method = Enum(
	// utils
	'echo',

	// tbrpg meta
	'sync',

	// tbrpg actions
	'play',
)
type Method = Enum<typeof Method> // eslint-disable-line no-redeclare

/////////////////////

interface RpcEcho extends JSONRpcRequest<any> {
	method: typeof Method.echo
}

interface RpcSync extends JSONRpcRequest<{}> {
	method: typeof Method.sync
}

interface RpcPlay extends JSONRpcRequest<{
	actions: ActionType[]
}> {
	method: typeof Method.play
}

/////////////////////

interface RpcEchoResponse extends JSONRpcResponse<any> {
}

interface RpcSyncResponse extends JSONRpcResponse<{
	v: string
}> {}

interface RpcPlayResponse extends JSONRpcResponse<{

}> {}

/////////////////////

type TbrpgRpc =
	RpcEcho |
	RpcSync |
	RpcPlay

type TbrpgRpcResponse =
	RpcEchoResponse |
	RpcSyncResponse |
	RpcPlayResponse

/////////////////////

export {
	JSONRpcRequest,
	JSONRpcResponse,

	Method,

	RpcEcho,
	RpcSync,
	RpcPlay,
	TbrpgRpc,

	RpcEchoResponse,
	RpcSyncResponse,
	RpcPlayResponse,
	TbrpgRpcResponse,
}