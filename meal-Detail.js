const contentEl=document.getElementById("content");

// get the details
const details=((meal)=>{
    let img=document.createElement("img");
    img.src=meal.strMealThumb;
    img.classList.add("image");
    let name=document.createElement("h2");
    name.textContent=meal.strMeal;
    name.classList.add("name");
    let instruction=document.createElement("p");
    instruction.textContent=meal.strInstructions;
    instruction.classList.add("instruction");
    let imageDiv=document.createElement("div");
    imageDiv.classList.add("imageDiv");
    imageDiv.appendChild(img);
    imageDiv.appendChild(name);
    contentEl.appendChild(imageDiv);
    contentEl.appendChild(instruction);
});

// fetch the data
async function fetchData(input){
    const response=await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${input}`);
    const {meals}= await response.json();
    return meals;
}

// get the input from the homepage
let input=localStorage.name;

const meal=await fetchData(input);
meal.forEach(details);
