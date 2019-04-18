import {
	demo_standard_console,
	demo_logger_api,
	demo_devtools_fonts,
} from '../../../../1-foundation/practical-logger-core/doc/demo.js'


export function demo_UWDAPI({ exposeInternal, overrideHook, addDebugCommand }) {
	addDebugCommand('demo_logger', demo_logger_api)

	exposeInternal('foo.bar.baz', 42)

	console.log('some value =', overrideHook('some-value', 'some default'))

	console.log('API =', { ...window._debug.v1 })
}

export function demo_full(api) {
	demo_standard_console()

	demo_logger_api(api.getLogger)

	demo_UWDAPI(api)

	//demo_devtools_fonts()
}