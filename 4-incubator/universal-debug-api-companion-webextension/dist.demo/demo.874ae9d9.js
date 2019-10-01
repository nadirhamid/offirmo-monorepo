// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles
parcelRequire = (function (modules, cache, entry, globalName) {
  // Save the require from previous bundle to this closure if any
  var previousRequire = typeof parcelRequire === 'function' && parcelRequire;
  var nodeRequire = typeof require === 'function' && require;

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire = typeof parcelRequire === 'function' && parcelRequire;
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error('Cannot find module \'' + name + '\'');
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = cache[name] = new newRequire.Module(name);

      modules[name][0].call(module.exports, localRequire, module, module.exports, this);
    }

    return cache[name].exports;

    function localRequire(x){
      return newRequire(localRequire.resolve(x));
    }

    function resolve(x){
      return modules[name][1][x] || x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [function (require, module) {
      module.exports = exports;
    }, {}];
  };

  var error;
  for (var i = 0; i < entry.length; i++) {
    try {
      newRequire(entry[i]);
    } catch (e) {
      // Save first error but execute all entries
      if (!error) {
        error = e;
      }
    }
  }

  if (entry.length) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(entry[entry.length - 1]);

    // CommonJS
    if (typeof exports === "object" && typeof module !== "undefined") {
      module.exports = mainExports;

    // RequireJS
    } else if (typeof define === "function" && define.amd) {
     define(function () {
       return mainExports;
     });

    // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }

  // Override the current require with this new one
  parcelRequire = newRequire;

  if (error) {
    // throw error from earlier, _after updating parcelRequire_
    throw error;
  }

  return newRequire;
})({"c/QP":[function(require,module,exports) {
var global = arguments[3];
"use strict";
/* global globalThis, self, window, global */

Object.defineProperty(exports, "__esModule", {
  value: true
});
var lastResort = {};

function getGlobalThis() {
  // @ts-ignore
  if (typeof globalThis !== 'undefined') return globalThis; // check node first https://github.com/ljharb/globalThis/issues/2
  // @ts-ignore

  if (typeof global !== 'undefined') return global; // @ts-ignore

  if (typeof self !== 'undefined') return self; // @ts-ignore

  if (typeof window !== 'undefined') return window;
  if (typeof this !== 'undefined') return this;
  return lastResort; // should never happen
}

exports.getGlobalThis = getGlobalThis;
},{}],"pzxj":[function(require,module,exports) {
"use strict"; //////////// Public interface (for logger usage) ////////////

Object.defineProperty(exports, "__esModule", {
  value: true
});
},{}],"MGA6":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var practical_logger_interface_1 = require("@offirmo/practical-logger-interface");

exports.Logger = practical_logger_interface_1.Logger;
exports.LoggerCreationParams = practical_logger_interface_1.LoggerCreationParams;

var NO_OP = function () {};

var NO_OP_LOGGER = {
  setLevel: NO_OP,
  getLevel: function () {
    return 'silly';
  },
  addCommonDetails: NO_OP,
  fatal: NO_OP,
  emerg: NO_OP,
  alert: NO_OP,
  crit: NO_OP,
  error: NO_OP,
  warning: NO_OP,
  warn: NO_OP,
  notice: NO_OP,
  info: NO_OP,
  verbose: NO_OP,
  log: NO_OP,
  debug: NO_OP,
  trace: NO_OP,
  silly: NO_OP,
  group: NO_OP,
  groupCollapsed: NO_OP,
  groupEnd: NO_OP
};

function createLogger() {
  return NO_OP_LOGGER;
}

exports.createLogger = createLogger;
},{"@offirmo/practical-logger-interface":"pzxj"}],"PZGy":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var practical_logger_minimal_noop_1 = require("@offirmo/practical-logger-minimal-noop");

