/*
! LEZIONE 9
& In JavaScript, una funzione è un blocco di codice che esegue un compito specifico e può essere riutilizzato in tutto il codice. Le funzioni sono definite usando la parola chiave "function()", seguita dal nome della funzione, un elenco di parametri tra parentesi e il blocco di codice tra parentesi graffe. Le funzioni possono accettare input (parametri) e restituire output (valori di ritorno).
^ come invocare una funtion()
function ciao(){
    console.log("ciao");
}
ciao();    //ciao



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
function greet(name) {
    console.log("Hello, " + name + "!");
}

greet("John");

? In questo esempio, greet è una funzione che accetta un parametro chiamato name. Quando la funzione viene chiamata con greet("John"), il valore "John" viene assegnato al parametro name, che viene quindi utilizzato all'interno della funzione per stampare un messaggio di benvenuto.



^ 



*/