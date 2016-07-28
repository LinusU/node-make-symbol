'use strict'

var assert = require('assert')
var makeSymbol = require('./')

var TestA = makeSymbol('testA')
var TestB = makeSymbol('testB')
var TestC = makeSymbol('testC')

var obj = {}

obj[TestA] = 1337
obj[TestB] = 'linus'
obj[TestC] = 3.14

assert.equal(obj[TestA], 1337)
assert.equal(obj[TestB], 'linus')
assert.equal(obj[TestC], 3.14)

delete obj[TestA]
delete obj[TestB]
delete obj[TestC]

assert.equal(obj[TestA], undefined)
assert.equal(obj[TestB], undefined)
assert.equal(obj[TestC], undefined)
