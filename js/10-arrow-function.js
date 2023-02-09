/*
^ Arrow functio() syntax
let saluti = () => {
    console.log("ciao a tutti");
}
saluti();


^ Arrow functio() syntax con parametri
let saluti = (parametri1, parametri2, parametri3) => {
    console.log("ciao a tutti", parametri1, parametri2, parametri3);
}
saluti("valore", "valore", "valore");


? esempio
let calcoloRettangolo = (lu, la) => {
    return lu * la;
}
console.log(calcoloRettangolo(15, 10));


? altro esempio piu semplice
let calcoloRettangolo = (lu, la) => lu * la;
console.log(calcoloRettangolo(15, 10));


? esempio
let persona = (nome, cognome) => {
    console.log("presentazione", nome, cognome);
}
persona("mario", "rossi");    //presentazione mario rossi


? altro esempio piu semplice
let persona = (nome, cognome) => console.log("presentazione", nome, cognome);
persona("mario", "rossi");    //presentazione mario rossi


^ inserire direttamente un valore dentro i parentesi (parametro = "valore")
let persona = (nome = "luca") => console.log("ciao", nome);
persona();   //ciao luca












*/