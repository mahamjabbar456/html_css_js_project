const testimonials = [{
    name:"Emily Johnson",
    photo:"https://images.unsplash.com/photo-1672863601285-253fc82db868?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    text:"I am incredibly impressed with the sleek design and high performance of my new Macbook. It has truly enhanced my productivity and made my daily tasks a breeze. Thank you for creating such an exceptional laptop"
},{
    name:"Alexa Johnson",
    photo:"https://images.unsplash.com/photo-1678286742832-26543bb49959?q=80&w=1376&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    text:"I am beyond impressed with the Macbook laptop I purchased. The sleek design and lightning-fast speed have truly enhanced my work efficiency. Macbook has exceeded all my expectations and I highly recommend it to anyone in need of a reliable laptop."
},{
    name:"Johnson",
    photo:"https://images.unsplash.com/photo-1639149888905-fb39731f2e6c?q=80&w=1528&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    text:"I am extremely satisfied with my Macbook laptop purchase. The sleek design and impressive performance exceed my expectations. Macbook's reliability and user-friendly interface make it a top choice for professionals and students alike."
}]

const imageEl = document.querySelector("img");
const textEl = document.querySelector(".text");
const usernameEl = document.querySelector(".username");
console.log(textEl);

let index = 0;

function updateTestimonial(){
    imageEl.src = testimonials[index].photo;
    textEl.innerText = testimonials[index].text;
    usernameEl.innerText = testimonials[index].name;
    index++;
    if(index == testimonials.length){
        index = 0;
    }
    setTimeout(()=>{
        updateTestimonial();
    },10000);
}
updateTestimonial();