function create() {
  var NO_OP = function () {};

  var NO_OP_LOGGER = practical_logger_minimal_noop_1.createLogger();
  return {
    getLogger: function () {
      return NO_OP_LOGGER;
    },
    exposeInternal: NO_OP,
    overrideHook: function (k, v) {
      return v;
    },
    addDebugCommand: NO_OP
  };
}

exports.create = create;
},{"@offirmo/practical-logger-minimal-noop":"MGA6"}],"zaXi":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var practical_logger_interface_1 = require("@offirmo/practical-logger-interface");

exports.Logger = practical_logger_interface_1.Logger;
exports.LoggerCreationParams = practical_logger_interface_1.LoggerCreationParams;
},{"@offirmo/practical-logger-interface":"pzxj"}],"k+YD":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var v1_1 = require("./v1");

exports.WebDebugApiV1 = v1_1.WebDebugApi; // for convenience

var practical_logger_interface_1 = require("@offirmo/practical-logger-interface");

exports.Logger = practical_logger_interface_1.Logger;
exports.LoggerCreationParams = practical_logger_interface_1.LoggerCreationParams;
},{"./v1":"zaXi","@offirmo/practical-logger-interface":"pzxj"}],"Az9r":[function(require,module,exports) {
"use strict";

function __export(m) {
  for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}

Object.defineProperty(exports, "__esModule", {
  value: true
});

var globalthis_ponyfill_1 = require("@offirmo/globalthis-ponyfill");

var v1_1 = require("./v1");

exports.createV1 = v1_1.create; // ensure the root is present

var globalThis = globalthis_ponyfill_1.getGlobalThis();
exports.globalThis = globalThis;
globalThis._debug = globalThis._debug || {}; // install globally if no other implementation already present

globalThis._debug.v1 = globalThis._debug.v1 || v1_1.create(); // expose the current implementation

var instance = globalThis._debug.v1;
var getLogger = instance.getLogger,
    exposeInternal = instance.exposeInternal,
    overrideHook = instance.overrideHook,
    addDebugCommand = instance.addDebugCommand;
exports.getLogger = getLogger;
exports.exposeInternal = exposeInternal;
exports.overrideHook = overrideHook;
exports.addDebugCommand = addDebugCommand; // for convenience

__export(require("@offirmo/universal-debug-api-interface"));
},{"@offirmo/globalthis-ponyfill":"c/QP","./v1":"PZGy","@offirmo/universal-debug-api-interface":"k+YD"}],"Xw8P":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.DEFAULT_LOGGER_KEY = exports.DEFAULT_LOG_LEVEL = void 0;
// base to be directly importable from other modules
// without a full lib penalty
const DEFAULT_LOG_LEVEL = 'error';
exports.DEFAULT_LOG_LEVEL = DEFAULT_LOG_LEVEL;
const DEFAULT_LOGGER_KEY = ''; // yes, can be used as a key

exports.DEFAULT_LOGGER_KEY = DEFAULT_LOGGER_KEY;
},{}],"wO/n":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
var _exportNames = {
  LIB: true,
  LOG_LEVEL_TO_INTEGER: true,
  LOG_LEVEL_TO_HUMAN: true,
  ALL_LOG_LEVELS: true
};
exports.ALL_LOG_LEVELS = exports.LOG_LEVEL_TO_HUMAN = exports.LOG_LEVEL_TO_INTEGER = exports.LIB = void 0;

var _constsBase = require("./consts-base");

Object.keys(_constsBase).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (Object.prototype.hasOwnProperty.call(_exportNames, key)) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _constsBase[key];
    }
  });
});
const LIB = '@offirmo/practical-logger-core'; // level to a numerical value, for ordering and filtering.
// mnemonic:  100 = 100% = you will see 100% of the logs
//              1 =   1% = you will see 1% of the logs (obviously the most important)

exports.LIB = LIB;
const LOG_LEVEL_TO_INTEGER = {
  fatal: 1,
  emerg: 2,
  alert: 10,
  crit: 20,
  error: 30,
  warning: 40,
  warn: 40,
  notice: 45,
  info: 50,
  verbose: 70,
  log: 80,
  debug: 81,
  trace: 90,
  silly: 100
}; // rationalization to a clear, human understandable string

