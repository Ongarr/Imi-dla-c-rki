var osoby = ['Alicja', 'Maja', 'Aleksandra', 'Zofia', 'Hanna'];
console.log(osoby);
var imie = osoby[Math.floor(Math.random() * osoby.length)];

document.getElementById("corka").innerHTML = imie;


setTimeout(function(){
document.getElementById('corka').style.visibility = "visible"
},1000);