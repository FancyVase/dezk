/*
 * Dezk
 * YHack 2016
 * Jierui Fang, Shannon Peng, Hiram Moncivais
 * @module main
 */

var express = require('express');

var bodyParser = require('body-parser');

var app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// production error handler
// no stacktraces leaked to user
app.use(function(err, req, res, next) {
  res.status(err.status || 500);
  res.json({
    'error': err.message
  });
});

module.exports = app;