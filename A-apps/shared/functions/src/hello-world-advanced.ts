import {
	APIGatewayEvent,
	Context,
	NetlifyContext,
	Response,
	NetlifyHandler,
} from './sub/types'

import { use_middlewares_with_error_safety_net } from './sub/middlewares/runner'
import { XSoftExecutionContext } from './sub/services/sec'
import { require_http_method, HttpMethod } from './sub/middlewares/require-http-method'
import { require_authenticated } from './sub/middlewares/require-authenticated'


async function _handler(
	SEC: XSoftExecutionContext,
	event: Readonly<APIGatewayEvent>,
	context: Readonly<NetlifyContext>,
	response: Response,
	next: Function
): Promise<void> {
	response.statusCode = 200
	response.body = JSON.stringify(`Hello, ${SEC.getInjectedDependencies().user!.called}!`)
}


const handler: NetlifyHandler = (
	event: APIGatewayEvent,
	badly_typed_context: Context,
): Promise<Response> => {
	return use_middlewares_with_error_safety_net(event, badly_typed_context,[
		require_http_method([ HttpMethod.GET ]),
		require_authenticated,
		_handler,
	])
}

export { handler }
