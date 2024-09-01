const startEl = document.getElementById("start")
const stopEl = document.getElementById("stop")
const resetEl = document.getElementById("reset")
const timerEl = document.getElementById("timer");

let interval;

// I can access time directly from html by this method.
let time = timerEl.innerText.split(":");
let timeLeft = time[0]*60;


function updateTimer(){
    minutes = Math.floor(timeLeft / 60);
    seconds = Math.floor(timeLeft % 60);
    formatedData = `${minutes.toString().padStart(2,"0")}:${seconds.toString().padStart(2,"0")}`;
    timerEl.innerHTML = formatedData;
}

function startTimer(){
    interval = setInterval(() => {      
        timeLeft--;
        updateTimer();
        if(timeLeft === 0){
            clearInterval(interval);
            alert("Time is up!");
            timeLeft = time[0]*60;
            updateTimer();
        }
    }, 1000);
}

function stopTimer(){
    clearInterval(interval);
}

function resetTimer(){
    clearInterval(interval)
    timeLeft = time[0]*60;
    updateTimer();
}

startEl.addEventListener("click",startTimer);
stopEl.addEventListener("click",stopTimer);
resetEl.addEventListener("click",resetTimer);