/*
! LEZIONE 4
^ concatenare stringhe
let nome = "luca";
let testo = "ciao sono " + nome;
console.log(testo);           //ciao sono luca


^ numeri e stringhe
let calcolo = Number("50") + 50;
console.log(calcolo);       //100


^ template literals         `${....}`       (backtick   ALT + 9)
& Un template literals in JavaScript è una stringa che supporta l'espressione intercalata. Questo significa che è possibile inserire variabili e calcoli all'interno della stringa, utilizzando il segnaposto "${}". Ad esempio:
let nome = "bacar";
console.log(`il mio nome è ${nome}`);         //il mio nome è bacar



let x = 10;
let y = 20;
console.log(`risultato ${x + y}`);         //risultato 30
*/