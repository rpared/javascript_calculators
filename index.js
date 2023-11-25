//This function will allow $(selector) to replace all DOM references
let $ = (selector) => document.querySelector(selector);


//Targeting elements with $(selector) to replace all DOM references
let button1 = $("ol li:nth-child(1) button");
let button2 = $("ol li:nth-child(2) button");
let button3 = $("ol li:nth-child(3) button");
let button4 = $("ol li:nth-child(4) button");
let button5 = $("ol li:nth-child(5) button");

//Arrow function
let calculator1 = () =>{
    window.open("sales_tax/index.html");
}
//old fashioned function
function calculator2 (){
    window.open("change_maker/index.html");
}
//function expression
let calculator3 = function(){
    window.open("income_tax/index.html");
}
//Arrow function
let calculator4 = () =>{
    window.open("convert_temps/index.html");
}
//Arrow function
let calculator5 = () =>{
    window.open("test_scores/index.html");
}

//event handlers
button1.addEventListener("click", calculator1);
button2.addEventListener("click", calculator2);
button3.addEventListener("click", calculator3);
button4.addEventListener("click", calculator4);
button5.addEventListener("click", calculator5);