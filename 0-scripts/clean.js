'use strict'

const path = require('path')
const stylize_string = require('chalk')
const meow = require('meow')
const fs = require('@offirmo/cli-toolbox/fs/extra')

/////////////////////

const cli = meow('clean', {
})

/////////////////////

const PKG_PATH = process.cwd()

const PKG_JSON = require(path.join(PKG_PATH, 'package.json'))
const PKG_NAME = PKG_JSON.name

/////////////////////

//console.log({PKG_PATH, DIST_DIR, DEPS_DIR})
console.log(`🔧  🔻 Cleaning ${stylize_string.bold(PKG_NAME)} [${cli.input}]...`)


Promise.all(cli.input
	.map(dir => {
		switch(dir) {
			case '…dist':
				return fs.remove(path.join(PKG_PATH, 'dist'))
			case '…cache':
				return Promise.all([
					fs.remove(path.join(PKG_PATH, '.cache')),
					fs.remove(path.join(PKG_PATH, '.parcel')),
				])
			case '…deps': // TODO useful?
				return fs.remove(path.join(PKG_PATH, 'node_modules'))
			default:
				return fs.remove(path.join(PKG_PATH, dir))
		}
	})
)
	.then(() => console.log(`🔧  🔺 Cleaning ${stylize_string.bold(PKG_NAME)} [${cli.input}] done ✔`))
