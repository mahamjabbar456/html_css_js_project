const btnEl = document.getElementById("btn");
const birthdayEl = document.getElementById("birthday");
const resultEl = document.getElementById("result");

function calculateAge(){
    const birthday = birthdayEl.value;
    console.log(birthday)
    if(birthday === ""){
        alert("Enter your birthday date");
    }
    else{
        year = ageCalculate(birthday);
        if(year < 1){
            const monthDate = new Date(year);
            const date = new Date();
            year = date.getMonth() - monthDate.getMonth();
            resultEl.innerHTML = `Your age is ${year} months.`;
        }else{
            resultEl.innerHTML = `Your age is ${year} years.`;
        }
    }
}

function ageCalculate(birthday){
    const now = new Date();
    const birthdayValue = new Date(birthday);
    let age = now.getFullYear() - birthdayValue.getFullYear();
    const month = now.getMonth() - birthdayValue.getMonth();
    if(month<0 || (month==0 && now.getDate()<birthdayValue.getDate())){
        age--;
    }else{
        
    }
    return age;
}

btnEl.addEventListener("click",calculateAge)