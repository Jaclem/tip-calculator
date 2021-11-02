
// let percentages = document.getElementById('5').addEventListener("click", calculate);
let percentages = document.querySelectorAll('li a');


 
// for loop creates a variable percentage that loops through and adds the event listener to
// each a tag belonging to the variable percentages
for (let percentage of percentages) {
    percentage.addEventListener('click', detect, false);

    function detect() {
        return tipAmount = percentage.id / 100; // divides the id percentage value by 100 giving the decimal value needed to calculate
    }

}


// Treats the reset button as a clickable value that will execute the calculate function when clicked.
const reset = document.getElementById('reset').addEventListener("click", calculate);

function calculate() {
    const billAmount = document.getElementById('bill').value;
    const customTip = document.getElementById('custom').value;
    const amountOfPeople = document.getElementById('number-of-people').value;

    let tip = detect();
    let tipPrice = billAmount * tip / amountOfPeople;
    console.log(tipPrice.toFixed(2));
}