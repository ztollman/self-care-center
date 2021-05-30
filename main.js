// Elements and Queryselectors
var affirmationBttn = document.getElementById("affirmation");
var mantraBttn = document.getElementById("mantra");
var clearBttn = document.querySelector(".clear-button");
var receiveMsgBttn = document.querySelector("button");
var bell = document.querySelector("svg");
var returnMsgBox = document.querySelector(".logo-box");
var msgPlaceholder = document.querySelector("p");
var mainPage = document.querySelector(".main");

// Lists
affirmations = [
"Pineapple on pizza is not a crime, love what you love! Because loving what you love is also loving yourself!",
"Understand that when you lose, you actually win! You're doing good, keep it up!",
"My chosen work brings me success and satisfaction.",
"I have an infinite capacity to receive and an infinite capacity to express."
]

mantras = [
"I am one with the earth.",
"If aint broke, dont fix it!",
"There is always room for improvement.",
"Innovation requires taking risks."
]

// Event Listeners
receiveMsgBttn.addEventListener('click', generateRandomText);
clearBttn.addEventListener('click', clearMessage);

// Even Handlers
function getRandomIndex(array) {
  return Math.floor(Math.random() * array.length);
}

function generateRandomText() {

  if(document.getElementById("affirmation").checked) {
     var randomAffirmIndex = getRandomIndex(affirmations);
     msgPlaceholder.innerHTML += `${affirmations[randomAffirmIndex]}`;
     bell.style.display = "none";
     clearBttn.classList.toggle('hidden');
  } else if (document.getElementById("mantra").checked) {
     var randomMantraIndex = getRandomIndex(mantras);
     msgPlaceholder.innerHTML += `${mantras[randomMantraIndex]}`;
     bell.style.display = "none";
     clearBttn.classList.toggle('hidden');
  } else {
     alert("You have not chosen the affirmation nor the mantra option! Please choose one inorder to receive a message.");
  }
}

function clearMessage() {
  msgPlaceholder.innerHTML = "";
  clearBttn.classList.toggle('hidden');
  bell.style.display = "inline";
}
