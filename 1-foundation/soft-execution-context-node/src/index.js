const os = require('os')

const { getRootSEC } = require('@offirmo/soft-execution-context')

// TODO protect from double install


function listenToUncaughtErrors() {
	const SEC = getRootSEC()
		.createChild()
		.setLogicalStack({operation: '(node/uncaught)'})

	process.on('uncaughtException', err => {
		SEC._handleError({
			SEC,
			debugId: 'node/uncaught',
			shouldRethrow: false,
		}, err)
	})
}


function listenToUnhandledRejections() {
	const SEC = getRootSEC()
		.createChild()
		.setLogicalStack({operation: '(node/unhandled rejection)'})

	process.on('unhandledRejection', err => {
		SEC._handleError({
			SEC,
			debugId: 'node/unhandled rejection',
			shouldRethrow: false,
		}, err)
	})
}


function decorateWithDetectedEnv() {
	const SEC = getRootSEC()

	// TODO normalize
	const details = {
		node_version: process.version,
		os_platform: os.platform(),
		os_release: os.release(),
		os_type: os.type(),
	}

	SEC.setAnalyticsAndErrorDetails(details)
}


module.exports = {
	listenToUncaughtErrors,
	listenToUnhandledRejections,
	decorateWithDetectedEnv,
}
