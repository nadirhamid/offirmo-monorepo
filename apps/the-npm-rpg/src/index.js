"use strict";

/////////////////////////////////////////////////
// node <8 zone
var loadJsonFile = require('load-json-file')
var PACKAGE_JSON_PATH = require('path').join('.', 'package.json')
var package_json = loadJsonFile.sync(PACKAGE_JSON_PATH)
var semver = require('semver')
if (!semver.satisfies(process.version, package_json.engines.node)) {
	console.error('ERROR: Invalid node, must be: ' + package_json.engines.node + '!\n')
	process.exit(3)
}

/////////////////////////////////////////////////

const Conf = require('conf')
const { create_game_instance } = require('@oh-my-rpg/state-the-boring-rpg')

const { SEC, init_savegame } = require('./init')
const { start_loop } = require('./interactive_mode')

/////////////////////////////////////////////////

SEC.xPromiseTryCatch('starting', async ({ SEC, logger }) => {
	const MINIMAL_TERMINAL_WIDTH = 80

	const verbose = false // XXX
	if (verbose) {
		logger.setLevel('verbose')
		logger.verbose('verbose mode activated')
	}

	const { version } = package_json
	const options = {
		version,
		verbose,
		is_interactive: true,
		may_clear_screen: true,
		term_width: MINIMAL_TERMINAL_WIDTH,
	}
	options.is_interactive = !!process.stdout.isTTY // TODO read params also
	//options.is_interactive = false
	options.may_clear_screen = options.is_interactive
	options.config = new Conf({
		configName: 'state',
		defaults: {},
	})
	logger.verbose(`config path: "${options.config.path}"`)
	logger.trace('loaded state:', {state: options.config.store})

	/////////////////////////////////////////////////

	const instance = create_game_instance({
		SEC,
		get_latest_state: () => options.config.store,
		persist_state: state => options.config.set(state),
	})

	/////////////////////////////////////////////////

	if (options.is_interactive) {
		return start_loop(SEC, options, instance)
			.then(() => console.log('Quitting...'))
	}

	/////////////////////////////////////////////////

	if (!options.is_interactive) {
		throw new Error('Non-interactive mode or non-tty terminals are not supported at this time, sorry!')
		//instance.play()
	}

//console.log('\n---------------------------------------------------------------\n')

})
