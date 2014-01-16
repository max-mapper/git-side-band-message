var test = require('tape')
var encode = require(__dirname)

test('simple message gets encoded', function(t) {
  var expected = '0011\u0002Hello world\n'
  t.equal(expected, encode('Hello world').toString())
  t.end()
})

test('unicode message gets encoded', function(t) {
  var expected = '0019\u0002☃woooo☃☃woooo\n'
  t.equal(expected, encode('☃woooo☃☃woooo').toString())
  t.end()
})
