
// fetch Alert divs  
var NameInput = document.getElementById("NameInput")
var EmailInput = document.getElementById("EmailInput")
var PhoneInput = document.getElementById("PhoneInput")
var ageInput = document.getElementById("ageInput")
var passwordInput = document.getElementById("passwordInput")
var RepasswordInput = document.getElementById("RepasswordInput")
var SubmitForm = document.getElementById("SubmitForm")
var form = document.getElementById("form")


var contactUs = document.getElementById("contact-us")
var main = document.getElementById("main")


// Links in Slider Menu
var SearchLink = document.getElementById("SearchLink")
var CategotiesLink = document.getElementById("CategotiesLink")
var AreaLink = document.getElementById("AreaLink")
var IngredientLink = document.getElementById("IngredientLink")
var ContactUsLink = document.getElementById("ContactUsLink")



// Search
var SearchContainer = document.getElementById("SearchContainer")
var SearchSection = document.getElementById("SearchSection")
var SeasearchInputsrch = document.getElementById("searchInputs")
var SearchContent = document.getElementById("SearchContent")
var SearchContentRow = document.getElementById("SearchContentRow")
var MealDetailsForSearchId = document.getElementById("MealDetailsForSearch")
var MealDetailsRowForSearch = document.getElementById("MealDetailsRowForSearch")

var SearchByName = document.getElementById("SearchByName")
var SearchByFristLetter = document.getElementById("SearchByFristLetter")


// category
var Categories = document.getElementById("Categories")
var categoryMainRow = document.getElementById("category-main-row")
var MealsForOneCategoryId = document.getElementById("MealsForOneCategory")
var MealsForOneCategoryRow = document.getElementById("MealsForOneCategoryRow")
var MealDetailsId = document.getElementById("MealDetails")
var MealDetailsRow = document.getElementById("MealDetailsRow")

// Area
var AreaSection = document.getElementById("AreaSection")
var AreaRow = document.getElementById("AreaRow")
var MealsForOneAreaId = document.getElementById("MealsForOneArea")
var MealsForOneAreaRow = document.getElementById("MealsForOneAreaRow")
var MealDetailsForAreaId = document.getElementById("MealDetailsForArea")
var MealDetailsRowForArea = document.getElementById("MealDetailsRowForArea")

// Ingredient
var IngredientSection = document.getElementById("IngredientSection")
var IngredientRow = document.getElementById("IngredientRow")
var MealsForOneIngredientId = document.getElementById("MealsForOneIngredient")
var MealsForOneIngredientRow = document.getElementById("MealsForOneIngredientRow")
var MealDetailsForIngredientId = document.getElementById("MealDetailsForIngredient")
var MealDetailsRowForIngredient = document.getElementById("MealDetailsRowForIngredient")

// Super Classes For hidden and display Divs
var SuperSearch = document.getElementById("SuperSearch")
var SuperCategory = document.getElementById("SuperCategory")
var SuperArea = document.getElementById("SuperArea")
var SuperIngredient = document.getElementById("SuperIngredient")
var SuperContactUs = document.getElementById("SuperContactUs")



