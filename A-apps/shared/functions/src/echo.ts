import {
	APIGatewayEvent,
	Context,
	Response,
	NetlifyHandler, NetlifyContext,
} from './sub/types'
import { get_netlify_user_data } from "./sub/netlify"


export const handler: NetlifyHandler = async (
	event: APIGatewayEvent,
	badly_typed_context: Context,
): Promise<Response> => {
	const context: NetlifyContext = badly_typed_context as any

	let netlify_user_data: any
	try {
		netlify_user_data = get_netlify_user_data(context)
	}
	catch (err) {
		netlify_user_data = { err: { message: err.message } }
	}


	const all_the_things = JSON.stringify({
		badly_typed_context,
		event,
		netlify_user_data,
		// https://devdocs.io/node/process
		process: {
			//argv: process.argv,
			//execArgv: process.execArgv,
			//execPath: process.execPath,
			arch: process.arch,
			platform: process.platform,
			//config: process.config,
			//'cwd()': process.cwd(),
			//title: process.title,
			version: process.version,
			//release: process.release,
			versions: process.versions,
			env: _filter_out_secrets(process.env),
		},
	}, null, 2)

	console.log('will return:', all_the_things)

	return {
		statusCode: 200,
		headers: {},
		body: all_the_things,
	}
}


function _filter_out_secrets(env: NodeJS.ProcessEnv): NodeJS.ProcessEnv {
	return Object.entries(env)
		.map(([k, v]) => {
			const isSecret = k.toLowerCase().includes('secret')
				|| k.toLowerCase().includes('token')
			return [ k, isSecret ? '🙈' : v ]
		})
		.reduce((acc: any, [k, v]: any) => {
			acc[k] = v
			return acc
		}, {} as any)
}
