var choix1 = document.getElementById('item');
var choix2 = document.getElementById('item2');
var choix3 = document.getElementById('item3');
var bouton = document.getElementById('bouton');
var Cyriak = document.getElementById('cyriakdiv');

var nul = 0;
var victoire = 0;
var defaite = 0;
var valid = 0;
var IA1 = document.getElementById('IA1');

Cyriak.style.background = 'url("Cyriak.png")';

choix1.addEventListener("click", function () {
    valid = 1;
    var compteurvic = document.getElementById('victoire');
    var compteurdef = document.getElementById('defaite');
    var compteurnul = document.getElementById('nul');
    var alea = Math.floor(Math.random(1)*3)+1.;


    if (valid === 1 && alea === 2) {
        compteurvic.innerHTML = 'COUPS ENVOYES ' +victoire ;
        victoire = victoire +1;
    }
    else if  ( valid === 1 && alea === 1){
        compteurnul.innerHTML = 'PARADE ' +nul ;
        nul = nul +1;
    }

    else if  ( valid === 1 && alea === 3){
        compteurdef.innerHTML = 'COUPS SUBIS ' +defaite ;
        defaite = defaite +1;
    }

    switch (alea) {
        case 1: {
            IA1.style.background = 'url("feuille.png")';
            break;
        }
        case 2: {
            IA1.style.background = 'url("pierre.png")';
            break;
        }
        case 3: {
            IA1.style.background = 'url("ciseau.png")';
            break;
        }
    }

    switch (defaite) {
        case 5 :
            Cyriak.style.background = 'url("Cyriak1.png")';
            break;
        case 10 :
            Cyriak.style.background = 'url("Cyriak2.png")';
            break;
        case 15 :
            Cyriak.style.background = 'url("Cyriak3.png")';
            break;
        case 20 :
            Cyriak.style.background = 'url("Cyriak4.png")';
            break;
    }


});

choix2.addEventListener("click", function () {
    var alea = Math.floor(Math.random(1)*3)+1.;
    valid = 2;
    var compteurvic = document.getElementById('victoire');
    var compteurdef = document.getElementById('defaite');
    var compteurnul = document.getElementById('nul');



    if ( valid === 2 && alea === 3){
        compteurvic.innerHTML = 'COUPS ENVOYES ' +victoire ;
        victoire = victoire +1;
    }

    else if
    (valid === 2 && alea === 2){
        compteurnul.innerHTML = 'PARADE ' +nul ;
        nul = nul +1;
    }
    else if
    (valid === 2 && alea === 1){
        compteurdef.innerHTML = 'COUPS SUBIS ' +defaite ;
        defaite = defaite +1;
    }

    switch (alea) {
        case 1: {
            IA1.style.background = 'url("FEUILLE.png")';
            break;
        }
        case 2: {
            IA1.style.background = 'url("pierre.png")';
            break;
        }
        case 3: {
            IA1.style.background = 'url("ciseau.png")';
            break;
        }
    }
    switch (defaite) {
        case 5 :
            Cyriak.style.background = 'url("Cyriak1.png")';
            break;
        case 10 :
            Cyriak.style.background = 'url("Cyriak2.png")';
            break;
        case 15 :
            Cyriak.style.background = 'url("Cyriak3.png")';
            break;
        case 20 :
            Cyriak.style.background = 'url("Cyriak4.png")';
            break;
    }

});


choix3.addEventListener("click", function () {
    var alea = Math.floor(Math.random(1)*3)+1.;
    valid = 3;
    var compteurvic = document.getElementById('victoire');
    var compteurdef = document.getElementById('defaite');
    var compteurnul = document.getElementById('nul');


    if (valid === 3 && alea === 1) {
        compteurvic.innerHTML = 'COUPS ENVOYES ' +victoire ;
        victoire = victoire + 1;
    }

    else if (valid === 3 && alea === 3){
        compteurnul.innerHTML = 'PARADE ' +nul ;
        nul = nul +1;
    }

    else if (valid === 3 && alea === 2){
        compteurdef.innerHTML = 'COUPS SUBIS ' +defaite ;
        defaite = defaite +1;
    }

    switch (alea) {
        case 1: {
            IA1.style.background = 'FEUILLE.png")';
            break;
        }
        case 2: {
            IA1.style.background = 'url("pierre.png")';
            break;
        }
        case 3: {
            IA1.style.background = 'url("ciseau.png")';
            break;
        }
    }
    switch (defaite) {
        case 5 :
            Cyriak.style.background = 'url("Cyriak1.png")';
            break;
        case 10 :
            Cyriak.style.background = 'url("Cyriak2.png")';
            break;
        case 15 :
            Cyriak.style.background = 'url("Cyriak3.png")';
            break;
        case 20 :
            Cyriak.style.background = 'url("Cyriak4.png")';
            break;
    }

});

bouton.addEventListener("click", function () {
    var compteurvic = document.getElementById('victoire');
    var compteurdef = document.getElementById('defaite');
    var compteurnul = document.getElementById('nul');
    nul = 0;
    victoire = 0;
    defaite = 0;
    valid = 0;
    Cyriak.style.background = 'url("Cyriak.png")';
    compteurvic.innerHTML = 'COUPS ENVOYES ' +victoire ;
    compteurdef.innerHTML = 'COUPS SUBIS ' +defaite ;
    compteurnul.innerHTML = 'PARADE ' +nul ;
});
