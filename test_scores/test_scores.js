"use strict";
const $ = selector => document.querySelector(selector);

const names = ["Ben", "Joel", "Judy", "Anne"];
const scores = [88, 98, 77, 88];

let nameSpan;
let scoreSpan;

let displayResults = () =>{	
	let averageScore = scores.reduce((sum, score) => sum + score, 0) / scores.length;
	let maxScore = Math.max(...scores);


	// Finding the index of the max score  
    let maxScoreIndex = scores.indexOf(maxScore);
	// Getting the name associated with the max score -- This is rough to undestand!!!!
    let maxScoreName = maxScoreIndex !== -1 ? names[maxScoreIndex] : "Unknown";

	/*
		//Template strings with ${} work to display the info, but the task was adding nodes
		let results = `<h1>Results</h1><p>The Average Score is: ${averageScore.toFixed(2)}</p><p>The Max Score is: ${maxScore}</p>`;
		$("#results").innerHTML = results;
	*/

	// Creating the nodes
	let resultsH2 = document.createElement("h2");
		resultsH2.textContent = "Results";
	let averagePar= document.createElement("p");
		averagePar.textContent = "Average Score = " + averageScore.toFixed(2);
	let maxPar = document.createElement("p");
		maxPar.textContent = "Highest score = " + maxScoreName+ " with a score of " + maxScore ;

	// Targeting the container div
	let resultsDiv = $("#results");
	// Clearing any previous nodes
	resultsDiv.textContent = '';
	// Appending the new elements
	resultsDiv.appendChild(resultsH2);
	resultsDiv.appendChild(averagePar);
	resultsDiv.appendChild(maxPar);

	nameSpan.textContent = "";
	scoreSpan.textContent = "";
	$("#name").value = "";
	$("#score").value = "";
	$("#name").focus();
}
let displayScores = () =>{
	// Targeting the container div
	let scoresDiv = $("#scores");
	// Clearing any previous nodes
	scoresDiv.textContent = '';
	// Creating the heading
	let scoreH2 = document.createElement("h2");
		scoreH2.textContent = "Scores";
	// Appending the heading
	scoresDiv.appendChild(scoreH2);
	

	// Looping over names array to create elements per name
	for (let i = 0; i < names.length; i++) {

		// Creating label element for name
		let nameLabel = document.createElement("label");
		nameLabel.textContent = names[i] + ": ";
		// Creating label element for score with the same loop
		let scoreLabel = document.createElement("label");
		scoreLabel.textContent = scores[i];
		let lineBreak = document.createElement("br");
		// Appending elements within the loop, per each name
		scoresDiv.appendChild(nameLabel);
   		scoresDiv.appendChild(scoreLabel);
    	scoresDiv.appendChild(lineBreak);
	}

	nameSpan.textContent = "";
	scoreSpan.textContent = "";
	$("#name").value = "";
	$("#score").value = "";
	$("#name").focus();

}

let addScore = () =>{

let nameInput = $("#name").value;
let scoreInput = parseFloat($("#score").value);

if (isNaN(nameInput) && scoreInput > 0 && scoreInput <= 100 ){
	names.push(nameInput);
	scores.push(scoreInput);
	nameError.textContent = "";
	scoreError.textContent = "";
}
else{

	console.log("Input error!!!!");
	let nameInputNode = $("#name");
	let scoreInputNode = $("#score");
	//nameSpan and Score Span are declared in the begining to be adressed by other functions
	nameSpan = nameInputNode.parentNode.querySelector('span');
	nameSpan.textContent = "Please enter a name";
	scoreSpan = scoreInputNode.parentNode.querySelector('span');
	scoreSpan.textContent = "Score must be between 0 and 100";

	$("#name").focus();
}
	

}



document.addEventListener("DOMContentLoaded", () => {
	// add event handlers
	$("#add").addEventListener("click", addScore);
	$("#display_results").addEventListener("click", displayResults);
	$("#display_scores").addEventListener("click", displayScores);
});