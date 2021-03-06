# CHANGELOG
**This package follows [semver](https://semver.org/).**

## PENDING
* TODO remove lodash as a dependency
* [chore] re-organized the source (monorepo) and tweaked the build script. No logic change.
* [chore] bumped dependencies (minor)
* ...

## v2.1.2
* [chore] mark as supported

## v2.1.1
2019/12/16
* [doc] README++ minor fix in badges

## v2.1.0
2019/12/16
* [feat] suppressed typescript as a peerDep to truly allow any version
* [feat] improved error messages, clearer, now extracting from output if possible
* [doc] README++ greatly improved, verbose option documented
* [chore] bumped dependencies

## v2.0.1
2019/12/12
* [chore] reorganized source paths = links update in the doc
* [doc] README++
* [chore] bumped deps

## 2.0.0
2019/04/04
* **breaking** [chore] typescript is now a `peerDependency`, thus requiring npm 3+
* [doc] README++
* [chore] bumped deps

## 1.2.0
2018/01/08
- verbose option
- spawn + params now only displayed if verbose = true
- errors are no longer displayed, unless verbose = true.
  They were unreadable and displaying stderr is sufficient
- optionally display a custom msg before starting stderr,
  useful in case of concurrent builds in the same terminal

## 1.1.1
2016/08/15
- handle new tsc 2.0 array params
- filter empty stdout lines for a more compact output
- print a *** line between watch refresh stdout for finding errors more easily

## 1.1.0
2016/08/09
- fixed node 4 compatibility
- added this changelog

## 1.0.1
- works fine ;)

## TEMPLATE
* [doc] README++
* [chore] bumped dependencies
* ...
