/*
 * Dezk
 * YHack 2016
 * Jierui Fang, Shannon Peng, Hiram Moncivais
 * @module main
 */

var express = require('express');
var bodyParser = require('body-parser');
var path = require('path');

var routes = require('./routes/index')

var app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use(express.static(path.join(__dirname, 'public')));

app.use('/', routes);

// database setup
var mongoose = require('mongoose')
mongoose.Promise = global.Promise;

// connect to the local database
mongoose.connect('mongodb://localhost/dezkdb')

var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function (callback) {
	console.log('database connected')
});

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



