var title = "Recipe";
var ingrediants = {};
exports.addIngrediant = function(name, amount) {
  // ingrediants.push({name, amount});
  ingrediants[name] = amount;
};

exports.getIngrediants = function() { return ingrediants; };
exports.getTitle = function() { return title; };

exports.setTitle = function(newTitle) { title = newTitle; };