exports.LOG_LEVEL_TO_INTEGER = LOG_LEVEL_TO_INTEGER;
const LOG_LEVEL_TO_HUMAN = {
  fatal: 'fatal',
  emerg: 'emergency',
  alert: 'alert',
  crit: 'critical',
  error: 'error',
  warning: 'warn',
  warn: 'warn',
  notice: 'notice',
  info: 'info',
  verbose: 'verbose',
  log: 'log',
  debug: 'debug',
  trace: 'trace',
  silly: 'silly'
};
exports.LOG_LEVEL_TO_HUMAN = LOG_LEVEL_TO_HUMAN;
const ALL_LOG_LEVELS = Object.keys(LOG_LEVEL_TO_INTEGER).map(s => s).sort((a, b) => LOG_LEVEL_TO_INTEGER[a] - LOG_LEVEL_TO_INTEGER[b]);
exports.ALL_LOG_LEVELS = ALL_LOG_LEVELS;
},{"./consts-base":"Xw8P"}],"6tCv":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.looksLikeAnError = looksLikeAnError;
exports.normalizeArguments = normalizeArguments;

function looksLikeAnError(x) {
  return !!(x.name && x.message && x.stack);
} // harmonize
// also try to recover from some common errors
// TODO assess whether it's really good to be that permissive (also: hurts perfs)


function normalizeArguments(args) {
  //console.log('>>> NA', Array.from(args))
  let message = '';
  let details = {};
  let err = undefined;

  if (args.length > 2) {
    //console.warn('NA 1', args)
    // wrong invocation,
    // most likely a "console.log" style invocation from an untyped codebase.
    // "best effort" fallback:
    message = Array.prototype.join.call(args, ' ');
    details = {};
  } else {
    //console.log('NA 2')
    message = args[0] || '';
    details = args[1] || {}; // optimization

    if (!message || typeof args[0] !== 'string' || typeof details !== 'object') {
      // non-nominal call
      //console.warn('NA 2.1')
      // try to fix message (attempt 1)
      if (typeof message !== 'string') {
        //console.warn('NA 2.1.1', { message, details })
        if (looksLikeAnError(message)) {
          //console.warn('NA 2.1.1.1')
          // Another bad invocation
          // "best effort" fallback:
          err = message;
          message = err.message;
        } else if (typeof message === 'object' && !args[1]) {
          // no message, direct details
          //console.warn('NA 2.1.1.2')
          details = message;
          message = '';
        } else {
          //console.warn('NA 2.1.1.3')
          message = String(message);
        }
      } // try to fix details


      if (typeof details !== 'object') {
        //console.warn('NA 2.1.2', { details })
        // Another bad invocation
        // "best effort" fallback:
        message = [message, String(details)].join(' ');
        details = {};
      } // ensure we picked up err


      err = err || details.err; // attempt to fix message (attempt 2, after uniformizing details)

      if (!message && details.message) {
        //console.warn('NA 2.1.3', { details })
        const {
          message: m2,
          ...d2
        } = details;
        message = m2;
        details = d2;
      }

      message = message || err && err.message || '(no message)';
    }

    if (!err && looksLikeAnError(details)) {
      //console.warn('NA 2.2', { details })
      // details is in fact an error, extract it
      err = details;
      details = {
        err
      };
    } else if (err) details = {
      err,
      ...details
    };else details = { ...details
    };
  }

  return [message, details];
}
},{}],"lsLl":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.checkLevel = checkLevel;
exports.create = create;

var _consts = require("./consts");

var _normalizeArgs = require("./normalize-args");

function checkLevel(level) {
  if (!_consts.ALL_LOG_LEVELS.includes(level)) throw new Error(`[${_consts.LIB}] Not a valid log level: "${level}"!`);
}

