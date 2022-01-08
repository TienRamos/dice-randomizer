var randomNumber1 = (Math.ceil(Math.random()*6));
var randomNumber2 = (Math.ceil(Math.random()*6));
var randomNumber3 = (Math.ceil(Math.random()*6));
var randomNumber4 = (Math.ceil(Math.random()*6));

document.querySelector(".dice1").setAttribute("src", "images/dice" + randomNumber1 + ".png");
document.querySelector(".dice2").setAttribute("src", "images/dice" + randomNumber2 + ".png");
document.querySelector(".dice3").setAttribute("src", "images/dice" + randomNumber3 + ".png");
document.querySelector(".dice4").setAttribute("src", "images/dice" + randomNumber4 + ".png");
