const inputBox=document.getElementById("search");
const searchButton=document.getElementById("enter");
const contentEl=document.getElementById("content");

const store=localStorage.getItem('favourite');
    let listName;
    if(store== null){
        listName=[]
    }else{
        listName=JSON.parse(store);
    }

// searching the item
async function searchMeal(){
    contentEl.textContent="";

async function fetchData(input){
    const response=await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${input}`);
    const {meals}= await response.json();
    return meals;
}

const value=inputBox.value.trim();

if(value){
    const meal=await fetchData(value);

    if(!meal){
        alert("Meal is not found");
    }else{
    meal.forEach(showInfo);
    }
    }
}

searchButton.addEventListener("click",searchMeal);

// show the information of the item
const showInfo=(meal)=>{
    let mealIcon=document.createElement("div");
    mealIcon.classList.add("mealIcon");
    let mealElement=document.createElement("div");
    mealElement.classList.add("meal-element");
    let mealName=document.createElement("h2");
    mealName.textContent=meal.strMeal;
    mealName.classList.add("meal-name");
    let mealImg=document.createElement("img");
    mealImg.src=meal.strMealThumb;
    mealImg.classList.add("meal-image");
    mealElement.appendChild(mealImg);
    mealElement.appendChild(mealName);
    mealElement.addEventListener("click",()=>{
        let name=mealName.textContent;
        localStorage.setItem("name",name);
        window.location.href="meal-Detail.html";
    });
    mealIcon.appendChild(mealElement);

    
    // Add Button
    let addButton=document.createElement("button");
    addButton.textContent="Add to Favourite";
    addButton.classList.add("add-button");
    addButton.addEventListener("click",()=>{
        listName.push(mealName.textContent);
        localStorage.setItem("favourite",JSON.stringify(listName) );
        alert("Added to My Favourites List");
    });
    
    mealIcon.appendChild(addButton);
    contentEl.appendChild(mealIcon);
}