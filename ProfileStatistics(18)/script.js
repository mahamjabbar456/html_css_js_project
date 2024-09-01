const countersEl = document.querySelectorAll(".counter");

countersEl.forEach(counterEl =>{
    counterEl.innerText = "0";
    function incrementCounter(){
        let currNum = +counterEl.innerText;
        const dataCeil = counterEl.getAttribute("data-ceil");
        const increment = dataCeil / 15;
        currNum = Math.ceil(currNum + increment);
        if(currNum < dataCeil){
            counterEl.innerText = currNum;
            setTimeout(incrementCounter,50);
        }else{           
            counterEl.innerText = dataCeil;
        }
    }
    incrementCounter();
})