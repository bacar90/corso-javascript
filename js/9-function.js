/*
! LEZIONE 9
& In JavaScript, una funzione è un blocco di codice che esegue un compito specifico e può essere riutilizzato in tutto il codice. Le funzioni sono definite usando la parola chiave "function()", seguita dal nome della funzione, un elenco di parametri tra parentesi e il blocco di codice tra parentesi graffe. Le funzioni possono accettare input (parametri) e restituire output (valori di ritorno).
^ come dichiarare e invocare una funtion()
function ciao(){
    
    console.log("ciao");
}
ciao();



^ function() par expression
const persona = function () {
    console.log("la persona si chiama paola");
}
persona();



^ return function()
? esempio
function calcoloRettangolo () {
    let lunghezza = 15;
    let larghezza = 10;
    return lunghezza * larghezza;
}
let risultato = calcoloRettangolo();
console.log(`il risultato del mio calcolo ${risultato}`);    //150


? esempio
function calcolo(lu,la) {
    let risultato = lu * la;
    return risultato;
}
console.log(calcolo(10,5));
console.log(calcolo(20,5));
console.log(calcolo(30,5));    //150
console.log(calcolo(40,5));
console.log(calcolo(50,5));


? esempio
let x = calcolo(10, 5);
function calcolo(a, b) {
    return a * b;
}
console.log(x);     //50


? esempio
function tocel(f) {
    return (5/9) * (f-32);
}
console.log(tocel(77));    //25


^ function() anonime
let click = document.querySelector("button");

click.onclick = function() {
    alert("sei bellissimo");
}



^ scope e conflitti      (scope globale   e    scope locale)
let nome = "luca";     //scope globale

function ciao(){
let cognome = "rossi";     // scope locale
    
    console.log("ciao", nome, cognome);      //ciao luca rossi
}
ciao();



^ parametri delle function()
& In JavaScript, i parametri delle funzioni sono valori che vengono passati alla funzione quando viene chiamata. Questi valori vengono usati dalla funzione per eseguire il suo compito. Ad esempio:
function Persona(nome,cognome) {
    console.log("ciao",nome,cognome);   //ciao mario rossi
}
Persona("mario", "rossi");


^ 



*/