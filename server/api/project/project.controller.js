'use strict';

var _ = require('lodash');
var Project = require('./project.model');
var Event = require('../event/event.model');

// Get list of projects
exports.index = function(req, res) {
  Project.find(function (err, projects) {
    if(err) { return handleError(res, err); }
    return res.json(200, projects);
  });
};

// Get a single project
exports.show = function(req, res) {
  Project.findById(req.params.id).
    populate('comments').
    exec(function (err, project) {
    console.log(project);
    if(err) { return handleError(res, err); }
    if(!project) { return res.send(404); }
    return res.json(project);
  });
};

exports.findByUrl = function(req, res) {
  Project.findOne({'url':req.params.url}).
    populate('comments').exec(function(err,project){
    if(err) { return handleError(res, err); }
    if(!project) { return res.send(404); }
    return res.json(project);
  });
};
// Creates a new project in the DB.
exports.create = function(req, res) {
  console.log(req.body);
  //create a proper url
  var title = req.body.project_name;
  var clean_url = title.replace(/(^\-+|[^a-zA-Z0-9\/_| -]+|\-+$)/g, '')
              .toLowerCase()
              .replace(/[\/_| -]+/g, '-');
  var newProject = req.body;
  newProject.url = clean_url;

  Project.create(newProject, function(err, project) {
    if(err) { return handleError(res, err); }
    return res.json(201, project);
  });
};

// add
// Updates an existing project in the DB.
exports.update = function(req, res) {
  if(req.body._id) { delete req.body._id; }
  Project.findById(req.params.id, function (err, project) {
    if (err) { return handleError(res, err); }
    if(!project) { return res.send(404); }
    project.upvotes++;
    //var updated = _.merge(project, req.body);
    project.save(function (err) {
      if (err) { return handleError(res, err); }
      return res.json(200, project);
    });
  });
};

//@nadbm Upvote method
exports.upvote = function(req, res) {
  if(req.body._id) { delete req.body._id; }
  Project.findById(req.params.id, function (err, project) {
    if (err) { return handleError(res, err); }
    if(!project) { return res.send(404); }
    var updated = _.merge(project, req.body);
    updated.save(function (err) {
      if (err) { return handleError(res, err); }
      return res.json(200, project);
    });
  });
};
//@nadbm 
exports.addComment = function(req,res) {
   if(req.body._id) { delete req.body._id; }
  Project.findById(req.params.id, function (err, project) {
    if (err) { return handleError(res, err); }
    if(!project) { return res.send(404); }
    var newComment = req.body;
    

    project.comments.push(newComment);
    project.save(function (err) {
      if (err) { return handleError(res, err); }
      return res.json(200, project);
    });
  });
};

// Deletes a project from the DB.
exports.destroy = function(req, res) {
  Project.findById(req.params.id, function (err, project) {
    if(err) { return handleError(res, err); }
    if(!project) { return res.send(404); }
    project.remove(function(err) {
      if(err) { return handleError(res, err); }
      return res.send(204);
    });
  });
};

function handleError(res, err) {
  return res.send(500, err);
}