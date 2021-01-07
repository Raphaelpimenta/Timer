//Contagem Regressiva
var contagemData = new Date("Dec 31, 2021 00:00:00").getTime();

var contagemFunction = setInterval(function(){

    //Dias
    var atual = new Date().getTime();

    //Distância entre a data atual e a data prevista
    var distancia = contagemData - atual

    //Tempo calculado para os dias, horas, minutos e segundos
    var dias = Math.floor(distancia / (1000 * 60 * 60 * 24));

    var horas = Math.floor((distancia % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));

    var minutos = Math.floor((distancia % (1000 * 60 * 60)) / (1000 * 60));

    var segundos = Math.floor((distancia % (1000 * 60)) / 1000);

    //Colocando o resultado no elemento "timer"
    document.getElementById("timer").innerHTML = dias + "d " + horas + "h " + minutos + "m " + segundos + "s";

    //Quando a contagem acabar, exibir um texto
    if(distancia < 0) {
        clearInterval(contagemFunction);
        document.getElementById("timer").innerHTML = "The world will never be the same.";
    }
}, 1000);