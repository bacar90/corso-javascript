/*
! LEZIONE 3
^ tutti i numeri
& 1. interi
& 2. float
& 3. double
& 4. binary
& 5. octal
& 6. esadecimali


^ convertire stringhe in numero
let numero = "43";
console.log(Number(numero) + 3);     //46


^ convertire numeri in stringhe
let numero = 50;
let numeroStringhe = "50 " + numero.toString();
console.log(numeroStringhe);     // 50 50


^ operatori                     + - * / % **
divisione e molteplicazzione hanno la precedenza


^ operatori di incremento e decremento               ++ --
let numero = 10;
numero --;      //9
numero ++;      //11


^ operatori di assegnazione              = += -= /= *=
let numero = 10;
numero += 5;      //15

let numero = 10;
numero -= 5;       //5

let numero = 10;
numero *= 5;      //50

let numero = 10;
numero /= 5;      //2

^ operatori comparativi    ===   !==   ==   !=   < >   <=   >=
? ===   Strict uguale a : se gli operandi sono uguali e dello stesso tipo	5==='5'; //false
& ===
let numero = "20";

if(numero === 20){
    console.log(true);
}else{
    console.log(false);       false
}


? !==   Strict non uguale a : se gli operandi sono uguali ma di tipo diverso o non uguali affatto	5!=='5'; //true
& !==
let numero = "20";

if(numero !== 20){
    console.log(true);
}else{
    console.log(false);       true
}


? ==    Uguale a : se gli operandi sono uguali	5==5; //true
& ==
let numero = "20";

if(numero == 20){
    console.log(true);
}else{
    console.log(false);     true
}


? !=    Diverso da : se gli operandi non sono uguali	5!=5; //false
& !=
let numero = "20";

if(numero != 20){
    console.log(true);
}else{
    console.log(false);     false
}


? <     Minore di : se l'operando di sinistra è minore dell'operando di destra	3<2; //false
& <
let numero = "20";

if(numero < 20){
    console.log(true);
}else{
    console.log(false);      false
}


? >     Maggiore di : se l'operando di sinistra è maggiore dell'operando di destra	3>2; //true
& >
let numero = "20";

if(numero > 20){
    console.log(true);
}else{
    console.log(false);      false
}


? <=    Minore o uguale a : se l'operando di sinistra è minore o uguale all'operando di destra	2<=2; //true
& <=
let numero = "20";

if(numero <= 20){
    console.log(true);
}else{
    console.log(false);      true
}


? >=    Maggiore o uguale a : true se l'operando di sinistra è maggiore o uguale all'operando di destra	3>=3; //true
& >=
let numero = "20";

if(numero >= 20){
    console.log(true);
}else{
    console.log(false);      true
}


*/