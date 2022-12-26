let recipeName = prompt("Whats the name of the recipe ");
document.querySelector("#recipeName").innerHTML = recipeName;
const ingredientList = document.querySelector("#ingredientList");
let ingredientNumber = prompt(" Whats the number of ingredients ");

function printRecipe() {
  for (let i = 0; i < ingredientNumber; i++) {
    let ingredient = prompt("Whats the ingredient name");
    ingredientList.innerHTML += `<li>${ingredient}</li>`;
  }
  return ingredient;
}

printRecipe();
