var randomNumber1=Math.round((Math.random()*5)+1);
document.querySelector(".img1").setAttribute("src","images/dice" + randomNumber1 +".png");
var randomNumber2=Math.round((Math.random()*5)+1);
document.querySelector(".img2").setAttribute("src","images/dice" + randomNumber2 +".png");

if(randomNumber1 > randomNumber2){
  document.querySelector("h1").innerHTML="Rohit wins";
}
else if(randomNumber1<randomNumber2){
  document.querySelector("h1").innerHTML="Yashodhar wins";
}
else{
  document.querySelector("h1").innerHTML="Draw!!";
}
