var express = require('express')
var http = require('http')

var config = require(__dirname + '/../config.js')
var router = require(__dirname + '/router.js')(config)
var app = express()

app.set('port', config.port)
// mount router
app.use('/', router)

var server = http.createServer(app)
server.app = app

module.exports = server
