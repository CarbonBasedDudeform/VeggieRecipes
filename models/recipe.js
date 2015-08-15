var Recipe = function(title)
{
  this.title = title;
  this.ingrediants = {};
}

Recipe.prototype.title = "Recipe";

Recipe.prototype.addIngrediant = function(called, amount) {
  this.ingrediants[called] = {name: called, quantity: amount};
};

Recipe.prototype.getIngrediants = function() { return this.ingrediants; };
Recipe.prototype.getTitle = function() { return this.title; };

Recipe.prototype.setTitle = function(newTitle) { this.title = newTitle; };

module.exports = Recipe;
