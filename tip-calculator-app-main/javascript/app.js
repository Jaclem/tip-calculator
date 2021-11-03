
window.onload = function() {
    const input = document.getElementById('bill').focus();
}

function detect(tip) {
    const people = document.getElementById("number-of-people");


    // Treats the reset button as a clickable value that will execute the calculate function when clicked.
    const reset = document.getElementById('reset').addEventListener("click", calculate);

    function calculate() {
        const billAmount = document.getElementById('bill').value;
        const customTip = document.getElementById('custom').value;
        const amountOfPeople = document.getElementById('number-of-people').value;

        let tipPrice = billAmount * tip / amountOfPeople;
        // + directly infront of the variable keeps it a number value rather than a string.
        let tipTotal = +billAmount + +tipPrice;
    
        // grabs the default $0.00 and adds the tipPrice element to it when reset is clicked.
        document.getElementById('tip-amount').innerText = "$" + tipPrice.toFixed(2);
        document.getElementById('tip-total').innerText = "$" + tipTotal.toFixed(2);
    }
}




