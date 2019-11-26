var choix1 = document.getElementById('item');
var choix2 = document.getElementById('item2');
var choix3 = document.getElementById('item3');

var victoire = 0;
var defaite = 0;
var valid = 0;
var IA1 = document.getElementById('IA1');






choix1.addEventListener("click", function () {
    valid = 1;
    var compteurvic = document.getElementById('victoire');
    var compteurdef = document.getElementById('defaite');
    var alea = Math.floor(Math.random(1)*3)+1.;


    if (valid === 1 && alea === 2) {
        compteurvic.innerHTML = 'COUPS ENVOYES ' +victoire ;
        victoire = victoire +1;
    }
    else if  ( valid === 1 && alea === 1){

    }

    else if  ( valid === 1 && alea === 3){
        compteurdef.innerHTML = 'COUPS SUBIS ' +defaite ;
        defaite = defaite +1;


    }



    console.log(alea);
    console.log(victoire);


    switch (alea) {
        case 1: {
            IA1.style.background = 'url("Rock-paper-scissors_(paper).png")';
            break;
        }
        case 2: {
            IA1.style.background = 'url("Rock-paper-scissors_(rock).png")';
            break;
        }
        case 3: {
            IA1.style.background = 'url("Rock-paper-scissors_(scissors).png")';
            break;
        }
    }

});

choix2.addEventListener("click", function () {
    var alea = Math.floor(Math.random(1)*3)+1.;
    valid = 2;
    var compteurvic = document.getElementById('victoire');
    var compteurdef = document.getElementById('defaite');

    if ( valid === 2 && alea === 3){
        compteurvic.innerHTML = 'COUPS ENVOYES ' +victoire ;
        victoire = victoire +1;
    }

    else if
    (valid === 2 && alea === 2){
    }
    else if
    (valid === 2 && alea === 1){
        compteurdef.innerHTML = 'COUPS SUBIS ' +defaite ;
        defaite = defaite +1;
    }

    console.log(alea);
    console.log(victoire);


    switch (alea) {
        case 1: {
            IA1.style.background = 'url("Rock-paper-scissors_(paper).png")';
            break;
        }
        case 2: {
            IA1.style.background = 'url("Rock-paper-scissors_(rock).png")';
            break;
        }
        case 3: {
            IA1.style.background = 'url("Rock-paper-scissors_(scissors).png")';
            break;
        }
    }

});


choix3.addEventListener("click", function () {
    var alea = Math.floor(Math.random(1)*3)+1.;
    valid = 3;
    var compteurvic = document.getElementById('victoire');
    var compteurdef = document.getElementById('defaite');

    if (valid === 3 && alea === 1) {
        compteurvic.innerHTML = 'COUPS ENVOYES ' +victoire ;
        victoire = victoire + 1;
    }

    else if (valid === 3 && alea === 3){
    }

    else if (valid === 3 && alea === 2){
        compteurdef.innerHTML = 'COUPS SUBIS ' +defaite ;
        defaite = defaite +1;
    }

    console.log(alea);
    console.log(victoire);

    switch (alea) {
        case 1: {
            IA1.style.background = 'url("Rock-paper-scissors_(paper).png")';
            break;
        }
        case 2: {
            IA1.style.background = 'url("Rock-paper-scissors_(rock).png")';
            break;
        }
        case 3: {
            IA1.style.background = 'url("Rock-paper-scissors_(scissors).png")';
            break;
        }
    }

});