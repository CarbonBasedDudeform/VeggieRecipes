var express = require('express');
var router = express.Router();

var mongodb = require('mongodb');

//custom models
var recipeModel = require('../models/recipe');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', recipeModel.defaultRecipe());
});

router.get('/error', function(req, res, next) {
  res.render('error', {message: req.msg, error: {status: 'testt', stack:'testest'}});
});

module.exports = router;