function create({
  name = _consts.DEFAULT_LOGGER_KEY,
  suggestedLevel = _consts.DEFAULT_LOG_LEVEL,
  forcedLevel,
  commonDetails = {}
}, outputFn = console.log) {
  const internalState = {
    name,
    level: forcedLevel || suggestedLevel,
    commonDetails: { ...commonDetails
    },
    outputFn
  };
  let levelAsInt = 100; // so far

  const logger = _consts.ALL_LOG_LEVELS.reduce((logger, level) => {
    const primitive = function (rawMessage, rawDetails) {
      if (!isLevelEnabled(level)) return;
      const [message, details] = (0, _normalizeArgs.normalizeArguments)(arguments);
      internalState.outputFn(serializer(level, message, details));
    };

    logger[level] = primitive;
    return logger;
  }, {
    setLevel,
    getLevel,
    addCommonDetails,

    group() {},

    groupCollapsed() {},

    groupEnd() {}

  });

  function setLevel(level) {
    checkLevel(level);
    internalState.level = level;
    levelAsInt = _consts.LOG_LEVEL_TO_INTEGER[level];
  }

  setLevel(getLevel()); // to check it

  function isLevelEnabled(level) {
    checkLevel(level);
    return _consts.LOG_LEVEL_TO_INTEGER[level] <= levelAsInt;
  }

  function getLevel() {
    return internalState.level;
  }

  function addCommonDetails(details) {
    if (details.err) throw new Error(`[${_consts.LIB}] Can't set reserved property "err"!`);
    internalState.commonDetails = { ...internalState.commonDetails,
      ...details
    };
  }

  function serializer(level, msg, {
    err,
    ...details
  }) {
    const payload = {
      level,
      name,
      msg,
      time: +new Date(),
      details: { ...internalState.commonDetails,
        ...details
      }
    };
    if (err) payload.err = err;
    return payload;
  }

  return logger;
}
},{"./consts":"wO/n","./normalize-args":"6tCv"}],"goqO":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
var _exportNames = {
  createLogger: true,
  checkLevel: true,
  ALL_LOG_LEVELS: true,
  LOG_LEVEL_TO_INTEGER: true,
  LOG_LEVEL_TO_HUMAN: true,
  DEFAULT_LOG_LEVEL: true,
  DEFAULT_LOGGER_KEY: true
};
Object.defineProperty(exports, "createLogger", {
  enumerable: true,
  get: function () {
    return _core.create;
  }
});
Object.defineProperty(exports, "checkLevel", {
  enumerable: true,
  get: function () {
    return _core.checkLevel;
  }
});
Object.defineProperty(exports, "ALL_LOG_LEVELS", {
  enumerable: true,
  get: function () {
    return _consts.ALL_LOG_LEVELS;
  }
});
Object.defineProperty(exports, "LOG_LEVEL_TO_INTEGER", {
  enumerable: true,
  get: function () {
    return _consts.LOG_LEVEL_TO_INTEGER;
  }
});
Object.defineProperty(exports, "LOG_LEVEL_TO_HUMAN", {
  enumerable: true,
  get: function () {
    return _consts.LOG_LEVEL_TO_HUMAN;
  }
});
Object.defineProperty(exports, "DEFAULT_LOG_LEVEL", {
  enumerable: true,
  get: function () {
    return _consts.DEFAULT_LOG_LEVEL;
  }
});
Object.defineProperty(exports, "DEFAULT_LOGGER_KEY", {
  enumerable: true,
  get: function () {
    return _consts.DEFAULT_LOGGER_KEY;
  }
});

var _core = require("./core");

var _consts = require("./consts");

var _normalizeArgs = require("./normalize-args");

