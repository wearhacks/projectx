'use strict';

var mongoose = require('mongoose'),
    Schema = mongoose.Schema;


var ProjectSchema = new Schema({
  project_name: String,
  description: String,
  url: String,
  author: {username: String},
  upvotes:  { type: Number, default: 0 },
  created:  { type: Date, default: Date.now },
  comments: [{ type: Schema.Types.ObjectId, ref: 'Comment'}]
});

module.exports = mongoose.model('Project', ProjectSchema);