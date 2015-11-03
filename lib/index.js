
var express = require('express');
var app = module.exports = express();

app.get('/users/me', function (req, res) {
  res.json({'foo': 'bar'});
});
