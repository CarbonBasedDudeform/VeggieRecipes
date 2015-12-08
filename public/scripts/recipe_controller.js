var templateIngrediantName = "Ingrediant Name: <input name='ingrediantName' type='text' />"
var templateIngrediantQuantiy = "Quantity: <input name='ingrediantQuantity' type='text' />"
var templateNewline = "</br>"
var templateHtml = templateIngrediantName + templateIngrediantQuantiy + templateNewline;
function OnAddIngrediantClick() {
    $("#ingrediantList").append(templateHtml);
}
