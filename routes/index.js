/*
 * Router module.
 * @module router
 */

var express = require('express')
var mongoose = require('mongoose')
var router = express.Router();
var User = require('../models/user.js');

router.get('/', function(req, res) {
	res.sendFile('../public/index.html');;
})

module.exports = router;