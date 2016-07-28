'use strict'

var hasSymbol = (typeof Symbol === 'function') && (typeof Symbol() === 'symbol')

if (hasSymbol) {
  module.exports = function makeSymbol (name) { return Symbol(name) }
} else {
  module.exports = function makeSymbol (name) { return ('_' + name) }
}