//    Search
class Search {
    constructor() {

    }
    async getAllMealsForSearchByName(MealName) {

        let Meals = await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${MealName}`)
        let result = await Meals.json()
        return result;
    }
    async getAllMealsForSearchByFristLetter(Letter) {

        let Meals = await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?f=${Letter}`)
        let result = await Meals.json()
        return result;
    }
    async getFullMealDetails(mealId) {

        let mealDetails = await fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${mealId.trim()}`)
        let result = await mealDetails.json()
        return result;
    }
    async displayFullMealDetails(mealDetails) {
        $(".loading").fadeIn(200)
        let data = mealDetails.meals

        let tank = ""
        for (let i = 0; i < data.length; i++) {
            let container = ""
            if (data.length > 1) {
                var strTagsArr = (data[0].strTags).split(",")
                for (let j = 0; j < strTagsArr.length; j++) {
                    container += `
                     <a style="background-color:#F8D7DA" class="btn mb-2">${strTagsArr[j]}</a> `
                }
            }

            tank += `
             <div class="col-lg-4">
                        <img class="w-100 rounded-3 mb-2" src="${data[0].strMealThumb}" alt="">
                        <h2>${data[0].strMeal}</h2>
                    </div>
                    <div class="col-lg-8">
                        <h2>Instructions</h2>
                        <p>${data[0].strInstructions}</p>
                        <h3>Area :${data[0].strArea}</h3>
                        <h3>Category  :${data[0].strCategory}</h3>
                        <h3>Recipes  :</h3>
                       <div class="btns">
                        <a style="background-color:#CFF4FC" class="btn mb-2 checkBtns ">${data[0].strMeasure1}</a>
                        <a style="background-color:#CFF4FC" class="btn mb-2 checkBtns ">${data[0].strMeasure2}</a>
                        <a style="background-color:#CFF4FC" class="btn mb-2 checkBtns ">${data[0].strMeasure3}</a>
                        <a style="background-color:#CFF4FC" class="btn mb-2 checkBtns ">${data[0].strMeasure4}</a>
                        <a style="background-color:#CFF4FC" class="btn mb-2 checkBtns ">${data[0].strMeasure5}</a>
                        <a style="background-color:#CFF4FC" class="btn mb-2 checkBtns ">${data[0].strMeasure6}</a>
                        <a style="background-color:#CFF4FC" class="btn mb-2 checkBtns ">${data[0].strMeasure7}</a>
                        <a style="background-color:#CFF4FC" class="btn mb-2 checkBtns ">${data[0].strMeasure8}</a>
                        <a style="background-color:#CFF4FC" class="btn mb-2 checkBtns ">${data[0].strMeasure9}</a>
                        <a style="background-color:#CFF4FC" class="btn mb-2 checkBtns ">${data[0].strMeasure10}</a>
                        <a style="background-color:#CFF4FC" class="btn mb-2 checkBtns ">${data[0].strMeasure11}</a>
                        <a style="background-color:#CFF4FC" class="btn mb-2 checkBtns ">${data[0].strMeasure12}</a>
                        <a style="background-color:#CFF4FC" class="btn mb-2 checkBtns ">${data[0].strMeasure13}</a>
                        <a style="background-color:#CFF4FC" class="btn mb-2 checkBtns ">${data[0].strMeasure14}</a>
                        <a style="background-color:#CFF4FC" class="btn mb-2 checkBtns ">${data[0].strMeasure15}</a>
                        <a style="background-color:#CFF4FC" class="btn mb-2 checkBtns ">${data[0].strMeasure16}</a>
                        <a style="background-color:#CFF4FC" class="btn mb-2 checkBtns ">${data[0].strMeasure17}</a>
                        <a style="background-color:#CFF4FC" class="btn mb-2 checkBtns ">${data[0].strMeasure18}</a>
                        <a style="background-color:#CFF4FC" class="btn mb-2 checkBtns ">${data[0].strMeasure19}</a>
                        <a style="background-color:#CFF4FC" class="btn mb-2 checkBtns ">${data[0].strMeasure20}</a>   
                         </div>
                        <br> 
                        <h2>Tags :</h2>   
                       ${container}  
                       <br>     
                       <br>     
                        <a href="${data[0].strSource}"  class="btn btn-success">Source</a>
                        <a href="${data[0].strYoutube}"  class="btn btn-danger">Youtube</a>
                    </div>
            `

        }
        $(SearchContainer).attr("class", "d-none");
        $(SearchContent).attr("class", "d-none");
        $(MealDetailsForSearchId).attr("class", "d-inline");


        MealDetailsRowForSearch.innerHTML = tank
        let btns = document.querySelectorAll(".checkBtns")

        btns.forEach((btn) => {

            if ($(btn).text() == "" || $(btn).text() == " ") {
                $(btn).attr("class", "hidden");
            }



        })

        $(Categories).attr("class", "d-none");
        $(MealsForOneCategoryId).attr("class", "d-none");
        $(MealDetailsId).attr("class", "d-inline");

        $(".loading").fadeOut(500)

    }
    async displayMeals(response) {

        $(".loading").fadeIn(200)

        let data = response.meals

        let tank = ""
        for (let i = 0; i < data.length; i++) {
            tank += `
              <div class="col-meal col-lg-3 col-md-6 col-sm-12  position-relative my-2 py-2 rounded-3 ">
                        <div class="text-center">
                            <img src="${data[i].strMealThumb}" class="w-100 " alt="">
                        </div>
                        <div class="img-hover position-absolute w-100 h-100 rounded-3 ">
                            <div class="w-100 h-100 d-flex flex-column-reverse justify-content-center  text-center p-2 ">
                                <h2 class=" "> ${data[i].strMeal}</h2>
                                <h6 class="d-none MealId"> ${data[i].idMeal}</h6>
                            </div>
                        </div>
                    </div>
            `

        }

        $(SearchContent).attr("class", "d-inline");
        $(MealDetailsForSearchId).attr("class", "d-none");
       

        SearchContentRow.innerHTML = tank;
        let btns = document.querySelectorAll(".col-meal")
        btns.forEach((btn) => {
            btn.addEventListener("click", async (e) => {
                let mealId = $(btn).find("*").filter(".MealId").text()
                // method get full meal Details
                let mealDetails = await this.getFullMealDetails(mealId)
                let result = await this.displayFullMealDetails(mealDetails)

            })
        })
        $(".loading").fadeOut(500)
    }
}
SearchLink.addEventListener("click", async function () {
    startApp()
    $(SearchSection).attr("class", "d-inline");
    $(SuperSearch).attr("class", "d-inline");
    $(MealDetailsForSearchId).attr("class", "d-none");
    $(SearchContainer).attr("class", "d-inline searchInputs row justify-content-center  g-3 d-flex");

    $(SearchContent).attr("class", "d-none");
    $(SuperArea).attr("class", "d-none");
    $(SuperCategory).attr("class", "d-none");
    $(SuperIngredient).attr("class", "d-none");
    $(SuperContactUs).attr("class", "d-none");
})
let objSearch = new Search()
$(SearchByName).keyup(async function (e) {
    let mealName = $(SearchByName).val()
    let response = await objSearch.getAllMealsForSearchByName(mealName)
    await objSearch.displayMeals(response)
});
$(SearchByFristLetter).keyup(async function (e) {
    let Letter = $(SearchByFristLetter).val()
    let response = await objSearch.getAllMealsForSearchByFristLetter(Letter)
    await objSearch.displayMeals(response)
});


//   category
class Category {
    constructor() {
        this.AllCategories = this.getAllMealCategories();
    }
    async getAllMealCategories() {
        let mealsCategory = await fetch(`https://www.themealdb.com/api/json/v1/1/categories.php`)
        let result = await mealsCategory.json()
        return result;
    }
    async getAllMealsForThisCategory(Categoryname) {

        let categoryMeals = await fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?c=${Categoryname.trim()}`)
        let result = await categoryMeals.json()
        return result;
    }
    async getFullMealDetails(mealId) {

        let mealDetails = await fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${mealId.trim()}`)
        let result = await mealDetails.json()
        return result;
    }
    async displayFullMealDetails(mealDetails) {
        $(".loading").fadeIn(200)
        let data = mealDetails.meals

        let tank = ""
        for (let i = 0; i < data.length; i++) {
            let container = ""
            if (data.length > 1) {
                var strTagsArr = (data[0].strTags).split(",")
                for (let j = 0; j < strTagsArr.length; j++) {
                    container += `
                     <a style="background-color:#F8D7DA" class="btn mb-2">${strTagsArr[j]}</a> `
                }
            }

            tank += `
             <div class="col-lg-4">
                        <img class="w-100 rounded-3 mb-2" src="${data[0].strMealThumb}" alt="">
                        <h2>${data[0].strMeal}</h2>
                    </div>
                    <div class="col-lg-8">
                        <h2>Instructions</h2>
                        <p>${data[0].strInstructions}</p>
                        <h3>Area :${data[0].strArea}</h3>
                        <h3>Category  :${data[0].strCategory}</h3>
                        <h3>Recipes  :</h3>
                       <div class="btns">
                        <a style="background-color:#CFF4FC" class="btn mb-2 checkBtns ">${data[0].strMeasure1}</a>
                        <a style="background-color:#CFF4FC" class="btn mb-2 checkBtns ">${data[0].strMeasure2}</a>
                        <a style="background-color:#CFF4FC" class="btn mb-2 checkBtns ">${data[0].strMeasure3}</a>
                        <a style="background-color:#CFF4FC" class="btn mb-2 checkBtns ">${data[0].strMeasure4}</a>
                        <a style="background-color:#CFF4FC" class="btn mb-2 checkBtns ">${data[0].strMeasure5}</a>
                        <a style="background-color:#CFF4FC" class="btn mb-2 checkBtns ">${data[0].strMeasure6}</a>
                        <a style="background-color:#CFF4FC" class="btn mb-2 checkBtns ">${data[0].strMeasure7}</a>
                        <a style="background-color:#CFF4FC" class="btn mb-2 checkBtns ">${data[0].strMeasure8}</a>
                        <a style="background-color:#CFF4FC" class="btn mb-2 checkBtns ">${data[0].strMeasure9}</a>
                        <a style="background-color:#CFF4FC" class="btn mb-2 checkBtns ">${data[0].strMeasure10}</a>
                        <a style="background-color:#CFF4FC" class="btn mb-2 checkBtns ">${data[0].strMeasure11}</a>
                        <a style="background-color:#CFF4FC" class="btn mb-2 checkBtns ">${data[0].strMeasure12}</a>
                        <a style="background-color:#CFF4FC" class="btn mb-2 checkBtns ">${data[0].strMeasure13}</a>
                        <a style="background-color:#CFF4FC" class="btn mb-2 checkBtns ">${data[0].strMeasure14}</a>
                        <a style="background-color:#CFF4FC" class="btn mb-2 checkBtns ">${data[0].strMeasure15}</a>
                        <a style="background-color:#CFF4FC" class="btn mb-2 checkBtns ">${data[0].strMeasure16}</a>
                        <a style="background-color:#CFF4FC" class="btn mb-2 checkBtns ">${data[0].strMeasure17}</a>
                        <a style="background-color:#CFF4FC" class="btn mb-2 checkBtns ">${data[0].strMeasure18}</a>
                        <a style="background-color:#CFF4FC" class="btn mb-2 checkBtns ">${data[0].strMeasure19}</a>
                        <a style="background-color:#CFF4FC" class="btn mb-2 checkBtns ">${data[0].strMeasure20}</a>   
                         </div>
                        <br> 
                        <h2>Tags :</h2>   
                       ${container}  
                       <br>     
                       <br>     
                        <a href="${data[0].strSource}"  class="btn btn-success">Source</a>
                        <a href="${data[0].strYoutube}"  class="btn btn-danger">Youtube</a>
                    </div>
            `

        }
        MealDetailsRow.innerHTML = tank
        let btns = document.querySelectorAll(".checkBtns")

        btns.forEach((btn) => {

            if ($(btn).text() == "" || $(btn).text() == " ") {
                $(btn).attr("class", "hidden");
            }



        })



        $(Categories).attr("class", "d-none");
        $(MealsForOneCategoryId).attr("class", "d-none");
        $(MealDetailsId).attr("class", "d-inline");




        $(".loading").fadeOut(500)


    }
    async displayMealsForOneCategory(MealsForOneCategory) {

        $(".loading").fadeIn(200)

        let data = MealsForOneCategory.meals

        let tank = ""
        for (let i = 0; i < data.length; i++) {
            tank += `
              <div class="col-meal col-lg-3 col-md-6 col-sm-12  position-relative my-2 py-2 rounded-3 ">
                        <div class="text-center">
                            <img src="${data[i].strMealThumb}" class="w-100" alt="">
                        </div>
                        <div class="img-hover position-absolute w-100 h-100 rounded-3 ">
                            <div class="w-100 h-100 d-flex flex-column-reverse justify-content-center  text-center p-2 ">
                                <h2 class=" "> ${data[i].strMeal}</h2>
                                <h6 class="d-none MealId"> ${data[i].idMeal}</h6>
                            </div>
                        </div>
                    </div>
            `

        }



        $(Categories).attr("class", "d-none");
        $(MealsForOneCategoryId).attr("class", "d-inline");
        $(MealDetailsId).attr("class", "d-none");


        MealsForOneCategoryRow.innerHTML = tank;
        let btns = document.querySelectorAll(".col-meal")
        btns.forEach((btn) => {
            btn.addEventListener("click", async (e) => {
                let mealId = $(btn).find("*").filter(".MealId").text()
                // method get full meal Details
                let mealDetails = await this.getFullMealDetails(mealId)
                let result = await this.displayFullMealDetails(mealDetails)
                $(MealDetailsId).attr("class", "d-inline");
                $(MealsForOneCategoryId).attr("class", "d-none");
            })

        })
        $(".loading").fadeOut(500)
    }
    async displayCategory(getMealsCategory) {
        $(".loading").fadeIn(200)

        let data = getMealsCategory.categories
        let tank = ""
        for (let i = 0; i < data.length; i++) {
            tank += `
              <div class="col-cat col-lg-3 col-md-6 col-sm-12  position-relative my-2 py-2 rounded-3 ">
                        <div class="text-center">
                            <img src="${data[i].strCategoryThumb}" claw-100-75 " alt="">
                        </div>
                        <div class="img-hover position-absolute w-100 h-100 rounded-3 ">
                            <div class="w-100 h-100  text-center p-2 ">
                                <h2 class="catName"> ${data[i].strCategory}</h2>
                                <p>${data[i].strCategoryDescription}</p>
                            </div>
                        </div>
                    </div>
            `

        }


        $(Categories).attr("class", "d-inline");
        $(MealsForOneCategoryId).attr("class", "d-none");
        $(MealDetailsId).attr("class", "d-none");

        categoryMainRow.innerHTML = tank;
        let btns = document.querySelectorAll(".col-cat")
        btns.forEach((btn) => {
            btn.addEventListener("click", async (e) => {
                let catName = $(btn).find("*").filter(".catName").text()
                let MealsForOneCategory = await this.getAllMealsForThisCategory(catName)
                let result = await this.displayMealsForOneCategory(MealsForOneCategory)

            })

        })
        $(".loading").fadeOut(500)
    }
}
CategotiesLink.addEventListener("click", async function () {
    startApp()
    $(SuperSearch).attr("class", "d-none");
    $(SuperCategory).attr("class", "d-inline");
    $(SuperArea).attr("class", "d-none");
    $(SuperIngredient).attr("class", "d-none");
    $(SuperContactUs).attr("class", "d-none");

    let objCategory = new Category()
    let getMealsCategory = await objCategory.getAllMealCategories()
    Categories.classList.remove("d-none")
    objCategory.displayCategory(getMealsCategory)


})

