var a = Math.floor((Math.random()*6)+1);
var b = Math.floor((Math.random()*6)+1);

if(a===1){
  document.querySelector(".img1").setAttribute("src","d1.png");
  }
else if(a===2){
  document.querySelector(".img1").setAttribute("src","d2.png");
}
else if(a===3){
  document.querySelector(".img1").setAttribute("src","d3.png");
}
else if(a===4){
  document.querySelector(".img1").setAttribute("src","d4.png");
}
else if(a===5){
  document.querySelector(".img1").setAttribute("src","d5.png");
}
else{
  document.querySelector(".img1").setAttribute("src","d6.png");
}

if(b===1){
  document.querySelector(".img2").setAttribute("src","d1.png");
  }
else if(b===2){
  document.querySelector(".img2").setAttribute("src","d2.png");
}
else if(b===3){
  document.querySelector(".img2").setAttribute("src","d3.png");
}
else if(b===4){
  document.querySelector(".img2").setAttribute("src","d4.png");
}
else if(b===5){
  document.querySelector(".img2").setAttribute("src","d5.png");
}
else{
  document.querySelector(".img2").setAttribute("src","d6.png");
}

if(a>b){
  document.querySelector("h1").innerHTML="Player 1 wins";
}
else if(b>a){
  document.querySelector("h1").innerHTML="Player 2 wins";
}
else{
  document.querySelector("h1").innerHTML="Draw, Play Again";
                                               }
