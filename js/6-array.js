/*
! LEZIONE 6
^ creare un array
let citta = ["milano","napoli","roma","torino","firenze"];


^ Accedere e modificare dati in un array
let citta = ["milano","napoli","roma","torino","firenze"]
console.log(citta[3]);      //torino


^ lunghezza di un array
let citta = ["milano","napoli","roma","torino","firenze"];
console.log(citta.length);      //5


^ come possiamo convertire stringhe in array
& split() vuol dire da stringhe a array
let citta = "milano, roma, napoli, torino, firenze";
console.log(citta.split(",")); //(5) ['milano', ' roma', ' napoli', ' torino', ' firenze']


^ come possiamo convertire array in stringhe
& join() vuol dire da array a stringhe
let citta = ["roma","milano","napoli","torino","firenze"];
console.log(citta.join(","));  //roma,milano,napoli,torino,firenze


^ come aggiungere e rimuovere elementi di un array:
& push()  aggiunge alla fine
let citta = ["roma","milano","napoli","torino","firenze"];
citta.push("venezia");
console.log(citta);  //(6) ['roma', 'milano', 'napoli', 'torino', 'firenze', 'venezia']


& pop()  rimuove alla fine
let citta = ["roma","milano","napoli","torino","firenze"];
citta.pop();
console.log(citta);  //(4) ['roma', 'milano', 'napoli', 'torino']


& unshift()   aggiunge all'inizio
let citta = ["roma","milano","napoli","torino","firenze"];
citta.unshift("venezia");
console.log(citta);  //(6) ['venezia', 'roma', 'milano', 'napoli', 'torino', 'firenze']


& shift()  rimuove all'inizio
let citta = ["roma","milano","napoli","torino","firenze"];
citta.shift();
console.log(citta);  //(4) ['milano', 'napoli', 'torino', 'firenze']


*/