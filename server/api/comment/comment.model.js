'use strict';

var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var CommentSchema = new Schema({
	project_id:{ type: Schema.Types.ObjectId, ref: 'Project'},
	author: String,
	content: String,
	date: { type: Date, default: Date.now },
	replies: [{author:String,content:String, date: { type: Date, default: Date.now }}]
});

module.exports = mongoose.model('Comment', CommentSchema);

