var express = require('express');
var router = express.Router();

var mongodb = require('mongodb');
var recipeModel = require('../models/recipe');

var defaultContent = function() {
  recipeModel.addIngrediant("almonds", 10.0);
  console.log(recipeModel.getIngrediants());
  recipeModel.setTitle("Almonds");

  return {
    title: "Recipes",
    recipes: JSON.stringify(recipeModel.getIngrediants())
  };
};

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', defaultContent());
});

module.exports = router;
