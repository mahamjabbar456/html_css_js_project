const dayEl = document.getElementById("days");
const hourEl = document.getElementById("hours");
const minuteEl = document.getElementById("minutes");
const secondEl = document.getElementById("seconds");

const date = new Date("Jan 1,2025 00:00:00").getTime();

function updateCounter(){
    const now = new Date().getTime();
    const gap = date - now;
    
    const second = 1000;
    const minute = second * 60;
    const hour = minute * 60;
    const day = hour * 24;

    let d = Math.floor(gap/day);
    let h = Math.floor((gap%day)/hour);
    let m = Math.floor((gap%hour)/minute);
    let s = Math.floor((gap%minute)/second);

    d = d < 10 ? "0" + d : d;
    h = h < 10 ? "0" + h : h;
    m = m < 10 ? "0" + m : m;
    s = s < 10 ? "0" + s : s;

    dayEl.innerText = d;
    hourEl.innerText = h;
    minuteEl.innerText = m;
    secondEl.innerText = s;
    setTimeout(() => {
        updateCounter();
    }, 1000);
}

updateCounter();