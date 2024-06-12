/* eslint-disable */
import "bootstrap";
import "./style.css";
//variables
const suit = ["♣", "♠", "♦", "♥"];
const number = ["A", "2", "3", "4", "5", "6", "7", "8", "9", "J", "Q", "K"];
let topCard = document.getElementById("top");
let centerCard = document.getElementById("center");
let bottomCard = document.getElementById("bottom");

//CONSTRUIR LA CARTA

function generateNumber() {
  return number[Math.floor(Math.random() * number.length)];
}
function generateSuit() {
  return suit[Math.floor(Math.random() * suit.length)];
}
function generateCard() {
  let setNumber = generateNumber();
  let setSuit = generateSuit();
  let setCard = [setNumber, setSuit];
  return setCard;
}
function generateColor(a) {
  if (a === "♦" || a === "♥") {
    topCard.style.color = "red";
    centerCard.style.color = "red";
    bottomCard.style.color = "red";
  } else {
    topCard.style.color = "black";
    centerCard.style.color = "black";
    bottomCard.style.color = "black";
  }
}
//CAMBIAR LA CARTA

function changeCard() {
  let card = generateCard();
  generateColor(card[1]);
  topCard.innerHTML = card[1];
  centerCard.innerHTML = generateNumber();
  bottomCard.innerHTML = card[1];
}
//EJECUTAR FUNCIONES
window.onload = function() {
  changeCard();
};
document.getElementById("button").addEventListener("click", changeCard);
setInterval(changeCard, 10000);