//     Area    
class Area {
    constructor() {

    }
    async getAllAreas() {
        let areas = await fetch(`https://www.themealdb.com/api/json/v1/1/list.php?a=list`)
        let result = await areas.json()
        return result;
    }
    async getAllMealsForThisArea(countryName) {

        let areaMeals = await fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?a=${countryName.trim()}`)
        let result = await areaMeals.json()
        return result;
    }
    async getFullMealDetails(mealId) {

        let mealDetails = await fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${mealId.trim()}`)
        let result = await mealDetails.json()
        return result;
    }
    async displayFullMealDetails(mealDetails) {
        $(".loading").fadeIn(200)
        let data = mealDetails.meals

        let tank = ""
        for (let i = 0; i < data.length; i++) {
            let container = ""
            if (data.length > 1) {
                var strTagsArr = (data[0].strTags).split(",")
                for (let j = 0; j < strTagsArr.length; j++) {
                    container += `
                     <a style="background-color:#F8D7DA" class="btn mb-2">${strTagsArr[j]}</a> `
                }
            }

            tank += `
             <div class="col-lg-4">
                        <img class="w-100 rounded-3 mb-2" src="${data[0].strMealThumb}" alt="">
                        <h2>${data[0].strMeal}</h2>
                    </div>
                    <div class="col-lg-8">
                        <h2>Instructions</h2>
                        <p>${data[0].strInstructions}</p>
                        <h3>Area :${data[0].strArea}</h3>
                        <h3>Category  :${data[0].strCategory}</h3>
                        <h3>Recipes  :</h3>
                       <div class="btns">
                        <a style="background-color:#CFF4FC" class="btn mb-2 checkBtns ">${data[0].strMeasure1}</a>
                        <a style="background-color:#CFF4FC" class="btn mb-2 checkBtns ">${data[0].strMeasure2}</a>
                        <a style="background-color:#CFF4FC" class="btn mb-2 checkBtns ">${data[0].strMeasure3}</a>
                        <a style="background-color:#CFF4FC" class="btn mb-2 checkBtns ">${data[0].strMeasure4}</a>
                        <a style="background-color:#CFF4FC" class="btn mb-2 checkBtns ">${data[0].strMeasure5}</a>
                        <a style="background-color:#CFF4FC" class="btn mb-2 checkBtns ">${data[0].strMeasure6}</a>
                        <a style="background-color:#CFF4FC" class="btn mb-2 checkBtns ">${data[0].strMeasure7}</a>
                        <a style="background-color:#CFF4FC" class="btn mb-2 checkBtns ">${data[0].strMeasure8}</a>
                        <a style="background-color:#CFF4FC" class="btn mb-2 checkBtns ">${data[0].strMeasure9}</a>
                        <a style="background-color:#CFF4FC" class="btn mb-2 checkBtns ">${data[0].strMeasure10}</a>
                        <a style="background-color:#CFF4FC" class="btn mb-2 checkBtns ">${data[0].strMeasure11}</a>
                        <a style="background-color:#CFF4FC" class="btn mb-2 checkBtns ">${data[0].strMeasure12}</a>
                        <a style="background-color:#CFF4FC" class="btn mb-2 checkBtns ">${data[0].strMeasure13}</a>
                        <a style="background-color:#CFF4FC" class="btn mb-2 checkBtns ">${data[0].strMeasure14}</a>
                        <a style="background-color:#CFF4FC" class="btn mb-2 checkBtns ">${data[0].strMeasure15}</a>
                        <a style="background-color:#CFF4FC" class="btn mb-2 checkBtns ">${data[0].strMeasure16}</a>
                        <a style="background-color:#CFF4FC" class="btn mb-2 checkBtns ">${data[0].strMeasure17}</a>
                        <a style="background-color:#CFF4FC" class="btn mb-2 checkBtns ">${data[0].strMeasure18}</a>
                        <a style="background-color:#CFF4FC" class="btn mb-2 checkBtns ">${data[0].strMeasure19}</a>
                        <a style="background-color:#CFF4FC" class="btn mb-2 checkBtns ">${data[0].strMeasure20}</a>   
                         </div>
                        <br> 
                        <h2>Tags :</h2>   
                       ${container}  
                       <br>     
                       <br>     
                        <a href="${data[0].strSource}"  class="btn btn-success">Source</a>
                        <a href="${data[0].strYoutube}"  class="btn btn-danger">Youtube</a>
                    </div>
            `

        }

        $(AreaSection).attr("class", "d-none");
        $(MealsForOneAreaId).attr("class", "d-none");
        $(MealDetailsForAreaId).attr("class", "d-inline");

        MealDetailsRowForArea.innerHTML = tank
        let btns = document.querySelectorAll(".checkBtns")

        btns.forEach((btn) => {
            if ($(btn).text() == "" || $(btn).text() == " ") {
                $(btn).attr("class", "hidden");
            }

        })

        $(".loading").fadeOut(500)


    }
    async displayMealsForOneArea(MealsForOneArea) {

        $(".loading").fadeIn(200)

        let data = MealsForOneArea.meals

        let tank = ""
        for (let i = 0; i < data.length; i++) {
            tank += `
              <div class="col-meal col-lg-3 col-md-6 col-sm-12  position-relative my-2 py-2 rounded-3 ">
                        <div class="text-center">
                            <img src="${data[i].strMealThumb}" class="w-100" alt="">
                        </div>
                        <div class="img-hover position-absolute w-100 h-100 rounded-3 ">
                            <div class="w-100 h-100 d-flex flex-column-reverse justify-content-center  text-center p-2 ">
                                <h2 class=" "> ${data[i].strMeal}</h2>
                                <h6 class="d-none MealId"> ${data[i].idMeal}</h6>
                            </div>
                        </div>
                    </div>
            `

        }


        $(AreaSection).attr("class", "d-none");
        $(MealsForOneAreaId).attr("class", "d-inline");
        $(MealDetailsForAreaId).attr("class", "d-none");


        MealsForOneAreaRow.innerHTML = tank;
        let btns = document.querySelectorAll(".col-meal")
        btns.forEach((btn) => {
            btn.addEventListener("click", async (e) => {
                let mealId = $(btn).find("*").filter(".MealId").text()

                // method get full meal Details

                let mealDetails = await this.getFullMealDetails(mealId)
                let result = await this.displayFullMealDetails(mealDetails)


            })

        })
        $(".loading").fadeOut(500)
    }
    async displayAreas(geatAreas) {
        $(".loading").fadeIn(200)


        let data = geatAreas.meals
        let tank = ""
        for (let i = 0; i < data.length; i++) {
            tank += `
              <div class="col-area col-lg-3 col-md-4 col-sm-6">
                    <div class=" text-center  area-icon">
                        <i class="fa-solid fa-house-laptop"></i>
                        <h2 class="CountryName">${data[i].strArea}</h2>
                    </div>
                </div>
            `
        }
        $(AreaSection).attr("class", "d-inline");
        $(MealsForOneAreaId).attr("class", "d-none");
        $(MealDetailsForAreaId).attr("class", "d-none");

        AreaRow.innerHTML = tank;
        let btns = document.querySelectorAll(".col-area")

        btns.forEach((btn) => {
            btn.addEventListener("click", async (e) => {
                let countryName = $(btn).text()
                let MealsForOneArea = await this.getAllMealsForThisArea(countryName)
                let mealDetails = await this.displayMealsForOneArea(MealsForOneArea)
                return mealDetails
            })

        })
        $(".loading").fadeOut(500)


    }
}
AreaLink.addEventListener("click", async function () {
    startApp()
    $(SuperSearch).attr("class", "d-none");
    $(SuperArea).attr("class", "d-inline");

    $(SuperCategory).attr("class", "d-none");
    $(SuperIngredient).attr("class", "d-none");
    $(SuperContactUs).attr("class", "d-none");

    let objArea = new Area()
    let geatAreas = await objArea.getAllAreas()
    let mealDetails = objArea.displayAreas(geatAreas)



})

