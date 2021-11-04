let billInput = document.querySelector(".billInput");
let peopleInput = document.querySelector(".peopleInput");
let customInput = document.querySelector(".custom");
let totalPerPerson = document.querySelector(".peopletotal");
let totalTip = document.querySelector(".tiptotal");
let error = document.querySelector(".error");
let btnReset = document.querySelector(".reset")

let btn5 = document.querySelector(".percent5");
let btn10 = document.querySelector(".percent10");
let btn15 = document.querySelector(".percent15");
let btn25 = document.querySelector(".percent25");
let btn50 = document.querySelector(".percent50");

function calculateSplit(){
	let splitSum = billInput.value / peopleInput.value;
	return parseFloat(splitSum).toFixed(2);

};

function calculateTip(percent){
	let splitTip = billInput.value * percent / peopleInput.value;
	return parseFloat(splitTip).toFixed(2);
};
 
/*Functions to update each tip amount*/



function updateTotalPerPerson(){
	totalPerPerson.innerHTML = "$ " + calculateSplit();
}
;

function UpdateTip5(){
 	checkForErrors();
 	updateTotalPerPerson();
	totalTip.innerHTML = "$ " + calculateTip(0.05);

};

function UpdateTip10(){
	checkForErrors();
	updateTotalPerPerson();
	totalTip.innerHTML = "$ " + calculateTip(0.10);
	}
;

function UpdateTip15(){
	checkForErrors();
	updateTotalPerPerson();
	totalTip.innerHTML = "$ " + calculateTip(0.15);
	}
;

function UpdateTip25(){
	checkForErrors();
	updateTotalPerPerson();
	totalTip.innerHTML = "$ " + calculateTip(0.25);
	}
;

function UpdateTip50(){
	checkForErrors();
	updateTotalPerPerson();
	totalTip.innerHTML = "$ " + calculateTip(0.5);
	}
;

function UpdateTipCustom(){
	checkForErrors();
		updateTotalPerPerson();
		totalTip.innerHTML = "$ " + calculateTip(customInput.value / 100);
}

function keypressUpdateTotal(event){
	if(peopleInput.value !== "" && peopleInput.value != 0 && event.keyCode === 13){
	updateTotalPerPerson()
}
}

function keypressUpdateTipCustom(event){
if(customInput.value !== "" && event.keyCode === 13){
	checkForErrors();
	UpdateTipCustom();
}
}


btn5.addEventListener("click", UpdateTip5);
btn10.addEventListener("click", UpdateTip10);
btn15.addEventListener("click", UpdateTip15);
btn25.addEventListener("click", UpdateTip25);
btn50.addEventListener("click", UpdateTip50);
customInput.addEventListener("keypress", keypressUpdateTipCustom);
peopleInput.addEventListener("keypress", keypressUpdateTotal);

/*ERRORS*/

function removeError(){
		error.classList.remove("hide");
	
	}
function addError(){
	error.classList.add("hide");
}



/*RESET FUNCTION*/

function reset(){
	billInput.value = "";
	peopleInput.value = "";
	totalTip.innerHTML = "$ 0.00";
	totalPerPerson.innerHTML = "$ 0.00";
	customInput.value = "";
	addError();
}

btnReset.addEventListener("click", reset);

function checkForErrors(){
 	if(peopleInput.value == 0 || peopleInput.value === ""){
 		reset();
 		removeError();
 
 	} else if(peopleInput.value != 0 || peopleInput.value ===""){
 	addError()
 	}
 }
