/*
 * User Mongoose schema module.
 * @module User
 */

var mongoose = require('mongoose');
var ObjectId = mongoose.Types.ObjectId;
var Note = require('./note.js');

var UserSchema = mongoose.Schema({
	username: {
		type: String,
		required: true
	},
	password: {
		type: String,
		required: true
	},
	notes: [{
        type: ObjectId,
        ref: Note
    }]
});

module.exports = mongoose.model('User', UserSchema);