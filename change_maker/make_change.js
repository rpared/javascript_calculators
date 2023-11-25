//This function will allow $(selector) to replace all DOM references
const $ = selector => document.querySelector(selector);

//Function to process user input
let processEntry = () =>{
 let cents = parseFloat($('#cents').value);
//Validator
    if (cents <= 0 || cents > 99 || isNaN(cents)){
    alert("ERROR: Entered number must be > 0 and < 99 cents")
    return; 
    }else {
    makeChange(cents);
    }
} 
//Function to calculate change
let makeChange = (cents)=>{

    // Calculating the number of quarters, dimes, nickels, and pennies
    //This was too difficult to achive by myself
    let quarters = Math.floor(cents / 25);
    let dimes = Math.floor((cents % 25) / 10);
    let nickels = Math.floor(((cents % 25) % 10) / 5);
    let pennies = ((cents % 25) % 10) % 5;

    $("#quarters").value = quarters;
    $("#dimes").value = dimes;
    $("#nickels").value = nickels;
    $("#pennies").value = pennies;
    focusCents();
}

//Event handler on the button
let btnCalculate = $("#calculate");
btnCalculate.addEventListener('click', processEntry);

//Function to focus on cents field
let focusCents = () => {
     $('#cents').focus()
    };

// DOMContentLoaded event handler 
document.addEventListener("DOMContentLoaded", focusCents)