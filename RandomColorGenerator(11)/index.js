const containerEl = document.querySelector(".container");

for (let index = 0; index < 30; index++) {
    const colorcontainerEl = document.createElement("div");
    colorcontainerEl.classList.add("color-container");
    containerEl.appendChild(colorcontainerEl);
}

const colorContainerEls = document.querySelectorAll(".color-container");

function generateColor(){
    colorContainerEls.forEach((colorcontainerEl)=>{
        const newColorCode = randomColor();
        colorcontainerEl.style.background = "#" + newColorCode;
        colorcontainerEl.innerText = "#" + newColorCode;
    })
}

generateColor();

function randomColor(){
    const char = "0123456789abcdef";
    const codeLength = 6;
    let colorCode = "";
    for (let index = 0; index < codeLength; index++) {
        randomNum = Math.floor(Math.random()*char.length);
        colorCode += char.substring(randomNum,randomNum +1);
    }
    return colorCode
}

