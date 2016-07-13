<h4 align="center">One Style You Might Like</h4>

[![travis][travis-image]][travis-url]
[![npm][npm-image]][npm-url]
[![downloads][downloads-image]][downloads-url]

[travis-image]: https://travis-ci.org/JedWatson/happiness.svg?branch=master
[travis-url]: https://travis-ci.org/JedWatson/happiness
[npm-image]: https://img.shields.io/npm/v/happiness.svg?style=flat
[npm-url]: https://npmjs.org/package/happiness
[downloads-image]: https://img.shields.io/npm/dm/happiness.svg?style=flat
[downloads-url]: https://npmjs.org/package/happiness

[Standard](https://github.com/feross/standard) customised to make [us](#maintainers) happy.

This is a fork of Standard with two changes:

- **Tabs** for indentions
- **Semicolons** always

It is called happiness, because we hope that it brings you joy, love and ends strife among your fellow developers.

**Reminder**: Happiness is not for everyone.  Some people will choose to be sad, normal and some might even say "standard".
That is alright.  A happy person is comfortable with being them and fine to let others be who they want to be.  *"You do you"*

If the information you are looking for is not in this readme, you should take a look at the [Standard readme](https://github.com/feross/standard), it might have what you are looking for.

## Install

```bash
$ npm install happiness
```

## Usage

The easiest way to use JavaScript Happiness Style to check your code is to install it
globally as a Node command line program. To do so, simply run the following command in
your terminal (flag `-g` installs `happiness` globally on your system, omit it if you want
to install in the current working directory):

```bash
$ npm install happiness -g
```

After you've done that you should be able to use the `happiness` program. The simplest use
case would be checking the style of all JavaScript files in the current working directory:

```bash
$ happiness
Error: Use JavaScript happiness Style
  lib/torrent.js:950:11: Expected '===' and instead saw '=='.
```

You can optionally pass in a directory (or directories) using the glob pattern. Be sure to quote paths containing glob patterns so that they are expanded by standard instead of your shell:

```bash
$ happiness "src/util/**/*.js" "test/**/*.js"
```

Many people like to add happiness to their testing setup. To do this, save the packge as a dev dependency and add happiness to your package.json's test script:

```bash
$ npm install --save-dev happiness
```

```json
{
  "scripts": {
    "test": "happiness && mocha # <- or whatever test runner you use"
  }
}
```

**Note:** by default `happiness` will look for all files matching the patterns: `**/*.js`, `**/*.jsx`.

## Badge

Use this in one of your projects? Include one of these badges in your readme to
let people know that your code is using the standard style.

[![js-happiness-style](https://cdn.rawgit.com/JedWatson/happiness/master/badge.svg)](https://github.com/JedWatson/happiness)

```markdown
[![js-happiness-style](https://cdn.rawgit.com/JedWatson/happiness/master/badge.svg)](https://github.com/JedWatson/happiness)
```

[![js-happiness-style](https://img.shields.io/badge/code%20style-happiness-brightgreen.svg)](https://github.com/JedWatson/happiness)

```markdown
[![js-happiness-style](https://img.shields.io/badge/code%20style-happiness-brightgreen.svg)](https://github.com/JedWatson/happiness)
```

### Text editor plugins

**Coming Soon**

## Maintainers

- [Jed Watson](https://www.github.com/JedWatson)
- [Daniel Cousens](https://www.github.com/dcousens)
- [Wes Todd](https://www.github.com/wesleytodd)

### I want to contribute to `happiness`. What packages should I know about?

- **[happiness](https://github.com/JedWatson/happiness)** - this repo
  - **[standard-engine](https://github.com/flet/standard-engine)** - cli engine for arbitrary eslint rules
  - **[eslint-config-happiness](https://github.com/wesleytodd/eslint-config-happiness)** - eslint rules for happiness
  - **[eslint-plugin-standard](https://github.com/xjamundx/eslint-plugin-standard)** - custom eslint rules for standard (not part of eslint core)
  - **[eslint](https://github.com/eslint/eslint)** - the linter that powers happiness
- **[happiness-format]()** - **Coming Soon** automatic code formatter
- **[snazzy](https://github.com/feross/snazzy)** - pretty terminal output for happiness

## License

MIT. Copyright (c) [Feross Aboukhadijeh](http://feross.org).
