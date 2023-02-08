/*
! LEZIONE 7
^ if else statement
? Il costrutto if-else in JavaScript consente di eseguire un blocco di codice se una determinata condizione è vera, e un altro blocco di codice se la condizione è falsa. La sintassi generale è la seguente:
let nome = "luca";

if(nome == "luca"){ 
    console.log(true);         true
}else{
    console.log(false);
}

^ else if
? ogni else if ci permette di avere una condizione
let age = 90;

if (age <= 2) {
    console.log("bebe");
} else if(age <= 15){
    console.log("adolescent");
} else if(age <= 25){
    console.log("jeune");
} else if(age <= 50){
    console.log("homme");
} else if(age <= 90){
    console.log("viellard");    //viellard
} else{
    console.log("je ne connait pas l'age");
}


^ innestare if
let numero = 16;

if(numero < 20){
    if(numero % 2 == 0){
        console.log(true);
    }
}else{
    console.log(false);          true
}

let numero = 17;

if(numero % 2 == 0){
    console.log(true);
}else{
    console.log(false);      false
}


^ operatori logici         (AND.  &&)       (OR.  ||)         (NOT.  !)
? In JavaScript, gli operatori logici sono utilizzati per combinare espressioni booleane (vero o falso) e determinare il risultato finale. Ci sono tre operatori logici principali:
& && (E logico): restituisce vero solo se entrambe le espressioni sono vere
let numero = 16;

if(numero < 20 && numero % 2 == 0){
    console.log(true);
}else{
    console.log(false);        true
}


& || (O logico): restituisce vero se almeno una delle espressioni è vera
let numero = 22;

if(numero > 20 || numero % 2 == 0){
    console.log(true);
}else{
    console.log(false);        true
}


& ! (non logico): nega l'espressione, cambiando un valore vero in falso e viceversa.
let nome = "luca";

if(!(nome == "luca")){
    console.log(true);
}else{
    console.log(false);      //false
}



^ switch statement
? Il costrutto switch in JavaScript è utilizzato per eseguire uno dei tanti blocchi di codice a seconda del valore di una determinata espressione.
? il (break) serve per fermare la condizione se l'ha trovato, La sintassi generale è la seguente:
let calendario = 6;

switch (calendario) {
    case 1: 
    console.log("jennaio");
    break;
    case 2: 
    console.log("febbraio");
    break;
    case 3: 
    console.log("marzo");
    break;
    case 4: 
    console.log("aprile");
    break;
    case 5: 
    console.log("maggio");
    break;
    case 6: 
    console.log("giugno");     //giugno
    break;
    case 7: 
    console.log("luglio");
    break;
    case 8: 
    console.log("agosto");
    break;
    case 9: 
    console.log("settembre");
    break;
    case 10: 
    console.log("ottobre");
    break;
    case 11: 
    console.log("novembre");
    break;
    case 12: 
    console.log("dicembre");
    default:
        console.log("non trovato");
}


^ ternary operator  (codizione) ? si : no
? L'operatore ternario in JavaScript è un modo breve e conciso per scrivere una istruzione if-else. La sintassi generale è la seguente:
let numero = 15;
let risultato = (numero > 20) ? true : false;
console.log(risultato);       false
*/