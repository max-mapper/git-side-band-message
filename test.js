var test = require('tape')
var encode = require(__dirname)

test('simple message gets encoded', function(t) {
  var expected = '0010\u0002Hello world'
  t.equal(expected, encode('Hello world').toString())
  t.end()
})

test('unicode message gets encoded', function(t) {
  var expected = '0018\u0002☃woooo☃☃woooo'
  t.equal(expected, encode('☃woooo☃☃woooo').toString())
  t.end()
})
