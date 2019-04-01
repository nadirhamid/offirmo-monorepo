//import { JSONRpcRequest, JSONRpcResponse } from '@offirmo-private/json-rpc-types'
import { RpcEcho, RpcEchoResponse } from '@tbrpg/interfaces'

function handle(
	req: RpcEcho,
	res: RpcEchoResponse,
): RpcEchoResponse {
	const { method, params } = req

	res.result = { method, params }
	delete res.error

	return res
}

////////////////////////////////////

export default handle
