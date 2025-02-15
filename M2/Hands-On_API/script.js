const recipeResults = document.getElementById("recipeResults");
  
document.getElementById("searchBtn").addEventListener("click", fetchRecipes);
document.getElementById("randomMealBtn").addEventListener("click", fetchRandomMeal);

function fetchRecipes() {
  const query = document.getElementById("searchInput").value.trim();
  if (!query) return;
  
  let apiUrl = `https://www.themealdb.com/api/json/v1/1/search.php?s=${query}`; 
  
  fetch(apiUrl)
    .then(response => response.json())
    .then(data => displayRecipes(data.meals))
    .catch(error => console.error("Error fetching recipes:", error));
}

function fetchRandomMeal() {
  let apiUrl = `https://www.themealdb.com/api/json/v1/1/random.php`;
  
  fetch(apiUrl)
    .then(response => response.json())
    .then(data => displayRecipes(data.meals))
    .catch(error => console.error("Error fetching random meal:", error));
}

function displayRecipes(meals) {
  recipeResults.innerHTML = "";
  if (meals) {
    meals.forEach(meal => {
      const recipeDiv = document.createElement("div");
      recipeDiv.classList.add("recipe");
      recipeDiv.innerHTML = `
        <h3>${meal.strMeal}</h3>
        <img src="${meal.strMealThumb}" alt="${meal.strMeal}" width="100%" style="border-radius:8px;">
        <p><strong>Category:</strong> ${meal.strCategory}</p>
        <p><strong>Instructions:</strong> ${meal.strInstructions.substring(0, 400)}...</p>
        <p><strong>Click <a href="${meal.strYoutube}" target="_blank">here</a> for full instructions.</strong></p>
        <button onclick="saveToFavorites('${meal.idMeal}')">Save to Favorites</button>
      `;
      recipeResults.appendChild(recipeDiv);
    });
  } else {
    recipeResults.innerHTML = "<p>No meals found. Try another search.</p>";
  }
}

function saveToFavorites(mealId) {
  let favorites = JSON.parse(localStorage.getItem("favorites")) || [];
  if (!favorites.includes(mealId)) {
    favorites.push(mealId);
    localStorage.setItem("favorites", JSON.stringify(favorites));
    alert("Meal saved to favorites!");
  } else {
    alert("Meal already in favorites!");
  }
}