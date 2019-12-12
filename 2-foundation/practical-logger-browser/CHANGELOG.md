# CHANGELOG
**This package follows [semver](https://semver.org/).**

## PENDING
* TODO lower size by removing duplication + useless sink
* TODO test EDGE, IE
* TODO local pictures
* NOTE bigger size but not a problem since you're not supposed to bundle this lib
* [doc] README++
* [chore] linted automatically (no logic change)
* ...

## v2.1.0
2019/11/08
* [feat] re-export defaults from core, to save consumers from having to import core

## v2.0.0
2019/11/05
* [feat] [breaking] (opt out) warnings and errors now break out from groups, to prevent them from being hidden in groupCollapsed()
* [feat] [breaking] (opt out) groups are now lazily created, only if they have some content
* [chore] [breaking] no longer exporting ES5, reverted to [this more rationale export setup](../../CONTRIBUTING/module-exports.md)
* [feat] now re-export the entire practical-logger-interface
* [feat] better browser detection + now supports non firefox/chromium/safari browsers (ex. msie)
* [feat] ability to opt-out from fancy sinks
* [fix] correctly allows passing no args to createLogger() (this was intended)
* [test] more unit tests
* [refactor] internal package @offirmo/practical-logger-interfaces renamed to @offirmo/practical-logger-types
* [chore] bumped dependencies

## v1.1.1
2019/07/07
* [fix] now properly display the error if present
* [chore] fixed dist folder name to match the target (ES2019)
* [feat] also provide an ES5 pre-built version
* [test] a few unit tests instead of runtime checks
* [chore] removed a dependency

## v1.1.0
2019/06/30
* [feat] new 1.1 API: group() groupCollapsed() groupEnd()
* [doc] README++
* [chore] bumped deps
* [chore] removed tslib dependency
* [chore] removed non-public feature: level override through LS; moved to UWDT instead
* [chore] upgraded pre-built code target to latest stable JS (ES2019)

## v1.0.0
2019/04/04
* no breaking change, just stable enough for 1.0
* [doc] README++
* [chore] tweaked tsconfig
* [chore] bumped deps
* [test] enabled more eslint rules

## v0.0.2
2019/04/04
* [doc] README++
* [chore] tweaked tsconfig
* [chore] bumped deps
* [test] enabled eslint
* [chore] tslib no longer a peerDependency

## v0.0.1
2019/04/02
* initial release to npm

## template
* [doc] README++
* [chore] bumped deps
* [chore] upgraded pre-built code target to latest stable JS (ES2019)