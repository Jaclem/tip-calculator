const inputBill = document.getElementById('bill');
const inputPeople = document.getElementById('number-of-people');
const inputCustom = document.getElementById('custom');
const error = document.getElementById('error-msg-ppl');
const percentages = document.querySelectorAll('.buttons');
const tipText = document.getElementById('tip-amount');
const totalText = document.getElementById('tip-total');
const resetBtn = document.getElementById('reset');
let totalTip = 0;
let totalBill = 0;
let tip = 0;
let customTip = 0;

// function that works when page is loaded to focus on the Bill form and if it is left empty it 
// lets the user know they cannot leave this field blank
window.onload = () => {   
    inputBill.focus();
}

inputCustom.addEventListener('input', ()=>{
    customTip = inputCustom.value / 100;
    // percentage.classList.remove('clicked');

    if(inputBill.value != '' && inputPeople.value != ''){
        totalTip = inputBill.value * customTip / inputPeople.value;
        totalBill = inputBill.value / inputPeople.value + totalTip;

        tipText.innerText = totalTip.toFixed(2);
        totalText.innerText = totalBill.toFixed(2);
    }
});

inputBill.addEventListener('input', (e)=>{
    if(inputPeople.value != ''){
        totalTip = inputBill.value * customTip / inputPeople.value;
        totalBill = inputBill.value / inputPeople.value + totalTip;

        tipText.innerText = totalTip.toFixed(2);
        totalText.innerText = totalBill.toFixed(2);
    }
});

inputPeople.addEventListener('input', ()=>{

    if(inputBill.value != ''){
        totalTip = inputBill.value * customTip / inputPeople.value;
        totalBill = inputBill.value / inputPeople.value + totalTip;

        tipText.innerText = totalTip.toFixed(2);
        totalText.innerText = totalBill.toFixed(2);
    }
});




percentages.forEach(percentage => {
    // removes input from custom percent input if clicked
    percentage.addEventListener('click', () =>{
        inputCustom.value = '';
        (document.querySelector('.clicked')) ? document.querySelector('.clicked').classList.remove('clicked') : '';
        percentage.classList.add('clicked');
    })

    // calculations
    percentage.addEventListener('click', (e) => {
        // based on: https://travis.media/how-to-add-and-remove-a-class-from-list-items-with-pure-javascript/
        (document.querySelector('.clicked')) ? document.querySelector('.clicked').classList.remove('clicked') : '';
        percentage.classList.add('clicked');

        // sets variable tip to the value of the ID divided by 100 giving percentage
        tip = e.target.id / 100;

        // calculates the totals if both input fields are filled in
        if(inputBill.value == '' || inputPeople.value == ''){

        } else {
            totalTip = inputBill.value * tip / inputPeople.value;
            totalBill = inputBill.value / inputPeople.value + totalTip;

            tipText.innerText = totalTip.toFixed(2);
            totalText.innerText = totalBill.toFixed(2);
        }


        // thanks to this article https://data-flair.training/blogs/javascript-event-types/
        inputBill.addEventListener('input', (e)=>{
            if(inputPeople.value != ''){
                totalTip = inputBill.value * tip / inputPeople.value;
                totalBill = inputBill.value / inputPeople.value + totalTip;

                tipText.innerText = totalTip.toFixed(2);
                totalText.innerText = totalBill.toFixed(2);
            }
        });

        inputPeople.addEventListener('input', ()=>{

            if(inputBill.value != ''){
                totalTip = inputBill.value * tip / inputPeople.value;
                totalBill = inputBill.value / inputPeople.value + totalTip;

                tipText.innerText = totalTip.toFixed(2);
                totalText.innerText = totalBill.toFixed(2);
            }
        });

        // resets the entire page
        resetBtn.addEventListener('click', ()=> {
            inputBill.value = '';
            inputPeople.value = '';
            inputCustom.value = '';
            percentage.classList.remove('clicked');
            tipText.innerText = '$0.00';
            totalText.innerText = '$0.00';
            inputBill.style.border = 'none';
            inputPeople.style.border = 'none';
        });
    });
});


// adds a green border if the value is not empty
inputBill.addEventListener('blur', (e) => {
    if(e.target.value != ''){
        e.target.style.border = "2px solid green";
    }   
});

inputPeople.addEventListener('blur', (e)=>{
    if(e.target.value != ''){
        e.target.style.border = "2px solid green";
    }
});

// resets the entire page
resetBtn.addEventListener('click', ()=> {
    inputBill.value = '';
    inputPeople.value = '';
    inputCustom.value = '';
    // percentage.classList.remove('clicked');
    tipText.innerText = '$0.00';
    totalText.innerText = '$0.00';
    inputBill.style.border = 'none';
    inputPeople.style.border = 'none';
});

