var express = require('express');
var api = express();
var DEFAULT_PORT = 3000;

api.use(express.static('public'));

require('./models')(api);
require('./methods')(api);

var port = process.env.PORT || DEFAULT_PORT;
console.log ('server started on port ' + port);
api.listen(port);

module.exports = api;