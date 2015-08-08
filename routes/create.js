var express = require('express');
var router = express.Router();

var mongodb = require('mongodb');
var recipeModel = require('../models/recipe');

var defaultContent = function() {
  recipeModel.addIngrediant("Empty", 10.0);
  console.log(recipeModel.getIngrediants());
  recipeModel.setTitle("Empty");

  return {
    title: "Recipes",
    recipes: JSON.stringify(recipeModel.getIngrediants())
  };
};

/* GET home page. */
router.get('/recipe', function(req, res, next) {
  res.render('create/recipe', defaultContent());
});

module.exports = router;
