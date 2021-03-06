## @offirmo-private/view-css

A micro CSS framework (like Bootstrap but with minimal features), mostly for my personal use.
**[live demo on CodePen](https://codepen.io/Offirmo/pen/qYYWVy)**

Can also be used as a base for more advanced CSS frameworks like @oh-my-rpg/view-browser


Features:
- by default, the minimal styles to make a page looks good (cf. "motherfucking website")
- by default, activates clever settings gleaned across blog posts (see list at bottom)
- several "atomic" classes (see [tachyons](https://tachyons.io/) / [atomic CSS](https://acss.io/))

Inspiration:
* inspired by [tachyons](https://tachyons.io/)
* inspired by [motherfuckingwebsite](http://motherfuckingwebsite.com/) / [better](http://bettermotherfuckingwebsite.com/) / [perfect](http://perfectmotherfuckingwebsite.com/)
* inspired by techniques borrowed in articles around the net (see refs. in the code and "credits" below)


## Usage

### automatic (reset)
By default, this stylesheet will activate a page like "mother fucking website".
```html

	<link rel="stylesheet" type="text/css"
			href="https://cdn.jsdelivr.net/gh/Offirmo/offirmo-monorepo@master/3-advanced--browser/view-css/dist/offirmo-reset%2Butils.css"/>
	<link rel="stylesheet" type="text/css"
			href="https://cdn.jsdelivr.net/gh/Offirmo/offirmo-monorepo@master/3-advanced--browser/view-css/src/style--theme--lod-colorhunt212.css"/>
```
alternatively:
```css
@import 'https://cdn.jsdelivr.net/gh/Offirmo/offirmo-monorepo@master/3-advanced--browser/view-css/dist/offirmo-reset%2Butils.css';
@import 'https://cdn.jsdelivr.net/gh/Offirmo/offirmo-monorepo@master/3-advanced--browser/view-css/src/style--theme--lod-colorhunt212.css';

@import '../../../3-advanced--browser/view-css/src/style.css';
@import '../../../3-advanced--browser/view-css/src/style--theme--lod-colorhunt212.css';

```

### Full-page app
There is a special class to unset the defaults:
```html
<html class="o⋄top-container">
	<body class="o⋄top-container o⋄body⁚full-page">
		…
```

### Manual
Activated through classes:

* Semantic classes (like`o⋄something`):
  * `o⋄top-container`
  * `o⋄centered-article`
  * `o⋄error-report`
  * `o⋄box`
  * `o⋄text-noselect`
  * `o⋄nav-list`
  * `o⋄flow`
  * `o⋄button--inline`
  * `o⋄plain-list`

* Technical classes (like`o⋄key⁚value`):
  * `o⋄font⁚fast-and-good-enough`
  * `o⋄font⁚system`
  * `o⋄font⁚roboto`
  * `o⋄font⁚roboto-condensed`
  * `o⋄font⁚roboto-mono`

  * `o⋄color⁚main`
  * `o⋄color⁚secondary`
  * `o⋄color⁚ancillary`

  * `o⋄pad⁚0`
  * `o⋄pad⁚5`
  * `o⋄pad⁚7`
  * `o⋄margin⁚0`

  * `o⋄flex--row`
  * `o⋄flex--column`
  * `o⋄flex--centered-content`
  * `o⋄flex-element--nogrow`
  * `o⋄flex-element--grow`

  * `o⋄text-align⁚center`
  * `o⋄overflow-y⁚auto`
  * `o⋄height⁚100pc`

  * `.o⋄border⁚default`

  * `o⋄character-as-icon`
  * `o⋄rotated⁚45deg`
  * `o⋄rotated⁚90deg`
  * `o⋄rotated⁚180deg`
  * `o⋄rotated⁚270deg`
  * `o⋄invert-to-dark-mode`

* data selectors
  * `data-o-theme="light-on-dark"` (dark-on-light being the default)
  * `data-o-theme="lod--colorhunt212"`

There are also variables:
* theme colors
  * `--o⋄color--bg⁚main`
  * `--o⋄color--bg⁚main--backdrop`
  * `--o⋄color--bg⁚highlight--1`
  * `--o⋄color--bg⁚highlight--2`
  * `--o⋄color--fg⁚main`
  * `--o⋄color--fg⁚secondary`
  * `--o⋄color--fg⁚ancillary`
  * `--o⋄color--fg⁚accent`
* modifier colors (but better use the theme colors!)
  * `--o⋄color--transparent`
  * `--o⋄color__darker--10`
  * `--o⋄color__darker--20`
  * `--o⋄color__darker--90`
  * `--o⋄color__lighter--10`
  * `--o⋄color__lighter--20`
  * `--o⋄color__lighter--90`



### Special techniques

**[More advanced demo](https://codepen.io/Offirmo/pen/zjavzJ)**

#### full height page working on mobile browser
You can't use height: 100vh on Chrome mobile or the url bar will get in the way.
Solution: use a cascade of `class="o⋄top-container"` (optionally starting at `html` and `body`)

#### containers debug
```html
<style type="text/css">
	.o⋄top-container { border-width: 1px; }
</style>

<html class="o⋄top-container">
	<body class="o⋄top-container">
		<div class="o⋄top-container o⋄centered-article">
			<p>Hello world</p>
```


## TODO
* themes https://themer.dev/


## Credits
* http://motherfuckingwebsite.com/
* http://bettermotherfuckingwebsite.com/
* http://perfectmotherfuckingwebsite.com/
* using data="xyz" http://simurai.com/blog/2018/04/01/contextual-styling
  * (more about data) https://www.sitepoint.com/use-html5-data-attributes/
* https://www.leejamesrobinson.com/blog/how-stripe-designs-beautiful-websites/
* https://ianstormtaylor.com/design-tip-never-use-black/
* https://medium.com/refactoring-ui/7-practical-tips-for-cheating-at-design-40c736799886
* https://medium.com/@erikdkennedy/7-rules-for-creating-gorgeous-ui-part-2-430de537ba96
* emoji icons https://preethisam.com/2018/06/25/how-to-use-emojis-as-icons/
* https://medium.com/@mwichary/dark-theme-in-a-day-3518dde2955a
* nice hrs https://css-tricks.com/examples/hrs/
* https://hackernoon.com/removing-that-ugly-focus-ring-and-keeping-it-too-6c8727fefcd2
* nice buttons https://fdossena.com/?p=html5cool/buttons/i.frag
* https://github.com/mike-engel/a11y-css-reset
* https://hankchizljaw.com/wrote/a-modern-css-reset/


using the fancy
U+205A TWO DOT PUNCTUATION '⁚'
U+22C4 DIAMOND OPERATOR '⋄'
