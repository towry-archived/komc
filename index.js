
var express = require('express');
var _ = require('lodash');

var app = express();
var config =require('./lib/config.default');

try {
  var user_config = require('./config');
  config = _.merge(config, user_config);
} catch (err) {
  // empty
}

app.use(express.static(__dirname + config.static));
app.use('/api', require('./lib'));

app.get('*', function (req, res) {
  res.setHeader('Content-type', 'text/plain');
  res.end('komc');
});

app.listen(config.port);
console.log('Magic happens on port ' + config.port);
