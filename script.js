
const foodDetails = document.getElementById("food-details");
const singleFoodDetails = document.getElementById("single-food-details");
const searchButton = document.getElementById("search-button");
const inputBox = document.getElementById("input-box");

searchButton.addEventListener("click",function(){
    fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${inputBox.value}`)
    .then(response => response.json())
    .then(data => {
        const mealInfo = data.meals;
        mealInfo.forEach(element => {
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
})

const displayFoodDetails = name => {
    const url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${name}`
            
        fetch(url)
        .then(response => response.json())
        .then(data => {
            const htmlTemplate = `
                <div class="col d-flex justify-content-center">
                    <div class="card h-100 w-50">
                        <img src="${data.meals[0].strMealThumb}" class="card-img-top" alt="...">
                        <div class="card-body">
                            <h2 class="card-title">${data.meals[0].strMeal}</h2>
                            <h4>Category: ${data.meals[0].strCategory}</h4>
                            <h5>Ingredients</h5>
                            <p>${data.meals[0].strIngredient1}</p>
                            <p>${data.meals[0].strIngredient2}</p>
                            <p>${data.meals[0].strIngredient3}</p>
                            <p>${data.meals[0].strIngredient4}</p>
                            <p>${data.meals[0].strIngredient5}</p>
                            <p>${data.meals[0].strIngredient6}</p>
                            <p>${data.meals[0].strIngredient7}</p>
                            <p>${data.meals[0].strIngredient8}</p>
                            <p>${data.meals[0].strIngredient9}</p>
                            <p>${data.meals[0].strIngredient10}</p>
                            <p>${data.meals[0].strIngredient11}</p>
                            <p>${data.meals[0].strIngredient12}</p>
                            <p>${data.meals[0].strIngredient13}</p>
                            <p>${data.meals[0].strIngredient14}</p>
                            <p>${data.meals[0].strIngredient15}</p>
                            <p>${data.meals[0].strIngredient16}</p>
                            <p>${data.meals[0].strIngredient17}</p>
                            <p>${data.meals[0].strIngredient18}</p>
                            <p>${data.meals[0].strIngredient19}</p>
                            <p>${data.meals[0].strIngredient20}</p>
                        </div>
                    </div>
                </div>
            `;
            singleFoodDetails.innerHTML += htmlTemplate;
        });
}
