'use strict';

var mongoose = require('mongoose'),
    Schema = mongoose.Schema;
var Project = new Schema({
	name: String,
	comments: Number,
	upvotes: Number,
	date : Date,
	shortDesc: String
});
var EventSchema = new Schema({
  name: String, //Store name of event
  info: String, //Store info of event
  creator: { type: String, ref: 'User'}, //Store user ID of creator
  projects:[Project]
});

module.exports = mongoose.model('Event', EventSchema);