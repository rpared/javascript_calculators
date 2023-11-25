"use strict";

//This function will allow $(selector) to replace all DOM references
const $ = selector => document.querySelector(selector);

//Function to focus on subtotal
let focusSubtotal = () => {
     $('#subtotal').focus()
    };
    
// DOMContentLoaded event handler 
document.addEventListener("DOMContentLoaded", focusSubtotal)


function processEntries() {
    // To Move cursor to the Subtotal field:
    focusSubtotal();
    // To Get the input
    let subTotal = parseFloat($('#subtotal').value);
    let taxRate = parseFloat($('#tax_rate').value);

    //Validators that stop the function if not approved
    if (subTotal <= 0 || subTotal > 10000 || isNaN(subTotal)){
        alert("Subtotal must be > 0 and < 10000 ");
        return;
    }
    if (taxRate <= 0 || taxRate > 13 || isNaN(taxRate)){
        alert("Tax Rate must be > 0 and <= 13 ");
        return;
    }

    // Calculations
    let salesTax = subTotal * (taxRate / 100);
    let total = subTotal + salesTax;

    // Display calculations (set with 2 decimals)
    $('#sales_tax').value = salesTax.toFixed(2);
    $('#total').value = total.toFixed(2);
}

// Calculate Button Event handling. This could be replaced by the $ function
let btnCalculate = document.querySelector("#calculate");
btnCalculate.addEventListener('click', processEntries);


//Function to clear the fields
let clearEntries = () => {
    $('#subtotal').value = "";
    $('#tax_rate').value = "";
    $('#sales_tax').value = "";
    $('#total').value = "";

    // To Move cursor to the Subtotal field:
    focusSubtotal();
}

//For the clear button im using the $ function
let btnClear = $('#clear');
btnClear.addEventListener('click', clearEntries);


//Text fields event handling with functions to clear them when clicked
$('#subtotal').addEventListener('click', function clearSubtotal(){
    $('#subtotal').value = "";
});
$('#tax_rate').addEventListener('click', function clearTaxrate(){
    $('#tax_rate').value = "";
});