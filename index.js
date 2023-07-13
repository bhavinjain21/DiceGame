var a = Math.floor((Math.random()*6)+1);
var b = Math.floor((Math.random()*6)+1);

if(a===1){
  document.querySelector(".img1").setAttribute("src","https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSHINJPyxf_0uLTIExoOxFWNi7c15BkLz3k2o5htMFjEX7yjw5pIIlcBNuA&s=10");
  }
else if(a===2){
  document.querySelector(".img1").setAttribute("src","https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQeDzXWVnwqFR5-woHoZksmrDRZyytw4JkqNrh5s7vai3ja9QeZ8WqzTa4&s=10");
}
else if(a===3){
  document.querySelector(".img1").setAttribute("src","https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQF0hsA3JBzTYfRIPEkm-mVN2NOrmHlSfawQ74pAb_myQaB0v7eGkF6dtA&s=10");
}
else if(a===4){
  document.querySelector(".img1").setAttribute("src","https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTXDXfhT9IE-wV7xAoncTOnEaVfOxRnd-Y6z0Vf6RzV7Rzj6h_F18ahQ6E&s=10");
}
else if(a===5){
  document.querySelector(".img1").setAttribute("src","https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ197VTVapfVbYCsEtJ6ceuEZFujZfR6rl_GQ&usqp=CAU");
}
else{
  document.querySelector(".img1").setAttribute("src","https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTcnpPtntN7j4QygBwXmhSd_XGk2xmGY77wzQ&usqp=CAU");
}

if(b===1){
  document.querySelector(".img2").setAttribute("src","https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSHINJPyxf_0uLTIExoOxFWNi7c15BkLz3k2o5htMFjEX7yjw5pIIlcBNuA&s=10");
  }
else if(b===2){
  document.querySelector(".img2").setAttribute("src","https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQeDzXWVnwqFR5-woHoZksmrDRZyytw4JkqNrh5s7vai3ja9QeZ8WqzTa4&s=10");
}
else if(b===3){
  document.querySelector(".img2").setAttribute("src","https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQF0hsA3JBzTYfRIPEkm-mVN2NOrmHlSfawQ74pAb_myQaB0v7eGkF6dtA&s=10");
}
else if(b===4){
  document.querySelector(".img2").setAttribute("src","https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTXDXfhT9IE-wV7xAoncTOnEaVfOxRnd-Y6z0Vf6RzV7Rzj6h_F18ahQ6E&s=10");
}
else if(b===5){
  document.querySelector(".img2").setAttribute("src","https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ197VTVapfVbYCsEtJ6ceuEZFujZfR6rl_GQ&usqp=CAU");
}
else{
  document.querySelector(".img2").setAttribute("src","https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTcnpPtntN7j4QygBwXmhSd_XGk2xmGY77wzQ&usqp=CAU");
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
