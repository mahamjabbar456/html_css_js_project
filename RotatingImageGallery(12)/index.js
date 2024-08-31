const imageContainerEl = document.querySelector(".image-container");

let x = 0;

const prevEl = document.getElementById("prev");
const nextEl = document.getElementById("next");

let timer;

prevEl.addEventListener("click",()=>{
    x = x + 45;
    clearTimeout(timer);
    updateGallery();
});

nextEl.addEventListener("click",()=>{
    x = x - 45;
    clearTimeout(timer);
    updateGallery();
});

function updateGallery(){
    imageContainerEl.style.transform = `perspective(1000px) rotateY(${x}deg)`;
    timer = setTimeout(()=>{
        x = x-45;
        updateGallery();
    },1000)
}

updateGallery();