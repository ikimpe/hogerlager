'use strict'

window.onload = init;

var tellerAantalKerenGeraden = 0;
var tellerJuistGeraden = 0;
var tellerFoutGeraden = 0;
var getal;


function init (){
    getal = geefRandomGetal();
    document.getElementById("getal1").innerHTML=getal;
    document.getElementById("hoger").addEventListener("click", function() {vergelijk(getal, "hoger")});
    document.getElementById("lager").addEventListener("click", function() {vergelijk(getal, "lager")});

}
function geefRandomGetal(){
    return parseInt(Math.random()*100)+1; 
}
function vergelijk (oudgetal, input){
    var nieuwgetal, bericht="";
    do {
        nieuwgetal = geefRandomGetal();
    } while (nieuwgetal == oudgetal);
    tellerAantalKerenGeraden++;
    document.getElementById("getal1").innerHTML=nieuwgetal;
    if(input == "hoger"){
        if(nieuwgetal>oudgetal){
            bericht = "Juist geraden!";
            tellerJuistGeraden++;
        } else {
            bericht = "Fout geraden!";
            tellerFoutGeraden++;
        }
    } else {
        if(oudgetal>nieuwgetal){
            bericht = "Juist geraden!";
            tellerJuistGeraden++;
        } else {
            bericht = "Fout geraden!";
            tellerFoutGeraden++;
        }
    };
    bericht += "<br>juist geraden getallen = "+tellerJuistGeraden+"<br>fout geraden getallen = "+tellerFoutGeraden;
    document.getElementById("getal1").innerText=nieuwgetal;
    if (tellerAantalKerenGeraden>0){
        document.getElementById("bericht").innerHTML=bericht;
    }
    getal = nieuwgetal;
    if (tellerAantalKerenGeraden>=20){
        endGame(bericht);
    }
}
function endGame(bericht){
    document.getElementById("hoger").setAttribute("disabled", "disabled");
    document.getElementById("lager").setAttribute("disabled", "disabled");
    bericht += "<br> u heeft 20 keer geraden.<br>Het spel is afgelopen!"
    document.getElementById("bericht").innerHTML=bericht;
    document.getElementsByClassName("hippiebus")[0].style.display = "block";
}