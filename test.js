var test = require('tape')
var rimraf = require('rimraf')
var fs = require('fs')
var path = require('path')
var child = require('child_process')
var testServer = require(path.join(__dirname, 'test-server.js'))
var repoDir = path.join(__dirname, 'repos')

test('cleanup', cleanup)

test('setup', function(t) {
  fs.mkdirSync(repoDir)
  child.exec('git init repos/test.git --bare -q', function(e, stdout, stderr) {
    t.false(e)
    t.end()
  })
})

test('messages get received', function(t) {
  var server = testServer()
  server.listen(5000, function() {
    child.exec('git push http://localhost:5000/test.git master', function(err, stderr, stdout) {
      t.false(err)
      t.true(stdout.indexOf('tacos') > -1, 'received tacos')
      server.close()
      t.end()
    })
  })
})

test('cleanup', cleanup)

function cleanup(t) {
  rimraf(repoDir, function(err) {
    t.false(err)
    t.end()
  })
}