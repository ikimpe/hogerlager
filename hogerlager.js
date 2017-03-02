'use strict'

window.onload = init;

var tellerAantalKerenGeraden = 0;
var tellerJuistGeraden = 0;
var tellerFoutGeraden = 0;


function init (){
    var getal = geefRandomGetal();
    document.getElementById("getal1").innerHTML=getal;
    document.getElementById("hoger").onclick = vergelijk(getal,"hoger");
    document.getElementById("lager").onclick = vergelijk(getal,"lager");

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
    document.getElementById("bericht").innerHTML=bericht;
}