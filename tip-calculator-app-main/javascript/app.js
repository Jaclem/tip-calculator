const inputBill = document.getElementById('bill');
const inputPeople = document.getElementById('number-of-people');
const inputCustom = document.getElementById('custom');
const error = document.getElementById('error-msg-ppl');
const errorBill = document.getElementById('error-msg');
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

    if(parseInt(inputPeople.value) > 0 && parseFloat(inputBill.value) > 0 && parseInt(inputCustom.value) > 0){

        totalTip = parseFloat(inputBill.value) * customTip / parseInt(inputPeople.value);
        totalBill = parseFloat(inputBill.value) / parseInt(inputPeople.value) + totalTip;

        tipText.innerText = totalTip.toFixed(2);
        totalText.innerText = totalBill.toFixed(2);
    } else {

    }

    // adds reset button functionality if input is true
    if(inputCustom.value != ''){
        resetBtn.classList.add('btn-color');
    }
    else if(inputCustom.value == ''){
        resetBtn.classList.remove('btn-color');
    }
});

inputBill.addEventListener('input', ()=>{
    
    if(parseInt(inputPeople.value) > 0 && parseFloat(inputBill.value) > 0 && parseInt(inputCustom.value) > 0){
        totalTip = parseFloat(inputBill.value) * customTip / parseInt(inputPeople.value);
        totalBill = parseFloat(inputBill.value) / parseInt(inputPeople.value) + totalTip;

        tipText.innerText = totalTip.toFixed(2);
        totalText.innerText = totalBill.toFixed(2);
    } else {

    }

    // adds reset button functionality if input is true
    if(inputBill.value != ''){
        resetBtn.classList.add('btn-color');
    }
    else if(inputBill.value == '' && inputPeople.value == ''){
        resetBtn.classList.remove('btn-color');
    }
});

// checks if there is an input for Bill and if not it throws an error
inputBill.addEventListener('blur', ()=>{
    if(inputBill.value == ''){
        errorBill.innerText = "Can't be zero";
        errorBill.classList.add('visibility');
    }

    if(inputBill.value != ''){
        errorBill.classList.remove('visibility');
    }
});

// checks if the Bill amount is negative and so not it throws an error
inputBill.addEventListener('blur', ()=>{
    if(parseInt(inputBill.value) < 0){
        errorBill.innerText = "Can't be negative";
        errorBill.classList.add('visibility');
    }

    if(parseInt(inputBill.value) > 0){
        errorBill.classList.remove('visibility');
    }
});

inputPeople.addEventListener('input', ()=>{

    if(parseFloat(inputBill.value) > 0 && parseInt(inputPeople.value) > 0 && parseInt(inputCustom.value) > 0){
        totalTip = parseFloat(inputBill.value) * customTip / parseInt(inputPeople.value);
        totalBill = parseFloat(inputBill.value) / parseInt(inputPeople.value) + totalTip;

        tipText.innerText = totalTip.toFixed(2);
        totalText.innerText = totalBill.toFixed(2);
    } else {

    }

    // adds reset button functionality if input is true
    if(inputPeople.value != ''){
        resetBtn.classList.add('btn-color');
    }
    else if(inputPeople.value == '' && inputBill.value == ''){
        resetBtn.classList.remove('btn-color');
    }
});

// checks if there is an input for Number of People and if not it throws an error
inputPeople.addEventListener('blur', ()=>{
    if(inputBill.value != ''){
        error.innerText = "Can't be zero";
        error.classList.add('visibility');
    }

    if(inputPeople.value != ''){
        error.classList.remove('visibility');
    }

    if(parseInt(inputPeople.value) < 0){
        error.innerText = "Can't be negative";
        error.classList.add('visibility');
    }
});


percentages.forEach(percentage => {
    // removes input from custom percent input if clicked
    percentage.addEventListener('click', () =>{
        inputCustom.value = '';
        (document.querySelector('.clicked')) ? document.querySelector('.clicked').classList.remove('clicked') : '';
        percentage.classList.add('clicked');
    });

    inputCustom.addEventListener('input', () =>{
        percentage.classList.remove('clicked');
    });

    // adds reset button functionality if input is true
    percentage.addEventListener('click', () =>{
        resetBtn.classList.add('btn-color');
    }); 

    // calculations
    percentage.addEventListener('click', (e) => {
        // based on: https://travis.media/how-to-add-and-remove-a-class-from-list-items-with-pure-javascript/
        (document.querySelector('.clicked')) ? document.querySelector('.clicked').classList.remove('clicked') : '';
        percentage.classList.add('clicked');

        // sets variable tip to the value of the ID divided by 100 giving percentage
        tip = e.target.id / 100;

        // calculates the totals if both input fields are filled in
        if(inputBill.value == '' || inputPeople.value == ''){

        }

        if(parseFloat(inputBill.value) > 0 && parseInt(inputPeople.value) > 0){
            totalTip = inputBill.value * tip / inputPeople.value;
            totalBill = inputBill.value / inputPeople.value + totalTip;

            tipText.innerText = totalTip.toFixed(2);
            totalText.innerText = totalBill.toFixed(2);
        }


        // thanks to this article https://data-flair.training/blogs/javascript-event-types/
        inputBill.addEventListener('input', ()=>{
            if(parseFloat(inputBill.value) > 0 && parseInt(inputPeople.value) > 0){
                totalTip = inputBill.value * tip / inputPeople.value;
                totalBill = inputBill.value / inputPeople.value + totalTip;

                tipText.innerText = totalTip.toFixed(2);
                totalText.innerText = totalBill.toFixed(2);
            }
        });

        // checks if the Bill amount is negative and so not it throws an error
        inputBill.addEventListener('blur', ()=>{
            if(parseInt(inputBill.value) < 0){
                errorBillNeg.classList.add('visibility');
            }

            if(parseInt(inputBill.value) > 0){
                errorBillNeg.classList.remove('visibility');
            }
        });

        inputPeople.addEventListener('input', ()=>{

            if(parseFloat(inputBill.value) > 0 && parseInt(inputPeople.value) > 0){
                totalTip = inputBill.value * tip / inputPeople.value;
                totalBill = inputBill.value / inputPeople.value + totalTip;

                tipText.innerText = totalTip.toFixed(2);
                totalText.innerText = totalBill.toFixed(2);
            }
        });

        // checks if the Number of People amount is negative and so not it throws an error
        inputPeople.addEventListener('blur', ()=>{
            if(parseInt(inputPeople.value) < 0){
                errorNeg.classList.add('visibility');
            }

            if(parseInt(inputPeople.value) > 0){
                errorNeg.classList.remove('visibility');
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
            resetBtn.classList.remove('btn-color');
            error.classList.remove('visibility');
            errorBill.classList.remove('visibility');
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
    tipText.innerText = '$0.00';
    totalText.innerText = '$0.00';
    inputBill.style.border = 'none';
    inputPeople.style.border = 'none';
    resetBtn.classList.remove('btn-color');
    error.classList.remove('visibility');
    errorBill.classList.remove('visibility');
});