//    Ingredient     
class Ingredient {
    constructor() {

    }
    async getAllIngredient() {
        let ingredient = await fetch(`https://www.themealdb.com/api/json/v1/1/list.php?i=list`)
        let result = await ingredient.json()
        return result;
    }
    async getAllMealsForThisIngredient(MealName) {

        let IngredientMeals = await fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?i=${MealName.trim()}`)
        let result = await IngredientMeals.json()
        return result;
    }
    async getFullMealDetails(mealId) {
        let mealDetails = await fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${mealId.trim()}`)
        let result = await mealDetails.json()
        return result;
    }
    async displayFullMealDetails(mealDetails) {
        $(".loading").fadeIn(200)
        let data = mealDetails.meals

        let tank = ""
        for (let i = 0; i < data.length; i++) {
            let container = ""
            if (data.length > 1) {
                var strTagsArr = (data[0].strTags).split(",")
                for (let j = 0; j < strTagsArr.length; j++) {
                    container += `
                     <a style="background-color:#F8D7DA" class="btn mb-2">${strTagsArr[j]}</a> `
                }
            }

            tank += `
             <div class="col-lg-4">
                        <img class="w-100 rounded-3 mb-2" src="${data[0].strMealThumb}" alt="">
                        <h2>${data[0].strMeal}</h2>
                    </div>
                    <div class="col-lg-8">
                        <h2>Instructions</h2>
                        <p>${data[0].strInstructions}</p>
                        <h3>Area :${data[0].strArea}</h3>
                        <h3>Category  :${data[0].strCategory}</h3>
                        <h3>Recipes  :</h3>
                       <div class="btns">
                        <a style="background-color:#CFF4FC" class="btn mb-2 checkBtns ">${data[0].strMeasure1}</a>
                        <a style="background-color:#CFF4FC" class="btn mb-2 checkBtns ">${data[0].strMeasure2}</a>
                        <a style="background-color:#CFF4FC" class="btn mb-2 checkBtns ">${data[0].strMeasure3}</a>
                        <a style="background-color:#CFF4FC" class="btn mb-2 checkBtns ">${data[0].strMeasure4}</a>
                        <a style="background-color:#CFF4FC" class="btn mb-2 checkBtns ">${data[0].strMeasure5}</a>
                        <a style="background-color:#CFF4FC" class="btn mb-2 checkBtns ">${data[0].strMeasure6}</a>
                        <a style="background-color:#CFF4FC" class="btn mb-2 checkBtns ">${data[0].strMeasure7}</a>
                        <a style="background-color:#CFF4FC" class="btn mb-2 checkBtns ">${data[0].strMeasure8}</a>
                        <a style="background-color:#CFF4FC" class="btn mb-2 checkBtns ">${data[0].strMeasure9}</a>
                        <a style="background-color:#CFF4FC" class="btn mb-2 checkBtns ">${data[0].strMeasure10}</a>
                        <a style="background-color:#CFF4FC" class="btn mb-2 checkBtns ">${data[0].strMeasure11}</a>
                        <a style="background-color:#CFF4FC" class="btn mb-2 checkBtns ">${data[0].strMeasure12}</a>
                        <a style="background-color:#CFF4FC" class="btn mb-2 checkBtns ">${data[0].strMeasure13}</a>
                        <a style="background-color:#CFF4FC" class="btn mb-2 checkBtns ">${data[0].strMeasure14}</a>
                        <a style="background-color:#CFF4FC" class="btn mb-2 checkBtns ">${data[0].strMeasure15}</a>
                        <a style="background-color:#CFF4FC" class="btn mb-2 checkBtns ">${data[0].strMeasure16}</a>
                        <a style="background-color:#CFF4FC" class="btn mb-2 checkBtns ">${data[0].strMeasure17}</a>
                        <a style="background-color:#CFF4FC" class="btn mb-2 checkBtns ">${data[0].strMeasure18}</a>
                        <a style="background-color:#CFF4FC" class="btn mb-2 checkBtns ">${data[0].strMeasure19}</a>
                        <a style="background-color:#CFF4FC" class="btn mb-2 checkBtns ">${data[0].strMeasure20}</a>   
                         </div>
                        <br> 
                        <h2>Tags :</h2>   
                       ${container}  
                       <br>     
                       <br>     
                        <a href="${data[0].strSource}"  class="btn btn-success">Source</a>
                        <a href="${data[0].strYoutube}"  class="btn btn-danger">Youtube</a>
                    </div>
            `

        }

        $(IngredientSection).attr("class", "d-none");
        $(MealsForOneIngredientId).attr("class", "d-none");
        $(MealDetailsForIngredientId).attr("class", "d-inline");

        MealDetailsRowForIngredient.innerHTML = tank
        let btns = document.querySelectorAll(".checkBtns")

        btns.forEach((btn) => {
            if ($(btn).text() == "" || $(btn).text() == " ") {
                $(btn).attr("class", "hidden");
            }

        })

        $(".loading").fadeOut(500)


    }
    async displayMealsForOneIngredient(MealsForOneIngredient) {

        $(".loading").fadeIn(200)

        let data = MealsForOneIngredient.meals

        let tank = ""
        for (let i = 0; i < data.length; i++) {
            tank += `
              <div class="col-meal col-lg-3 col-md-6 col-sm-12  position-relative my-2 py-2 rounded-3 ">
                        <div class="text-center">
                            <img src="${data[i].strMealThumb}" class="w-100" alt="">
                        </div>
                        <div class="img-hover position-absolute w-100 h-100 rounded-3 ">
                            <div class="w-100 h-100 d-flex flex-column-reverse justify-content-center  text-center p-2 ">
                                <h2 class=" "> ${data[i].strMeal}</h2>
                                <h6 class="d-none MealId"> ${data[i].idMeal}</h6>
                            </div>
                        </div>
                    </div>
            `

        }

        $(IngredientSection).attr("class", "d-none");
        $(MealsForOneIngredientId).attr("class", "d-inline");
        $(MealDetailsForIngredientId).attr("class", "d-none");


        MealsForOneIngredientRow.innerHTML = tank;
        let btns = document.querySelectorAll(".col-meal")
        btns.forEach((btn) => {
            btn.addEventListener("click", async (e) => {
                let mealId = $(btn).find("*").filter(".MealId").text()

                // method get full meal Details

                let mealDetails = await this.getFullMealDetails(mealId)
                let result = await this.displayFullMealDetails(mealDetails)


            })

        })
        $(".loading").fadeOut(500)
    }
    async displayIngredient(geatIngredient) {
        $(".loading").fadeIn(200)


        let data = geatIngredient.meals
        let tank = ""
        for (let i = 0; i < 20; i++) {
            tank += `
             <div class="col-Ingredient text-center col-lg-3 col-md-4 col-sm-6 mb-3">
                        <div class=" text-center area-icon">
                            <i class="fa-solid fa-drumstick-bite"></i>
                        </div>
                        <h3 class="MealName">${data[i].strIngredient}</h3>
                        <p>${data[i].strDescription.slice(0, 100)}</p>
                    </div>
            `
        }
        $(IngredientSection).attr("class", "d-inline");
        $(MealsForOneIngredientId).attr("class", "d-none");
        $(MealDetailsForIngredientId).attr("class", "d-none");

        IngredientRow.innerHTML = tank;
        let btns = document.querySelectorAll(".col-Ingredient")
        btns.forEach((btn) => {
            btn.addEventListener("click", async (e) => {
                let MealName = $(btn).find(".MealName").text()

                let MealsForOneIngredient = await this.getAllMealsForThisIngredient(MealName)
                let mealDetails = await this.displayMealsForOneIngredient(MealsForOneIngredient)
                return mealDetails
            })

        })
        $(".loading").fadeOut(500)


    }
}
IngredientLink.addEventListener("click", async function () {
    startApp()
    $(SuperSearch).attr("class", "d-none");
    $(SuperArea).attr("class", "d-none");
    $(SuperCategory).attr("class", "d-none");
    $(SuperIngredient).attr("class", "d-inline");
    $(SuperContactUs).attr("class", "d-none");

    let objIngredient = new Ingredient()
    let geatIngredient = await objIngredient.getAllIngredient()
    let mealDetails = objIngredient.displayIngredient(geatIngredient)



})

