const containerEl = document.querySelector(".image-container");

const btnEl = document.querySelector(".btn")

btnEl.addEventListener("click", () => {
    imageNum = 6;
    LoadImages();
    // const addNewImage = document.createElement("img")
})

function LoadImages() {
    console.log("Hello")
    for (let index = 0; index < imageNum; index++) {
        const addNewImage = document.createElement("img");
        addNewImage.src = `https://picsum.photos/300?random=${Math.floor(Math.random() * 2000)}`;   
        containerEl.append(addNewImage);
        // console.log(addNewImage)
    }

}