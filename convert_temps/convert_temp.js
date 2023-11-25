"use strict";
const $ = selector => document.querySelector(selector);

/*********************
*  helper functions  *
**********************/
const calculateCelsius = temp => (temp-32) * 5/9;
const calculateFahrenheit = temp => temp * 9/5 + 32;


//Function to change the radio buttons labels
const toggleDisplay = (label1Text, label2Text) => {
	
$("#degree_label_1").textContent = label1Text;
$("#degree_label_2").textContent = label2Text;
$("#degrees_entered").focus();
clearFields();
}

/****************************
*  event handler functions  *
*****************************/
//Radioboxes could not be handled by the $ query selector function, dont know why?
let toCelsiusRadio = document.getElementById("to_celsius");
let toFarenheitRadio = document.getElementById("to_fahrenheit");
const convertTemp = () => {  
	let temp = parseFloat($("#degrees_entered").value); 
	let result ="";
	//Validator
	if (isNaN(temp)){
	alert("Please enter a valid numeric value.");
	return;
	}
	if (toCelsiusRadio.checked){
		result = calculateCelsius(temp);
	}
	else if (toFarenheitRadio.checked){
		result = calculateFahrenheit(temp);
	}
	$("#degrees_computed").value = result.toFixed(2);;
	$("#degrees_entered").focus();
};

const toCelsius = () => toggleDisplay("Enter F degrees:", "Degrees Celsius:");
const toFahrenheit = () => toggleDisplay("Enter C degrees:", "Degrees Fahrenheit:");

document.addEventListener("DOMContentLoaded", () => {
	// add event handlers
	$("#convert").addEventListener("click", convertTemp);
    $("#to_celsius").addEventListener("click", toCelsius);
    $("#to_fahrenheit").addEventListener("click", toFahrenheit);
	
	// move focus
	$("#degrees_entered").focus();
});

//To empty the text boxes
let clearFields = () =>{
	$("#degrees_entered").value = "";
	$("#degrees_computed").value = "";
}