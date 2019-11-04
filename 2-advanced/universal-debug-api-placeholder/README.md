
<h1 align="center">
	Offirmo’s Universal Debug API - no op placeholder<br>
	<a href="https://www.offirmo.net/offirmo-monorepo/doc/modules-directory/index.html">
		<img src="https://www.offirmo.net/offirmo-monorepo/doc/quality-seal/offirmos_quality_seal.svg" alt="Offirmo’s quality seal">
	</a>
</h1>

<p align="center">
	<a alt="npm package page"
	  href="https://www.npmjs.com/package/@offirmo/universal-debug-api-placeholder">
		<img alt="npm badge"
		  src="https://img.shields.io/npm/v/@offirmo/universal-debug-api-placeholder.svg">
	</a>
	<a alt="dependencies analysis"
	  href="https://david-dm.org/offirmo/offirmo-monorepo?path=2-advanced%2Funiversal-debug-api-minimal-noop">
		<img alt="dependencies badge"
		  src="https://img.shields.io/david/offirmo/offirmo-monorepo.svg?path=2-advanced%2Funiversal-debug-api-minimal-noop">
	</a>
	<a alt="bundle size evaluation"
	  href="https://bundlephobia.com/result?p=@offirmo/universal-debug-api-placeholder">
		<img alt="bundle size badge"
		  src="https://img.shields.io/bundlephobia/minzip/@offirmo/universal-debug-api-placeholder.svg">
	</a>
	<a alt="license"
	  href="https://unlicense.org/">
		<img alt="license badge"
		  src="https://img.shields.io/badge/license-public_domain-brightgreen.svg">
	</a>
	<img alt="maintenance status badge"
	  src="https://img.shields.io/maintenance/yes/2019.svg">
</p>

**This is a minimal, no-operation implementation of [Offirmo’s Universal Debug API](https://universal-debug-api-js.netlify.com/).**

Isomorphic, for node and browser.

Does nothing, minimal code footprint.

Will transparently yield to any other previously required/imported effective version such as [node](../universal-debug-api-node/README.md) or [browser](../universal-debug-api-browser/README.md).
**Pro tip: for browser, hot-swap this placeholder with the [companion webextension](../../3-tools/universal-debug-api-companion-webextension/README.md)!**

See overall explanation: [Offirmo’s Universal Debug API](https://universal-debug-api-js.netlify.com/).


## Usage

Use this lib **to not bloat your module or webapp/lambda/npx bundle**.
This no-op implementation will do nothing = display nothing = compute nothing.

However, when an effective implementation is used (see above),
this module will silently and automatically forward the effective implementation
instead of its own no-op mock.

```javascript
import {
	getLogger,
	exposeInternal,
	overrideHook,
	addDebugCommand,
	globalThis, // exposed from sub-dependency for convenience
} from '@offirmo/universal-debug-api-placeholder'
```

Note: no bundled version provided, since this lib is targeted at lib authors, not end users.