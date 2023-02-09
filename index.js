// compile the template

const fetchRecipesDessert = () => {
  fetch("https://backend-recipe-capstone.herokuapp.com/api/v1/recipe/DESSERT")
    .then((response) =>
      response.json().then((data) => {
        // console.log("hi");
        console.log(data);
        let recipeList = { recipes: data };
        var source = document.getElementById("document-template").innerHTML;
        var template = Handlebars.compile(source);
        Handlebars.registerHelper("striped", function (index) {
          return index % 2 === 0 ? "Green" : "Blue";
        });
        var html = template(data);
        document.getElementById("recipeList").innerHTML = html;
        //console.log(data[0].name);
      })
    )
    .catch((err) => console.log(err));
};
document.addEventListener("DOMContentLoaded", fetchRecipesDessert);

// const fetchRecipesStarters = () => {
//   fetch("https://backend-recipe-capstone.herokuapp.com/api/v1/recipe/SNACKS")
//     .then((response) =>
//       response.json().then((data) => {
//         // console.log("hi");
//         console.log(data);
//         let recipeList = { recipes: data };
//         var source = document.getElementById("document-template").innerHTML;
//         var template = Handlebars.compile(source);
//         Handlebars.registerHelper("striped", function (index) {
//           return index % 2 === 0 ? "Green" : "Blue";
//         });
//         var html = template(data);
//         document.getElementById("recipeList").innerHTML = html;
//         //console.log(data[0].name);
//       })
//     )
//     .catch((err) => console.log(err));
// };

// document.addEventListener("DOMContentLoaded", fetchRecipesStarters);

// const fetchRecipesMeal = () => {
//   fetch(
//     "https://backend-recipe-capstone.herokuapp.com/api/v1/recipe/INDIAN_BENGALI"
//   )
//     .then((response) =>
//       response.json().then((data) => {
//         // console.log("hi");
//         console.log(data);
//         let recipeList = { recipes: data };
//         var source = document.getElementById("document-template").innerHTML;
//         var template = Handlebars.compile(source);
//         Handlebars.registerHelper("striped", function (index) {
//           return index % 2 === 0 ? "Green" : "Blue";
//         });
//         var html = template(data);
//         document.getElementById("recipeList").innerHTML = html;
//         //console.log(data[0].name);
//       })
//     )
//     .catch((err) => console.log(err));
// };

// document.addEventListener("DOMContentLoaded", fetchRecipesMeal);

function openTab(tabName) {
  var i, x;
  x = document.getElementsByClassName("containerTab");
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";
  }
  document.getElementById(tabName).style.display = "block";
}
