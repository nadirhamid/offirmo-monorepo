!function(e,r){for(var t in r)e[t]=r[t]}(exports,function(e){var r={};function t(n){if(r[n])return r[n].exports;var o=r[n]={i:n,l:!1,exports:{}};return e[n].call(o.exports,o,o.exports,t),o.l=!0,o.exports}return t.m=e,t.c=r,t.d=function(e,r,n){t.o(e,r)||Object.defineProperty(e,r,{enumerable:!0,get:n})},t.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},t.t=function(e,r){if(1&r&&(e=t(e)),8&r)return e;if(4&r&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(t.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&r&&"string"!=typeof e)for(var o in e)t.d(n,o,function(r){return e[r]}.bind(null,o));return n},t.n=function(e){var r=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(r,"a",r),r},t.o=function(e,r){return Object.prototype.hasOwnProperty.call(e,r)},t.p="",t(t.s=5)}([function(e,r,t){"use strict";function n(){for(var e=[],r=0;r<arguments.length;r++)e[r]=arguments[r];if("string"==typeof e[0]){for(var t={},n=0,o=e;n<o.length;n++){var u=o[n];t[u]=u}return t}return e[0]}Object.defineProperty(r,"__esModule",{value:!0}),r.Enum=n,function(e){function r(e){for(var r=[],t=0,n=Object.keys(e);t<n.length;t++){var o=n[t];r.push(e[o])}return r}e.ofKeys=function(e){for(var r={},t=0,n=Object.keys(e);t<n.length;t++){var o=n[t];r[o]=o}return r},e.keys=function(e){return Object.keys(e)},e.values=r,e.isType=function(e,t){return-1!==r(e).indexOf(t)}}(n=r.Enum||(r.Enum={}))},,,,,function(e,r,t){"use strict";Object.defineProperty(r,"__esModule",{value:!0});const n=t(0),o=t(6),u=t(10),a={parse_error:-32700,invalid_request:-32600,method_not_found:-32601,invalid_params:-32602,internal_error:-32603},c={code:a.internal_error,message:"Internal error!",data:{}};r.handler=(async(e,r)=>{console.log("\n*******\n* handling a tbrpg-rpc…");let t=500,i={jsonrpc:"2.0",id:"???",error:c,result:void 0};try{i.error.code=a.invalid_request,t=400,function(e){const{httpMethod:r,body:t,isBase64Encoded:n}=e;if("PUT"!==r)throw o.create_error("Wrong HTTP method!",{statusCode:405});if(n)throw o.create_error("Base 64 unexpected!",{statusCode:422});if(!t||t.length>3e4)throw o.create_error("Bad body!",{statusCode:413})}(e);const r=function(e,r){let t;try{t=JSON.parse(r.body)}catch(r){throw console.error(r),e.error.code=a.parse_error,o.create_error("JSON.Parse error!",{statusCode:400})}if(Array.isArray(t))throw e.error.code=a.parse_error,o.create_error("Batch RPC not implemented!",{statusCode:501});if("id,jsonrpc,method,params"!==Object.keys(t).sort().join(",")||"2.0"!==t.jsonrpc||!Number.isInteger(t.id)&&"string"!=typeof t.id)throw e.error.code=a.invalid_request,o.create_error("Bad JSON-RPC structure!",{statusCode:400});if(e.id=t.id,Object.keys(t.params).length<1)throw e.error.code=a.invalid_params,o.create_error("Invalid params!",{statusCode:400});if(!n.Enum.isType(u.Method,t.method))throw e.error.code=a.method_not_found,o.create_error("Invalid RPC method!",{statusCode:400});return t}(i,e);i.error.code=a.internal_error,t=500,i=function(e,r,t){r.error.code=a.internal_error;const{id:n,method:c,params:i}=e;switch(c){case u.Method.echo:r.result={method:c,params:i},delete r.error;break;default:throw o.create_error("RPC method not implemented!",{statusCode:501})}return r}(r,i),t=200}catch(e){t=e.statusCode||500,e.jsonrpc_response&&(i=e.jsonrpc_response),i.error||(i.error=i.error||c),i.error.message=e.message,delete i.result}return{statusCode:t,body:JSON.stringify(i)}})},function(e,r,t){"use strict";Object.defineProperty(r,"__esModule",{value:!0});const n=t(7);function o(e,r={}){const t=new Error(e);return Object.keys(r).forEach(e=>{n.COMMON_ERROR_FIELDS.has(e)&&"name"!==e&&"message"!==e&&"stack"!==e?t[e]=r[e]:(t.details=t.details||{},t.details[e]=r[e])}),t}r.create_error=o,r.throw_new_error=function(e,r={}){throw o(e,r)}},function(e,r,t){"use strict";Object.defineProperty(r,"__esModule",{value:!0}),t(8).__exportStar(t(9),r)},function(e,r,t){"use strict";t.r(r),t.d(r,"__extends",function(){return o}),t.d(r,"__assign",function(){return u}),t.d(r,"__rest",function(){return a}),t.d(r,"__decorate",function(){return c}),t.d(r,"__param",function(){return i}),t.d(r,"__metadata",function(){return f}),t.d(r,"__awaiter",function(){return s}),t.d(r,"__generator",function(){return l}),t.d(r,"__exportStar",function(){return d}),t.d(r,"__values",function(){return p}),t.d(r,"__read",function(){return y}),t.d(r,"__spread",function(){return _}),t.d(r,"__await",function(){return h}),t.d(r,"__asyncGenerator",function(){return b}),t.d(r,"__asyncDelegator",function(){return v}),t.d(r,"__asyncValues",function(){return m}),t.d(r,"__makeTemplateObject",function(){return O}),t.d(r,"__importStar",function(){return w}),t.d(r,"__importDefault",function(){return g});
/*! *****************************************************************************
Copyright (c) Microsoft Corporation. All rights reserved.
Licensed under the Apache License, Version 2.0 (the "License"); you may not use
this file except in compliance with the License. You may obtain a copy of the
License at http://www.apache.org/licenses/LICENSE-2.0

THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
MERCHANTABLITY OR NON-INFRINGEMENT.

See the Apache Version 2.0 License for specific language governing permissions
and limitations under the License.
***************************************************************************** */
var n=function(e,r){return(n=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,r){e.__proto__=r}||function(e,r){for(var t in r)r.hasOwnProperty(t)&&(e[t]=r[t])})(e,r)};function o(e,r){function t(){this.constructor=e}n(e,r),e.prototype=null===r?Object.create(r):(t.prototype=r.prototype,new t)}var u=function(){return(u=Object.assign||function(e){for(var r,t=1,n=arguments.length;t<n;t++)for(var o in r=arguments[t])Object.prototype.hasOwnProperty.call(r,o)&&(e[o]=r[o]);return e}).apply(this,arguments)};function a(e,r){var t={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&r.indexOf(n)<0&&(t[n]=e[n]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var o=0;for(n=Object.getOwnPropertySymbols(e);o<n.length;o++)r.indexOf(n[o])<0&&(t[n[o]]=e[n[o]])}return t}function c(e,r,t,n){var o,u=arguments.length,a=u<3?r:null===n?n=Object.getOwnPropertyDescriptor(r,t):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,r,t,n);else for(var c=e.length-1;c>=0;c--)(o=e[c])&&(a=(u<3?o(a):u>3?o(r,t,a):o(r,t))||a);return u>3&&a&&Object.defineProperty(r,t,a),a}function i(e,r){return function(t,n){r(t,n,e)}}function f(e,r){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,r)}function s(e,r,t,n){return new(t||(t=Promise))(function(o,u){function a(e){try{i(n.next(e))}catch(e){u(e)}}function c(e){try{i(n.throw(e))}catch(e){u(e)}}function i(e){e.done?o(e.value):new t(function(r){r(e.value)}).then(a,c)}i((n=n.apply(e,r||[])).next())})}function l(e,r){var t,n,o,u,a={label:0,sent:function(){if(1&o[0])throw o[1];return o[1]},trys:[],ops:[]};return u={next:c(0),throw:c(1),return:c(2)},"function"==typeof Symbol&&(u[Symbol.iterator]=function(){return this}),u;function c(u){return function(c){return function(u){if(t)throw new TypeError("Generator is already executing.");for(;a;)try{if(t=1,n&&(o=2&u[0]?n.return:u[0]?n.throw||((o=n.return)&&o.call(n),0):n.next)&&!(o=o.call(n,u[1])).done)return o;switch(n=0,o&&(u=[2&u[0],o.value]),u[0]){case 0:case 1:o=u;break;case 4:return a.label++,{value:u[1],done:!1};case 5:a.label++,n=u[1],u=[0];continue;case 7:u=a.ops.pop(),a.trys.pop();continue;default:if(!(o=(o=a.trys).length>0&&o[o.length-1])&&(6===u[0]||2===u[0])){a=0;continue}if(3===u[0]&&(!o||u[1]>o[0]&&u[1]<o[3])){a.label=u[1];break}if(6===u[0]&&a.label<o[1]){a.label=o[1],o=u;break}if(o&&a.label<o[2]){a.label=o[2],a.ops.push(u);break}o[2]&&a.ops.pop(),a.trys.pop();continue}u=r.call(e,a)}catch(e){u=[6,e],n=0}finally{t=o=0}if(5&u[0])throw u[1];return{value:u[0]?u[1]:void 0,done:!0}}([u,c])}}}function d(e,r){for(var t in e)r.hasOwnProperty(t)||(r[t]=e[t])}function p(e){var r="function"==typeof Symbol&&e[Symbol.iterator],t=0;return r?r.call(e):{next:function(){return e&&t>=e.length&&(e=void 0),{value:e&&e[t++],done:!e}}}}function y(e,r){var t="function"==typeof Symbol&&e[Symbol.iterator];if(!t)return e;var n,o,u=t.call(e),a=[];try{for(;(void 0===r||r-- >0)&&!(n=u.next()).done;)a.push(n.value)}catch(e){o={error:e}}finally{try{n&&!n.done&&(t=u.return)&&t.call(u)}finally{if(o)throw o.error}}return a}function _(){for(var e=[],r=0;r<arguments.length;r++)e=e.concat(y(arguments[r]));return e}function h(e){return this instanceof h?(this.v=e,this):new h(e)}function b(e,r,t){if(!Symbol.asyncIterator)throw new TypeError("Symbol.asyncIterator is not defined.");var n,o=t.apply(e,r||[]),u=[];return n={},a("next"),a("throw"),a("return"),n[Symbol.asyncIterator]=function(){return this},n;function a(e){o[e]&&(n[e]=function(r){return new Promise(function(t,n){u.push([e,r,t,n])>1||c(e,r)})})}function c(e,r){try{(t=o[e](r)).value instanceof h?Promise.resolve(t.value.v).then(i,f):s(u[0][2],t)}catch(e){s(u[0][3],e)}var t}function i(e){c("next",e)}function f(e){c("throw",e)}function s(e,r){e(r),u.shift(),u.length&&c(u[0][0],u[0][1])}}function v(e){var r,t;return r={},n("next"),n("throw",function(e){throw e}),n("return"),r[Symbol.iterator]=function(){return this},r;function n(n,o){r[n]=e[n]?function(r){return(t=!t)?{value:h(e[n](r)),done:"return"===n}:o?o(r):r}:o}}function m(e){if(!Symbol.asyncIterator)throw new TypeError("Symbol.asyncIterator is not defined.");var r,t=e[Symbol.asyncIterator];return t?t.call(e):(e=p(e),r={},n("next"),n("throw"),n("return"),r[Symbol.asyncIterator]=function(){return this},r);function n(t){r[t]=e[t]&&function(r){return new Promise(function(n,o){(function(e,r,t,n){Promise.resolve(n).then(function(r){e({value:r,done:t})},r)})(n,o,(r=e[t](r)).done,r.value)})}}}function O(e,r){return Object.defineProperty?Object.defineProperty(e,"raw",{value:r}):e.raw=r,e}function w(e){if(e&&e.__esModule)return e;var r={};if(null!=e)for(var t in e)Object.hasOwnProperty.call(e,t)&&(r[t]=e[t]);return r.default=e,r}function g(e){return e&&e.__esModule?e:{default:e}}},function(e,r,t){"use strict";function n(){return new Set(["name","message","stack","statusCode","shouldRedirect","framesToPop","details","SEC","_temp"])}Object.defineProperty(r,"__esModule",{value:!0}),r.create=n;const o=n();r.COMMON_ERROR_FIELDS=o},function(e,r,t){"use strict";Object.defineProperty(r,"__esModule",{value:!0});const n=t(0).Enum("echo","play","sync");r.Method=n}]));