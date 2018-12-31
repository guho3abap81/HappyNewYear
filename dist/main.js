
const abba = new Audio("sounds/Happy New Year - Abba.mp3");
const pop = new Audio("sounds/pop.mp3")
const newYear = document.querySelector(".new-year");
const baloons = document.querySelectorAll(".baloon")
const greetings = document.querySelectorAll(".baloon > p")
const champagne = document.querySelector(".champagne")
const body = document.querySelector(".body");
let Playing = false;

function showGreet(e){
  e.target.classList.add("show")

}

function activate(){
  body.classList.add("active");
  if(!Playing){
    pop.play();
    abba.play();
    Playing = true;
  }

};
champagne.addEventListener("click",activate)

baloons.forEach((baloon) => baloon.addEventListener("click", showGreet));
