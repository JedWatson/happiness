var path = require('path')
var filePath = path.resolve('./bin/cmd.js')
var happiness = require('../')
var test = require('tape')

test('api usage', function (t) {
  t.plan(6)
  happiness.lintFiles([], { cwd: 'bin' }, function (err, result) {
    t.error(err, 'no error while linting')
    t.equal(typeof result, 'object', 'result is an object')
    t.equal(result.errorCount, 61, 'error count 61')

    t.equal(result.results[0].filePath, filePath, 'error filepath correct')

    var errors = result.results[0].messages
    t.equal(errors[0].message, 'Missing semicolon.', 'first mising semicolon message')
    t.equal(errors[1].message, 'Missing semicolon.', 'second mising semicolon message')
  })
})
