# JavaScript Happiness Style
[![travis][travis-image]][travis-url]
[![npm][npm-image]][npm-url]
[![downloads][downloads-image]][downloads-url]

[Standard](https://github.com/feross/standard) customised to make [me](http://github.com/JedWatson/) happy.

## Install

```bash
npm install happiness
```

## Rules

Importantly:

- **semicolons**
- **tabs**
- Check [feross/standard] for the rest of the rules.

## Badge

Use this in one of your projects? Include one of these badges in your readme to
let people know that your code is using the standard style.

[![js-happiness-style](https://cdn.rawgit.com/JedWatson/happiness/master/badge.svg)](https://github.com/JedWatson/happiness)

```markdown
[![js-happiness-style](https://cdn.rawgit.com/JedWatson/happiness/master/badge.svg)](https://github.com/JedWatson/happiness)
```

[![js-happiness-style](https://img.shields.io/badge/code%20style-happiness-brightgreen.svg?style=flat-square)](https://github.com/feross/standard)

```markdown
[![js-happiness-style](https://img.shields.io/badge/code%20style-happiness-brightgreen.svg?style=flat-square)](https://github.com/feross/standard)
```

## Usage

The easiest way to use JavaScript happiness Style to check your code is to install it
globally as a Node command line program. To do so, simply run the following command in
your terminal (flag `-g` installs `happiness` globally on your system, omit it if you want
to install in the current working directory):

```bash
npm install happiness -g
```

After you've done that you should be able to use the `happiness` program. The simplest use
case would be checking the style of all JavaScript files in the current working directory:

```
$ happiness
Error: Use JavaScript happiness Style
  lib/torrent.js:950:11: Expected '===' and instead saw '=='.
```

### Editor plugins

- **Sublime users**: Try [SublimeLinter-contrib-happiness](https://github.com/JedWatson/SublimeLinter-contrib-happiness) for linting in your editor!
- **Atom users** - Install [Linter](https://atom.io/packages/linter) and [linter-js-standard](https://atom.io/packages/linter-js-standard) (don't you mind with the misleading name it supports both styles).


### What you might do if you're clever

1. Add it to `package.json`

  ```json
  {
    "name": "my-cool-package",
    "devDependencies": {
      "happiness": "*"
    },
    "scripts": {
      "test": "happiness && node my-normal-tests-littered-with-semicolons.js"
    }
  }
  ```

2. Check style automatically when you run `npm test`

  ```
  $ npm test
  Error: Code style check failed:
    lib/torrent.js:950:11: Expected '===' and instead saw '=='.
  ```

3. Never give style feedback on a pull request again! (unless it's about semicolons)


See [feross/standard] for more information.

[travis-image]: https://img.shields.io/travis/JedWatson/happiness.svg?style=flat-square
[travis-url]: https://travis-ci.org/JedWatson/happiness
[npm-image]: https://img.shields.io/npm/v/happiness.svg?style=flat-square
[npm-url]: https://npmjs.org/package/happiness
[downloads-image]: https://img.shields.io/npm/dm/happiness.svg?style=flat-square
[downloads-url]: https://npmjs.org/package/happiness
[feross/standard]: https://github.com/feross/standard


### Credits

Thanks to [Flet](https://github.com/Flet/) and his work on [semistandard](https://github.com/Flet/semistandard) for making this super easy to build on [standard](https://github.com/feross/standard).
