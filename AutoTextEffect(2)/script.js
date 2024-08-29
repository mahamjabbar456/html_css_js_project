const containerEl = document.querySelector(".container");


const careers = ["dolor sit amet consectetur adipisicing elit. Temporibus dolor eveniet harum esse quia officiis praesentium maiores deleniti, placeat quibusdam consectetur aspernatur neque soluta quaerat exercitationem quis eaque minima aliquam."]

let careerIndex = 0;
let characterIndex = 0;

updateText();

// function updateText(){
//     containerEl.innerHTML = `
//     <h1>I am a ${careers[careerIndex].slice(0,characterIndex)}</h1>
//     `;
//     characterIndex++;
//     if(characterIndex === careers[careerIndex].length){
//         careerIndex++;
//         characterIndex = 0;
//     }
//     setTimeout(updateText, 400);
// }

// text control in paragraph
function updateText(){
    containerEl.innerHTML = `        
    <h1>Lorem ipsum ${careers[careerIndex].slice(0,characterIndex)}</h1>

    `;
    characterIndex++;
    setTimeout(updateText, 100);
}