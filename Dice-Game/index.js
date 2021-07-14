// selecting 2 random numbers
var n1 = Math.floor(Math.random()*6)+1;
var n2 = Math.floor(Math.random()*6)+1;

var imgSource = "images/dice"+n1+".png";
var imgSource2 = "images/dice"+n2+".png";

// changing the attributes
document.querySelectorAll("img")[0].setAttribute("src",imgSource);
document.querySelectorAll("img")[1].setAttribute("src",imgSource2);

if(n1 > n2)
{
  document.querySelector("h1").innerHTML = "Player1 Wins 🏆";
}
else if(n2 > n1)
{
  document.querySelector("h1").innerHTML = "Player2 Wins 🎅";
}
else
{
  document.querySelector("h1").innerHTML = "💮 DRAW 💮"
}
