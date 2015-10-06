var express = require('express');
var router = express.Router();

var mongodb = require('mongodb');
var recipeModel = require('../models/recipe');

/* GET home page. */
router.get('/recipe', function(req, res, next) {
  res.render('create/recipe', {ingrediants: [true]});
});

module.exports = router;
