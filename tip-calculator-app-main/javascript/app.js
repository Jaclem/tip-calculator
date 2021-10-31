
let percentages = document.querySelectorAll('li a').addEventListener("click", includePercentage);

function includePercentage() {
    let x = percentages.innerHTML;
    console.log(x);
}


// Treats the reset button as a clickable value that will execute the calculate function when clicked.
const reset = document.getElementById('reset').addEventListener("click", calculate);

function calculate(){
    // The variables that store the values need to be in this function to work.
    const billAmount = document.getElementById('bill').value;
    const customTip = document.getElementById('custom').value;
    const amountOfPeople = document.getElementById('number-of-people').value;

    console.log(billAmount);
}