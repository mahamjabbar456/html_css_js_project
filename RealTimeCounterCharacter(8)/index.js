const textAreaEl = document.getElementById("textarea");
const totalEl = document.getElementById("total");
const remainingEl = document.getElementById("remaining");

textAreaEl.addEventListener("keyup",()=>{
     updateCounter();
});

updateCounter();

function updateCounter(){
    totalEl.innerText = textAreaEl.value.length;
    remainingEl.innerText = textAreaEl.getAttribute("maxlength") - textAreaEl.value.length;
}