'use strict'

const { getRootSEC } = require('@offirmo/soft-execution-context')
const {
	listenToErrorEvents,
	listenToUnhandledRejections,
	decorateWithDetectedEnv,
} = require('@offirmo/soft-execution-context-browser')
const { decorate_SEC } = require('@oh-my-rpg/definitions')

import { LIB } from './consts'
import { VERSION, BUILD_DATE } from './build.json'
import { CHANNEL } from './channel'
import logger from './logger'
import raven_client, { set_imminent_captured_error } from './raven'

/////////////////////////////////////////////////

const SEC = getRootSEC()
	.setLogicalStack({ module: LIB })
	.injectDependencies({ logger })

decorate_SEC(SEC)
decorateWithDetectedEnv(SEC)

SEC.injectDependencies({
	CHANNEL,
	VERSION,
})
SEC.setAnalyticsAndErrorDetails({
	product: 'tbrpg',
	VERSION,
	CHANNEL,
})

/////////////////////////////////////////////////

SEC.emitter.on('final-error', function onError({SEC, err}) {
	if (CHANNEL === 'dev') {
		logger.fatal('↑ error! (no report since dev)', {SEC, err})
	}
	else {
		set_imminent_captured_error(err)
		raven_client.captureException(err)
		console.log('(this error will be reported)')
	}
})

SEC.emitter.on('analytics', function onAnalytics({SEC, eventId, details}) {
	// TODO google!
	console.groupCollapsed(`⚡  Analytics! ⚡  ${eventId}`)
	console.log('details', details)
	console.groupEnd()
})

listenToErrorEvents()
listenToUnhandledRejections()

SEC.xTry('SEC/browser/listenToUnhandledRejections', ({logger}) => {
	logger.trace('Soft Execution Context initialized.', {SEC})
})

const { ENV } = SEC.getInjectedDependencies()
if (ENV !== process.env.NODE_ENV) {
	logger.error('ENV detection mismatch!', { 'SEC.ENV': ENV, 'process.env.NODE_ENV': process.env.NODE_ENV })
}

/////////////////////////////////////////////////

export default SEC
