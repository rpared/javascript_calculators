"use strict";
const $ = selector => document.querySelector(selector);

//Function to focus on income field
let focusIncome = () => {
	$("#income").focus()
   };

// DOMContentLoaded event handler 
document.addEventListener("DOMContentLoaded", () => {
	// add event handlers
	$("#calculate").addEventListener("click", processEntry);
	focusIncome();
});

let processEntry = ()=>{
	let income = parseFloat($("#income").value);
	if (isNaN(income) || income <= 0 ){
		alert("Error: Income should be higher than zero.");
		return;
	}
	else{
		calculateTax(income);
	}

}
//Function to calculate income tax
let calculateTax = (income) =>{
	//Variable to be changed by the conditional
	let incomeTaxOwed;
	let excess;
	
	if (income > 0 && income <= 9875 ){
		excess = (income - 0);
		incomeTaxOwed = (excess * 0.12).toFixed(2);	
	}else if (income > 9875 && income <= 40125 ){
		excess = (income - 9875);
		incomeTaxOwed = (excess * 0.12 + 987.5).toFixed(2);
	}else if (income > 40125 && income <= 85525 ){
		excess = (income - 40125);
		incomeTaxOwed = (excess * 0.22 + 4617.50).toFixed(2);
	}else if (income > 85525 && income <= 163300 ){
		excess = (income - 85525);
		incomeTaxOwed = (excess * 0.24 + 14605).toFixed(2);
	}else if (income > 163300 && income <= 207350 ){
		excess = (income - 163300);
		incomeTaxOwed = (excess * 0.32 + 33271.50).toFixed(2);
	}else if (income > 207350 && income <= 518400 ){
		excess = (income - 207350);
		incomeTaxOwed = (excess * 0.35 + 47367.50).toFixed(2);
	}else if (income > 518400){
		excess = (income - 518400);
		incomeTaxOwed = (excess * 0.37 + 156235).toFixed(2);
	}

	$("#tax").value = incomeTaxOwed;
	
	
} 
