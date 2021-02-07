
const foodDetails = document.getElementById("food-details");
const singleFoodDetails = document.getElementById("single-food-details");
const searchButton = document.getElementById("search-button");
const inputBox = document.getElementById("input-box");

searchButton.addEventListener("click",function(){
    fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${inputBox.value}`)
    .then(response => response.json())
    .then(data => {
        const countries = data.meals;
            countries.forEach(element => {
            const htmlTemplate = `
                <div class="col">
                    <div class="card h-100">
                        <img src="${element.strMealThumb}" class="card-img-top" alt="...">
                        <div class="card-body">
                            <h5 class="card-title">${element.strMeal}</h5>
                            <a onclick="displayFoodDetails('${element.strMeal}')" class="stretched-link" href="#"></a>
                        </div>
                    </div>
                </div>
            `;
            foodDetails.innerHTML += htmlTemplate;
        })
    })
    .catch(error => alert(error))
})

const displayFoodDetails = name => {
    const url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${name}`
            
        fetch(url)
        .then(response => response.json())
        .then(data => {
            const htmlTemplate = `
                <div class="col">
                    <div class="card h-100">
                        <img src="${data.meals[0].strMealThumb}" class="card-img-top w-25 m-auto" alt="...">
                        <div class="card-body">
                            <h5 class="card-title">${data.meals[0].strMeal}</h5>
                            <p>Category: ${data.meals[0].strCategory}</p>
                            <p>Ingredient: 
                            ${data.meals[0].strIngredient1},
                            ${data.meals[0].strIngredient2},
                            ${data.meals[0].strIngredient3},
                            ${data.meals[0].strIngredient4},
                            ${data.meals[0].strIngredient5},
                            ${data.meals[0].strIngredient6},
                            ${data.meals[0].strIngredient7},
                            ${data.meals[0].strIngredient8},
                            ${data.meals[0].strIngredient9},
                            ${data.meals[0].strIngredient10},
                            ${data.meals[0].strIngredient11},
                            ${data.meals[0].strIngredient12},
                            ${data.meals[0].strIngredient13},
                            ${data.meals[0].strIngredient14},
                            ${data.meals[0].strIngredient15},
                            ${data.meals[0].strIngredient16},
                            ${data.meals[0].strIngredient17},
                            ${data.meals[0].strIngredient18},
                            ${data.meals[0].strIngredient19},
                            ${data.meals[0].strIngredient20},
                            </p>
                        </div>
                    </div>
                </div>
            `;
            singleFoodDetails.innerHTML += htmlTemplate;
        });
}
