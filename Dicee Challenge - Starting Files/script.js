var randomNumber1 = Math.floor(Math.random() * 6)+ 1;
var randomNumber2 = Math.floor(Math.random() * 6)+ 1;

var playerOneImg = document.querySelector(".img1");
var playerTwoImg = document.querySelector(".img2");
var header1 = document.querySelector("h1");

playerOneImg.setAttribute("src", "images/dice" + randomNumber1 + ".png");
playerTwoImg.setAttribute("src","images/dice" + randomNumber2 + ".png");

if(randomNumber1 == randomNumber2){
    header1.innerHTML = "Draw!";
}
if(randomNumber1> randomNumber2){
    header1.textContent = "🚩Player One Wins!";
}
if(randomNumber1<randomNumber2){
    header1.textContent = "Player Two Wins! 🚩";
}


