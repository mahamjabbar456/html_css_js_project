const bodyEl = document.querySelector("body");
const inputEl = document.querySelector(".input");

inputEl.checked = JSON.parse(localStorage.getItem("mood"));

inputEl.addEventListener("input",()=>{
    updateBody();
    updateLocalStorage();
})

updateBody();

function updateBody(){
    if(inputEl.checked){
        bodyEl.style.background = "black";
    }
    else{
        bodyEl.style.background= "white";
    }
}

function updateLocalStorage() {
    localStorage.setItem("mood",JSON.stringify(inputEl.checked));
}