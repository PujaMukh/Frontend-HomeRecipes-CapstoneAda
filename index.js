const fetchRecipes = () => {
  fetch("http://localhost:8080/api/v1/recipe/DESSERT")
    .then((response) =>
      response.json().then((data) => {
        // console.log("hi");
        console.log(data);
        console.log(data[0].name);
      })
    )
    .catch((err) => console.log(err));
};

document.addEventListener("DOMContentLoaded", fetchRecipes);
