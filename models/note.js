/*
 * Note Mongoose schema module.
 * @module Note
 */

var mongoose = require('mongoose');

var NoteSchema = mongoose.Schema({
	content: String
});

module.exports = mongoose.model("Note", NoteSchema);