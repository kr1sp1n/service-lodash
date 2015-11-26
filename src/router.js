var debug = require('debug')('lodash:router')
var express = require('express')
var bodyParser = require('body-parser')
var _ = require('lodash')

module.exports = function (opts) {
  var router = express.Router()
  router.use(bodyParser.json())

  // POST new lodash function execution
  router.post('/:fn_name', function (req, res) {
    var fn_name = req.params.fn_name
    var args = req.body
    // check if function was passed as string
    for (var i = 0; i < args.length; i++) {
      if (_.isString(args[i])) {
        if (_.startsWith(args[i], 'function')) {
          try {
            eval('var x = ' + args[i])
            args[i] = x
          } catch (e) {
            debug(e)
            return res.send({ error: { message: e.message }})
          }
        }
      }
    }
    debug('POST %s', fn_name)
    debug(args)
    if (_[fn_name]) {
      var fn = _[fn_name]
      var result = fn.apply(null, args)
    }
    res.send({ result: result })
  })

  return router
}