//    ContactUs     
ContactUsLink.addEventListener("click", async function () {
    startApp()
    $(SuperSearch).attr("class", "d-none");
    $(SuperArea).attr("class", "d-none");
    $(SuperCategory).attr("class", "d-none");
    $(SuperIngredient).attr("class", "d-none");
    $(SuperContactUs).attr("class", "d-inline");
    $(contactUs).attr("class", "d-inline");

})



function startApp() {

    reloadWindow()
    let sliderMenuWidth = $(".slider-menu").outerWidth(true);
    let closeWidth = $(".close").outerWidth(true);
    $(".slider-menu").animate({ "left": `${closeWidth - sliderMenuWidth}` }, 10)

}
  function reloadWindow() {
   
    
    $(window).on("load", async() => {
        
        let objSearch = new Search()
        $(MealDetailsForSearchId).attr("class", "d-inline");
        let mealName = $(SearchByName).val()
        let response = await objSearch.getAllMealsForSearchByName(mealName)
        await objSearch.displayMeals(response)

        setTimeout(() => {
            $(".loading").fadeOut(500)
        }, 500);
    })
}
startApp()

$(".icon-close").click(function (e) {
    let sliderMenuWidth = $(".slider-menu").outerWidth(true);
    let sliderMenuleft = $(".slider-menu").css("left");
    let closeWidth = $(".close").outerWidth(true);
    if (sliderMenuleft == "0px") {


        $(".anchors").animate(100, () => {
            $(".anchors").removeClass(" animate__fadeInUpBig")
            $(".anchors").addClass("animate__animated animate__fadeOutDown")
        })

        $(".icon-close i").removeClass("fa-solid fa-xmark fs-1")
        $(".icon-close i").addClass("fa-solid fa-bars fs-1")
        $(".slider-menu").animate({ "left": `${closeWidth - sliderMenuWidth}` }, 10)
    }


    else {

        $(".anchors").animate(100, () => {
            $(".anchors").addClass("animate__animated animate__fadeInUpBig")
            $(".anchors").removeClass(" animate__fadeOutDown")
        })


        $(".icon-close i").removeClass("fa-solid fa-bars fs-1")
        $(".icon-close i").addClass("fa-solid fa-xmark fs-1")
        $(".slider-menu").animate({ "left": "0px" }, 10)
    }
});

