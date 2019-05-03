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

var defaultContent = function() {
  var rec = new Recipe('Create Your Own Recipes And See Them Here');
  rec.addIngrediant("Creativity", 1.0);
  rec.addIngrediant("Taste", 2.0);
  rec.addIngrediant("Skill", 1.0);
  rec.addIngrediant("Desire for delicious food", 10.0);

  var recipesArray = [];
  recipesArray.push(rec);

  return {title: "Your Recipes", recipes: recipesArray};
};

module.exports.defaultRecipe = defaultContent;
