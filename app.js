const searchFood=()=>{
     const searchField=document.getElementById("search-field");
     const searchText= searchField.value;
  //    console.log(searchText);
     searchField.value="";
  
       const url=`https://www.themealdb.com/api/json/v1/1/search.php?s=${searchText}`;
       fetch(url)
       .then(res=>res.json())
       .then(data=>displaySearchResult(data.meals))
     
  
     
  }
  searchFood();
  // searchFood.inner='';
  const displaySearchResult=meals=>{
    
       // console.log(meals);
       const searchResult=document.getElementById("search-result");
       const mealLength=document.getElementById("meal-length");
       mealLength.innerText="Search Result- " +meals.length;
       searchResult.innerHTML="";
       if(meals.length==0){
  
       }else{
  
       }
       meals.forEach(meal=>{
            const div=document.createElement('div');
            div.classList.add('col');
            div.innerHTML=`
            <div  class="card h-100 shadow-sm border border-0">
           <img  src="${meal.strMealThumb}" class="card-img-top img-fluid" alt="...">
           <div class="card-body">
             <h2 class="card-title fw-bold border-bottom border-dark">${meal.strMeal}</h2>
             <p class="card-text">${meal.strInstructions.slice(0,150)}...</p>
             <button onclick='loadMealDetail(${meal.idMeal})' type="button" class="btn btn-dark">Details</button>
  
           </div>
         </div>
            `
            searchResult.appendChild(div);
            // console.log(meal);
       })
  }
  
  const loadMealDetail=mealId=>{
       console.log(mealId);
       const url=`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${mealId}
  
       `
       fetch(url)
       .then(res=>res.json())
       .then(data=>displayMealDetail(data.meals[0]))
  }
  const displayMealDetail=meal=>{
  console.log(meal);
  const mealDetails=document.getElementById('meal-details');
  mealDetails.textContent="";
  const div=document.createElement('div');
  div.classList.add('card');
  div.innerHTML=`
  <img width="40%" height="auto" src="${meal.strMealThumb}" class="card-img-top img-fluid"  alt="...">
            <div class="card-body">
            <hr>
              <h2 class="card-title fw-bold">${meal.strMeal}</h2>
              <hr>
              <p class="card-text">Details: ${meal.strInstructions}</p>  <hr>
              <p class="card-text">Name: ${meal.strMeal}</p>  <hr>
              <p class="card-text">Category: ${meal.strCategory}</p>      <hr>
              <p class="card-text">StrArea: ${meal.strArea}</p>   <hr>   
              <p class="card-text">Tags: ${meal.strTags}</p>    <hr>  
              <p class="card-text">Video Link: ${meal.strYoutube}</p>     <hr> 
              <p class="card-text">Matarils: ${meal.strIngredient1}, ${meal.strIngredient2}, ${meal.strIngredient3}, ${meal.strIngredient4}, ${meal.strIngredient5}, ${meal.strIngredient6}, ${meal.strIngredient7}, ${meal.strIngredient8}</p>     <hr> 
              <a href="${meal.strYoutube}" class="btn btn-dark">Video</a>
            </div>
  `
  mealDetails.appendChild(div)
  }