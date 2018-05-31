import {
	getRootSEC,
} from '../../src/index.js'

const LIB = 'FOO'

function get_lib_SEC(parent) {
	// TODO memoize ? (if !parent)
	return (parent || getRootSEC())
		.createChild()
		.setLogicalStack({module: LIB})
}

function hello(target, {SEC} = {}) {
	get_lib_SEC(SEC).xTry(hello.name, ({SEC, logger}) => {
		logger.info(`[This is a log entry]`, {SEC})
		console.log(`Hello, ${target}!`)
	})
}


export {
	LIB,
	hello,
}
