import '@babel/core'

import * as React from "react"
import * as ReactDOM from "react-dom"
import ErrorBoundary from '@offirmo-private/react-error-boundary'
import { overrideHook } from '@offirmo/universal-debug-api-browser'

import './index.css'

/////////////////////////////////////////////////

window.XOFF = {
	flags: {
		is_paused: overrideHook('should_start_paused', false),
		debug_render: overrideHook('should_trace_renders', false),
	},
}

setTimeout(() => ReactDOM.render(
	<ErrorBoundary name={'tbrpg_root'}>
		Hello world
	</ErrorBoundary>,
	document.getElementById('root'),
))
