import {
	APIGatewayEvent,
	Context,
	Response,
	NetlifyHandler,
} from './sub/types'

const handler: NetlifyHandler = async (
	event: APIGatewayEvent,
	badly_typed_context: Context,
): Promise<Response> => {
	throw new Error('TEST ERROR!')

	//return new Error('TEST ERROR 2!')
}

export { handler }
