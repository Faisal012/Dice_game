
var randomNo1=Math.floor(Math.random()*6)+1;
var randaomImage="dice"+randomNo1+".png";
var imageSource="image/"+randaomImage;
var image1=document.querySelectorAll("img")[0];
image1.setAttribute("src",imageSource);

var random2=Math.floor(Math.random()*6)+1;
var imageSourse2="image/dice"+random2+".png"
document.querySelectorAll("img")[1].setAttribute("src",imageSourse2);
if(random2<randomNo1){
    document.querySelector("h1").innerHTML="🏁 Player 1 is Win";
}
else if(randomNo1<random2){
    document.querySelector("h1").innerHTML="Player 2 is Win 🏁";
}
else{
    document.querySelector("h1").innerHTML="Drow";
}