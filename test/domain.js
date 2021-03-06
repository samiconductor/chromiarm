const assert = require('assert')
const domain = require('../app/lib/domain')

assert(domain.valid('example.com'))
assert(domain.valid('sub.example.com'))
assert(domain.valid('sub.sub.example.com'))
assert(domain.valid('examp.ly'))
assert(domain.valid('egs.com'), 'three letter domains should be allowed')
assert(domain.valid('example.a'), 'maybe single letter domains in the future?')
assert(domain.valid('123example.com'), 'domains can start with numbers')
assert(domain.valid('abc-example.com'), 'domains can contain hyphens')
assert(!domain.valid('example'), 'domains should have a TLD')
assert(!domain.valid('example.'), 'domains should have a TLD')
assert(!domain.valid('eg.com'), 'domains names should have three or more letters')
assert(!domain.valid('e.com'), 'domains names should have three or more letters')
assert(!domain.valid('.com'), 'domains names should have three or more letters')
assert(!domain.valid('-example.com'), 'domains cannot start with hyphens')
assert(!domain.valid('example.-com'), 'tlds cannot start with hyphens')
assert(!domain.valid('-sub.example.-com'), 'sub domains cannot start with hyphens')
assert(!domain.valid('example.co.uk'), `let's pretend second level tlds don't exist`)
