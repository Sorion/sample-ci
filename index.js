var express = require('express');
var api = express();
var DEFAULT_PORT = 3000;

api.get('/', function(req, res, next){
	res.send('Hello World');
});

var port = process.env.PORT ||DEFAULT_PORT;
console.log ('server started on port 3000');
api.listen(port);

module.exports = api;