/*
! LEZIONE 5
^ lunghezza di una stringa
let stringa = "questo e un corso completo di javascript";
console.log(stringa.length);        //40


^ prendere un carattere specifico
let stringa = "questo e un corso completo di javascript";
console.log(stringa[9]);          //u


^ prendere l'ultimo carattere
let stringa = "questo e un corso completo di javascript";
console.log(stringa[stringa.length - 1]);         //t


^ prendere una parte di stringa:       indexOf
let stringa = "questo e un corso completo di javascript";
console.log(stringa.indexOf("corso"));         //12


^ prendere una parte di stringa:       slice
let stringa = "questo e un corso completo di javascript";
let sliceCorso = stringa.indexOf("corso");
console.log(stringa.slice(sliceCorso));        //corso completo di javascript


^ cambiare il Case di una stringa:        toUpperCase
let stringa = "questo e un corso completo di javascript";
console.log(stringa.toUpperCase());  //QUESTO E UN CORSO COMPLETO DI JAVASCRIPT


^ cambiare il Case di una stringa:        toLowerCase
let stringa = "Questo e un corso Completo di Javascript";
console.log(stringa.toLowerCase());  //questo e un corso completo di javascript


^ cambiare parte di una stringa:          replace
let stringa = "Questo e un corso Completo di Javascript";
console.log(stringa.replace("corso", "CIAO"));  //Questo e un CIAO Completo di Javascript


*/