const searchBarEl = document.querySelector(".search-bar");
const magnifierEl = document.querySelector(".magnifier");

magnifierEl.addEventListener("click",()=>{
    searchBarEl.classList.toggle("active");
})