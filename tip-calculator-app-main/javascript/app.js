const inputBill = document.getElementById('bill');
const billAmount = Number(document.getElementById('bill').value);
const inputPeople = document.getElementById('number-of-people');
const peopleAmount = Number(document.getElementById('bill').value);
const inputCustom = document.getElementById('custom');
const customAmount = Number(document.getElementById('custom').value);
const error = document.getElementById('error-msg');
const percentages = document.querySelectorAll('.buttons');


// function that works when page is loaded to focus on the Bill form and if it is left empty it 
// lets the user know they cannot leave this field blank
window.onload = () => {   
    inputBill.focus();
}

percentages.forEach(percentage => {
    percentage.addEventListener('click', (e)=>{
        e.target.classList.add('clicked');
    })
})


// event listeners //

// checks if the input is not focused and fires event if the input remains empty.
inputBill.addEventListener('blur', (e) => {
    if(e.target.value != ''){
        e.target.style.border = "2px solid green";
    }   
})

inputPeople.addEventListener('blur', (e)=>{
    if(e.target.value != ''){
        e.target.style.border = "2px solid green";
    }
})

// calculations //
