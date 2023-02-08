// compile the template

const fetchRecipes = () => {
  fetch("http://localhost:8080/api/v1/recipe/LUNCH")
    .then((response) =>
      response.json().then((data) => {
        console.log("hi");
        console.log(data);
        let recipeList = { recipes: data };
        var source = document.getElementById("document-template").innerHTML;
        var template = Handlebars.compile(source);
        var html = template(data);
        document.getElementById("recipeList").innerHTML = html;
        //console.log(data[0].name);
      })
    )
    .catch((err) => console.log(err));
};

//document.addEventListener("click", fetchRecipes);

document.addEventListener("DOMContentLoaded", fetchRecipes);

// const registerHandlers = (event) => {
//   const downArrow = document.querySelector('#down-arrow');
//   downArrow.addEventListener('click', subtractDegree);
