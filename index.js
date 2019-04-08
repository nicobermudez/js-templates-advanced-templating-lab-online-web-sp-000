function init() {
  var formTemplate = document.getElementById("recipe-form-template").innerHTML;
  var formTemplateFn = Handlebars.compile(formTemplate);
  document.getElementById('main').innerHTML = formTemplateFn({ingredients: ['','','','','']});

  Handlebars.registerPartial('recipeDetailsPartial', document.getElementById("recipe-details-partial").innerHTML);
  Handlebars.registerHelper('displayIngredient', function(ingredient){
    return new Handlebars.SafeString('<li name="ingredients">'+ ingredient + '</li>');
  })
}
document.addEventListener("DOMContentLoaded", function(event) {
  init()
})
