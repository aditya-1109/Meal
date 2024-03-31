const listEl=document.getElementById("list-meal");
let items=JSON.parse(localStorage.getItem('favourite'));
items.forEach((e)=>{
let list=document.createElement("li");
list.classList.add("list-item");
    let element=document.createElement("h3");
    element.textContent=e;
    element.classList.add("name");
    list.appendChild(element);
    list.addEventListener("click",()=>{
        let name=element.textContent;
        localStorage.setItem("name",name);
        window.location.href="meal-Detail.html";
    });

listEl.appendChild(list);
});
localStorage.setItem("favourite",JSON.stringify(items) );

// reload button event
const reload=document.getElementById("reload");
reload.addEventListener("click", ()=>{
    let listName=[];
    localStorage.setItem("favourite",JSON.stringify(listName));
    window.location.href="meal-favourite.html";
})