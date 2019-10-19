# z-validate

[![Actions Status](https://github.com/zachlysobey/z-validate/workflows/Node%20CI/badge.svg)](https://github.com/zachlysobey/z-validate/actions)

A simple (TypeScript) library with a set of predicates for simple type validation.
Eventually, this will have higher-order predicates, and composable functions.

## Usage

**NOTE**: This is still under construction, and very experimental. That is, not quite ready for use.

### Install the library

```
npm install z-validate
```

### Import it

```
import * as validators from 'z-validate'
```

### Some examples

```js
string(1) // false

number(1) // true

string('abc') // true

number('abc') // false
```

## Available npm scripts

-   `npm test`: runs the unit tests
-   `npm run test:watch`: runs the unit tests in _watch-mode_
-   `npm start`: _alias for `npm run build`_
-   `npm run build`: builds the library
-   `npm run precommit`: runs the tests, formatter, etc. as the git precommit hook would
-   `npm run prettier`: formats this project's code with 'prettier'

## Contributing

See the [contributing guide][contributing]

[contributing]: ./.github/CONTRIBUTING.md