Object.keys(_normalizeArgs).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (Object.prototype.hasOwnProperty.call(_exportNames, key)) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _normalizeArgs[key];
    }
  });
});
},{"./core":"lsLl","./consts":"wO/n","./normalize-args":"6tCv"}],"K8Q0":[function(require,module,exports) {
const {
  ALL_LOG_LEVELS
} = require('..');

function demo_standard_console() {
  console.log('------------↓ demo: standard console ↓-----------');
  console.error('Standard console "error"');
  console.warn('Standard console "warn"');
  console.info('Standard console "info"');
  console.log('Standard console "log"');
  console.debug('Standard console "debug"');
}

function demo_logger_basic_usage(logger) {
  console.group('-----------↓ logger demo: basic usage ↓-----------');
  logger.verbose('Restoring state…');
  logger.warn('Restoration is taking more time than usual', {
    elapsedMs: 3000
  });
  const bob = {
    firstName: 'Bob',
    lastName: 'Dupont',
    age: 42
  };
  logger.verbose('Current user loaded', {
    user: bob
  });
  const err = new Error('Timeout loading state!');
  err.httpStatus = 418; // to check that custom props are preserved

  logger.error(undefined, err);
  console.groupEnd();
}

function demo_logger_levels(logger) {
  console.log('-----------↓ logger demo: all levels, in order ↓-----------');
  ALL_LOG_LEVELS.forEach(level => logger[level](`demo with level "${level}"`, {
    level,
    foo: 42
  }));
  /*
  console.groupCollapsed('in group')
  ALL_LOG_LEVELS.forEach(level =>
     logger[level](`msg with level "${level}"`)
  )
  console.groupEnd()
  */
}

function demo_group(logger) {
  console.log('-----------↓ logger demo: group ↓-----------');
  logger.group('level 1');
  logger.log('in level 1');
  logger.groupCollapsed('level 2a');
  logger.log('in level 2a');
  logger.groupEnd();
  logger.groupCollapsed('level 2b');
  logger.log('in level 2b');
  logger.warn('warn from level 2b!');
  logger.error(new Error('error from level 2b!'));
  logger.groupEnd();
  logger.log('where am I?');
  logger.groupEnd();
  logger.groupEnd();
  logger.groupEnd();
}

function demo_incorrect_logger_invocations(logger) {
  const bob = {
    firstName: 'Bob',
    lastName: 'Dupont',
    age: 42
  };
  const more = 'some stuff';
  const err = new Error('Timeout loading state!');
  err.httpStatus = 418; // to check that custom props are preserved

  console.group('-----------↓ logger demo: incorrect invocation (bunyan style) ↓-----------');
  logger.info();
  logger.info('hi');
  logger.info('hi %s', bob, more);
  logger.info({
    foo: 'bar'
  }, 'hi');
  logger.info(err);
  logger.info(err, 'more on this: %s', more);
  logger.info({
    foo: 'bar',
    err: err
  }, 'some msg about this error');
  logger.warn('foo', 'bar', 42);
  console.groupEnd();
}

function demo_logger_api(getLogger) {
  console.log('-----------↓ logger creation and basic usage ↓-----------');
  const root_logger = getLogger({
    suggestedLevel: 'silly'
  });
  root_logger.log('Starting up');
  const logger = getLogger({
    name: 'Persistence',
    suggestedLevel: 'silly'
  });
  demo_logger_basic_usage(logger);
  demo_logger_levels(logger);
  demo_group(logger);
  demo_incorrect_logger_invocations(logger);
}

function demo_error(logger) {
  console.group('-----------↓ logger demo: error display ↓-----------');

  function foo() {
    function bar() {
      const err = new Error('Test!');
      err.statusCode = 1234;
      err.details = {
        hello: 42
      };
      throw err;
    }

    bar();
  }

  try {
    foo();
  } catch (err) {
    logger.log(err);
    logger.log('log', err);
    logger.log('log', {
      some: 'stuff',
      err
    });
    logger.error(err);
    logger.error('message', err);
    logger.error('message', {
      some: 'stuff',
      err
    });
    logger.error('message', {
      some: 'stuff'
    }, err);
    logger.error('message', err, {
      some: 'stuff'
    });
    logger.error('message', {
      some: 'stuff'
    });
  }

  console.groupEnd();
}

function demo_devtools_fonts() {
  console.group('-----------↓ available font styles ↓-----------');
  console.log('default: ABCdef012');
  ['-apple-system', 'BlinkMacSystemFont', '"avenir next"', 'avenir', '"Segoe UI"', '"lucida grande"', '"helvetica neue"', 'helvetica', '"Fira Sans"', 'roboto', //'noto',
  //'"Droid Sans"',
  //'cantarell',
  //'oxygen',
  //'ubuntu',
  //'"franklin gothic medium"',
  //'"century gothic"',
  '"Liberation Sans"', 'sans-serif', '"dejavu sans mono"', '"Fira Code"', 'Menlo', 'Consolas', '"Lucida Console"', '"Courier New"', 'monospace'].forEach(font => console.log(`%c${font}: ABCdefi012 %cABCdefi012`, `font-family: ${font};`, `font-family: unset;`));
  console.groupEnd();
}

module.exports = {
  demo_standard_console,
  demo_logger_basic_usage,
  demo_logger_levels,
  demo_error,
  demo_group,
  demo_incorrect_logger_invocations,
  demo_logger_api,
  demo_devtools_fonts
};
},{"..":"goqO"}],"Focm":[function(require,module,exports) {
"use strict";

var _universalDebugApiMinimalNoop = require("@offirmo/universal-debug-api-minimal-noop");

var _sharedDemo = require("../../../../1-foundation/practical-logger-core/doc/shared-demo");

/* global: _debug */
//import '../../src/injected-libs/universal-debug-api-control'
const LIB = `📄 demo/head-script`;
console.warn(`[${LIB}.${+Date.now()}] Hello, more standard!`, {
  foo_js: window.foo,
  foo_ls: (() => {
    try {
      // local files may not have local storage
      return localStorage.getItem('foo');
    } catch {
      /* ignore */
    }
  })(),
  _debug
}); //////////// usage

const logger = (0, _universalDebugApiMinimalNoop.getLogger)();
logger.info('Hello from root logger!');

if (false) {
  (0, _sharedDemo.demo_logger_levels)(logger);
}

_debug.v1.addDebugCommand('pause', () => {
  console.log('paused');
});

function render() {
  const is_feature_x_on = (0, _universalDebugApiMinimalNoop.overrideHook)('is_feature_X_on', false);
  const span_f = document.getElementById('feature-x');
  span_f.innerText = is_feature_x_on ? '✅' : '❌';
  const server = (0, _universalDebugApiMinimalNoop.overrideHook)('SERVER_URL', 'https://www.online-adventur.es/');
  const link = document.getElementById('server-url');
  link.href = link.innerText = server;
  const variation = (0, _universalDebugApiMinimalNoop.overrideHook)('experiment_Y_cohort', 'not-enrolled');
  const span_x = document.getElementById('experiment');
  span_x.innerText = variation;
  const custom = (0, _universalDebugApiMinimalNoop.overrideHook)('custom', undefined);
  const span_c = document.getElementById('custom');
  span_c.innerText = String(custom);
}

setInterval(render, 1000);
setTimeout(render, 1); // just for it not to be sync
//////////// communication ////////////

/*
function onMessage(event) {
	console.log(`[${LIB}.${+Date.now()}] seen postMessage:`, event.data)
}
const listenerOptions = {
	capture: false, // http://devdocs.io/dom/window/postmessage
}
window.addEventListener('message', onMessage, listenerOptions)
*/

/*
console.log(`[${LIB}.${+Date.now()}] sending a test postMessage...`)
window.postMessage({msg: `Test message from ${LIB}`}, '*')
*/
},{"@offirmo/universal-debug-api-minimal-noop":"Az9r","../../../../1-foundation/practical-logger-core/doc/shared-demo":"K8Q0"}]},{},["Focm"], null)
//# sourceMappingURL=demo.874ae9d9.js.map