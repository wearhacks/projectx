'use strict';

var express = require('express');
var controller = require('./project.controller');

var router = express.Router();

router.get('/', controller.index);
router.get('/:id', controller.show);
router.post('/', controller.create);
router.put('/:id', controller.update);
router.patch('/:id', controller.update);
router.delete('/:id', controller.destroy);


//Find specific project by url
router.get('/url/:url',controller.findByUrl)
//Upvote method
router.post('/:id/upvote',controller.upvote);

module.exports = router;