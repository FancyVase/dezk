/*
 * User Mongoose schema module.
 * @module User
 */

var mongoose = require('mongoose');

var UserSchema = mongoose.Schema({
	username: {
		type: String,
		required: true
	},
	password: {
		type: String,
		required: true
	},
	notes: [{ title: String, content: String }]
});

module.exports = mongoose.model('User', UserSchema);