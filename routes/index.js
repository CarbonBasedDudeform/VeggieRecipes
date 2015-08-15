var express = require('express');
var router = express.Router();

var mongodb = require('mongodb');
var recipeModel = require('../models/recipe');

var defaultContent = function() {
  var rec = new recipeModel('almondia');
  rec.addIngrediant("almonds", 10.0);

  var recipesArray = [];
  recipesArray.push(rec);

  return {title: "Your Recipes", recipes: recipesArray};
};

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', defaultContent());
});

module.exports = router;
