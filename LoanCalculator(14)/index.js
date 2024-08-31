function LoanCalculator(){
    const loanAmountEl = document.getElementById("loan-amount").value;
    const interestRateEl = document.getElementById("interest-rate").value;
    const monthEl = document.getElementById("month").value;
    interestAmount = (loanAmountEl * (interestRateEl/0.01))/monthEl;
    monthlyPayment = (loanAmountEl/monthEl + interestAmount).toFixed(2);

    document.getElementById("month-payment").innerHTML = `Monthly Payment : ${monthlyPayment}`;
}

