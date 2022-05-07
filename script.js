let billInput = document.querySelector(".billInput");
let peopleInput = document.querySelector(".peopleInput");
let customInput = document.querySelector(".custom");
let totalPerPerson = document.querySelector(".peopletotal");
let totalTip = document.querySelector(".tiptotal");
let error = document.querySelector(".error");
let btnReset = document.querySelector(".reset");

const percentBtns = [...document.querySelectorAll(".percent-btn")];
const values = [5, 10, 15, 25, 50];

/**
 * A function that calculates the split sum between the number of people that are paying
 */
function calculateSplit() {
  let splitSum = billInput.value / peopleInput.value;
  return parseFloat(splitSum).toFixed(2);
}

/**
 * A function that calculates the tip each person should pay depending on the percent chosen
 */
function calculateTip(percent) {
  let splitTip = (billInput.value * percent) / peopleInput.value;
  return parseFloat(splitTip).toFixed(2);
}

/*Functions to update each tip amount*/

function updateTotalPerPerson() {
  totalPerPerson.innerText = `$ ${calculateSplit()} `;
}

const updateTip = (percent) => {
  if (handleError()) {
    updateTotalPerPerson();
    totalTip.innerText = `$ ${calculateTip(percent)}`;
  }
};

function UpdateTipCustom() {
  updateTip(customInput.value / 100);
}

// Validation of input and error handling
/**
 * A function that validates input and resets the app if input is not valid
 */
function handleError() {
  if (
    peopleInput.value <= 0 ||
    peopleInput.value === undefined ||
    billInput.value <= 0 ||
    billInput.value === undefined
  ) {
    reset();
    showError();
    return false;
  } else {
    hideError();
    return true;
  }
}

function showError() {
  error.classList.remove("hide");
}
function hideError() {
  error.classList.add("hide");
}

//

function keypressUpdateTotal(event) {
  if (event.keyCode === 13 && handleError()) {
    updateTotalPerPerson();
  }
}

function keypressUpdateTipCustom(event) {
  if (event.keyCode === 13 && handleError()) {
    UpdateTipCustom();
  }
}

// Adding Event Listeners

customInput.addEventListener("keypress", keypressUpdateTipCustom);
peopleInput.addEventListener("keypress", keypressUpdateTotal);
btnReset.addEventListener("click", reset);
percentBtns.forEach((btn) => {
  btn.addEventListener("click", () => {
    updateTip(values[percentBtns.indexOf(btn)] / 100);
  });
});

/*RESET FUNCTION*/

function reset() {
  billInput.value = "";
  peopleInput.value = "";
  totalTip.innerText = "$ 0.00";
  totalPerPerson.innerText = "$ 0.00";
  customInput.value = "";
  hideError();
}
