var index = 0;
var templateIngrediantName = "Ingrediant Name: <input name='ingrediantName"+index+"' type='text' />"
var templateIngrediantQuantiy = "Quantity: <input name='ingrediantQuantity"+index+"' type='text' />"
var templateNewline = "</br>"
var templateHtml = templateIngrediantName + templateIngrediantQuantiy + templateNewline;
function OnAddIngrediantClick() {
    $("#ingrediantList").append(templateHtml);
    ++index;
}

function OnSubmitClick() {
  var ingrediants = [];
  for(var i = 0; i < index; ++i) {
    var name = $('input[name=ingrediantName'+i+']').val();
    var quantity = $('input[name=ingrediantQuantity'+i+']').val();

    ingrediants.push({'name': name, 'quantity': quantity});
  }

  //send to a server probably...or something.
  console.log(ingrediants);
}
