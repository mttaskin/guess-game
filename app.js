// değişkenler
// 1- 100 arasında sayı tut
let randomNumber;
const input = document.querySelector(".input");
const buton = document.querySelector(".input-con button");
const result = document.querySelector(".result");
const imgCon = document.querySelector(".img-con");
const startGame = document.querySelector(".btn-con button");
const reStartGame = document.querySelector(".restart");
const liveElement = document.querySelector("#live");
const inputCon = document.querySelector(".input-con");
const butonCon = document.querySelector(".btn-con");
const firstNumSpan = document.querySelector(".first-number");
const secondNumSpan = document.querySelector(".second-number");
const guessText = document.querySelector(".guess-text");

let live;
let firstNum;
let secondNum;

startGame.addEventListener("click", () => {
  live = 6;
  liveElement.innerText = live;
  butonCon.style.display = "none";
  inputCon.style.display = "flex";
  document.querySelector(".live-con").style.visibility = "visible";
  result.innerText = "Write the number";
  randomNumber = Math.ceil(Math.random() * 100);
  input.focus();

  firstNum = 0;
  secondNum = 100;
});