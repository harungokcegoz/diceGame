
var dice1 = document.createElement("dice1");
dice1.src = "images/dice1.png";
var dice2 = document.createElement("dice1");
dice2.src = "images/dice2.png";
var dice3 = document.createElement("dice1");
dice3.src = "images/dice3.png";
var dice4 = document.createElement("dice1");
dice4.src = "images/dice4.png";
var dice5 = document.createElement("dice1");
dice5.src = "images/dice5.png";
var dice6 = document.createElement("dice1");
dice6.src = "images/dice6.png";

var dices = [dice1, dice2, dice3, dice4, dice5, dice6];
var numOfDice1 = getRandomInt(dices.length);
var numOfDice2 = getRandomInt(dices.length);
var selectedDice = dices[numOfDice1];
var selectedDice1 = dices[numOfDice2];
document.querySelector(".img1").setAttribute("src", selectedDice.src);
document.querySelector(".img2").setAttribute("src", selectedDice1.src);

if (numOfDice1 > numOfDice2) {
  document.firstElementChild.lastElementChild.firstElementChild.firstElementChild.innerHTML =
    "Player1 Won!";
} else if (numOfDice1 < numOfDice2) {
  document.firstElementChild.lastElementChild.firstElementChild.firstElementChild.innerHTML =
    "Player2 Won!";
} else {
  document.firstElementChild.lastElementChild.firstElementChild.firstElementChild.innerHTML =
    "DRAW!";
}

function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}
