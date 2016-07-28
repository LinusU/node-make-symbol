# Make Symbol

A thin wrapper over `Symbol()` with a very naive fallback. Perfect for
"semi-private" properties on classes.

## Installation

```sh
npm install --save make-symbol
```

## Usage

```js
var makeSymbol = require('make-symbol')
var Name = makeSymbol('name')

function Person (name) {
  this[Name] = name
}

Object.defineProperty(Person.prototype, 'name', {
  get: function () { return this[Name] },
  enumerable: true
})
```

```js
var linus = new Person('linus')

linus.name // 'linus'

linus.name = 'test'

linus.name // 'linus'
```

## API

### `makeSymbol(name: string)`

Returns a new `Symbol` with the provided name.

If `Symbol` is not available in the current runtime, the `name` prefixed with
`'_'` will be returned (e.g `makeSymbol('linus')` will return `'_linus'`).
