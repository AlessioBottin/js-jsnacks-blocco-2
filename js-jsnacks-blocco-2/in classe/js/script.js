// Il software deve chiedere per 5 volte all’utente di inserire un numero.
// Il programma stampa la somma di tutti i numeri inseriti.
// Esegui questo programma in due versioni, con il for e con il while (facoltativo)

let result = 0;

for ( let i = 0; i < 5; i++) {
    userNumber = parseInt( prompt('dimmi un numero') );
    console.log(userNumber);
    result += userNumber;
    console.log(result);
}

// oppure 
// let i = 0;
// while ( i < 5) {
//     userNumber = parseInt( prompt('dimmi un numero') );
//     console.log(userNumber);
//     result += userNumber;
//     console.log(result);

//     i++;
// }


// ALtro es 
let numberList = [];

while (numberList.length < 3) {
    userNumber = parseInt( prompt('dimmi un numero') );

    if ( userNumber % 2 !== 0 ) {
        numberList.push(userNumber)
    }
}