var express = require('express');
var router = express.Router();

var mongodb = require('mongodb');

//custom models
var recipeModel = require('../models/recipe');

var defaultContent = function() {
  var rec = new recipeModel('Create Your Own Recipes And See Them Here');
  rec.addIngrediant("Creativity", 1.0);
  rec.addIngrediant("Taste", 2.0);
  rec.addIngrediant("Skill", 1.0);
  rec.addIngrediant("Desire for delicious food", 10.0);

  var recipesArray = [];
  recipesArray.push(rec);

  return {title: "Your Recipes", recipes: recipesArray};
};

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', defaultContent());
});

module.exports = router;