$("#NameInput,#EmailInput,#PhoneInput,#ageInput,#passwordInput,#RepasswordInput").keyup(function (e) {
    validFormData()
    var inputCount = $("#form").find("input").filter(".is-valid")

    if (inputCount.length == 6) {
        $(SubmitForm).removeClass("disabled");
    }
    else {
        $(SubmitForm).addClass("disabled");
    }
});

// AllForm Valid when click button Start_Quiz and After Fetch Api
function isDataValid() {
    return /^[A-Za-z]+$/.test(NameAlert.value) &&
        /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(EmailAlert.value) &&
        /^\+?(\d{1,3})?[-. (]?(\d{3})[-. )]?(\d{3})[-. ]?(\d{4})$/.test(PhoneAlert.value) &&
        /^(?:1[01][0-9]|120|[1-9]?[0-9])$/.test(ageAlert.value) &&
        /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/.test(passwordAlert.value) &&
        /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/.test(RepasswordAlert.value);
}
// AllForm Valid when click button Start_Quiz
function validFormData() {
    if (/^[A-Za-z]+$/.test(NameInput.value)) {
        NameAlert.classList.add("d-none")
        NameInput.classList.add("is-valid")
        NameInput.classList.remove("is-invalid")
    }
    else {
        NameAlert.classList.remove("d-none")
        NameInput.classList.remove("is-valid")
        NameInput.classList.add("is-invalid")

    }

    if (/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(EmailInput.value)) {
        EmailAlert.classList.add("d-none")
        EmailInput.classList.add("is-valid")
        EmailInput.classList.remove("is-invalid")
    }
    else {
        EmailAlert.classList.remove("d-none")
        EmailInput.classList.remove("is-valid")
        EmailInput.classList.add("is-invalid")

    }

    if (/^\+?(\d{1,3})?[-. (]?(\d{3})[-. )]?(\d{3})[-. ]?(\d{4})$/.test(PhoneInput.value)) {
        PhoneAlert.classList.add("d-none")
        PhoneInput.classList.add("is-valid")
        PhoneInput.classList.remove("is-invalid")
    }
    else {
        PhoneAlert.classList.remove("d-none")
        PhoneInput.classList.remove("is-valid")
        PhoneInput.classList.add("is-invalid")

    }

    if (/^(?:1[01][0-9]|120|[1-9]?[0-9])$/.test(ageInput.value)) {
        ageAlert.classList.add("d-none")
        ageInput.classList.add("is-valid")
        ageInput.classList.remove("is-invalid")
    }
    else {
        ageAlert.classList.remove("d-none")
        ageInput.classList.remove("is-valid")
        ageInput.classList.add("is-invalid")

    }

    if (/^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/.test(passwordInput.value)) {
        passwordAlert.classList.add("d-none")
        passwordInput.classList.add("is-valid")
        passwordInput.classList.remove("is-invalid")
    }
    else {
        passwordAlert.classList.remove("d-none")
        passwordInput.classList.remove("is-valid")
        passwordInput.classList.add("is-invalid")

    }

    if (/^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/.test(RepasswordInput.value)) {
        RepasswordAlert.classList.add("d-none")
        RepasswordInput.classList.add("is-valid")
        RepasswordInput.classList.remove("is-invalid")
    }
    else {
        RepasswordAlert.classList.remove("d-none")
        RepasswordInput.classList.remove("is-valid")
        RepasswordInput.classList.add("is-invalid")

    }

}


