/*
! LEZIONE 8
^ In JavaScript, i loop sono utilizzati per eseguire un'azione più volte fino a quando non viene soddisfatta una determinata condizione. Ci sono tre tipi di loop in JavaScript:

& For loop: viene utilizzato per eseguire un blocco di codice un determinato numero di volte. Ha un contatore che viene incrementato ad ogni iterazione del loop.
? per tutte le volte in cui; partendo da zero; fino a quando [i] e minore di 20;aumenteremo alla fine di ogni iterazzione
const numero = 20
for(let i = 0; i < 20; i++){       //for(initialisateur; condition; incrementateur)
    console.log(`ciclo${i}`);
}


& While loop: viene utilizzato per eseguire un blocco di codice fino a quando una determinata condizione è vera.
let numeri = 30;
let i = 0;                         initialisateur
while(i < numeri){                 while(condition){
    console.log(`ciclo${i}`);      expression...
    i++;                           incrementateur
}                                  }


& Do...while loop: è simile al while loop, ma la sua condizione viene controllata alla fine del loop. Ciò significa che il codice all'interno del loop verrà eseguito almeno una volta, anche se la condizione non è vera.
let numeri = 50;
let i = 0;                            initialisateur
do{                                   do{  
    console.log(`ciclo${i}`);        expression...
    i++;                             incrementateur
}while(i < numeri);                  }while(condition)

? In ogni loop, è importante che la condizione di uscita sia definita in modo corretto, altrimenti il loop potrebbe continuare all'infinito causando un blocco del sistema.


^ uscire dai loop con (break)
let numeri = [10,20,30,40,50,60];

for(let i = 0; i < numeri.length; i++){
    
    console.log(numeri[i]);      //10,20,30
    
    if(numeri[i] == 30){  
        
        break;
    }
}


^ saltare l'intarazione con (continue)
let numeri = [10,20,30,40,50,60];

for(let i = 0; i < numeri.length; i++){
    
    if(numeri[i] == 30){
        continue;
    }
    console.log(numeri[i]);       //10,20,40,50,60
}







*/