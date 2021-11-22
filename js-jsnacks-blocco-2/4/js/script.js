// Crea un array vuoto e chiedi all’utente un numero
//  * da inserire nell’array. Continua a chiedere i numeri
//  * all’utente e a inserirli nell’array fino a quando
//  * a somma degli elementi è minore di 50.

const numberArray = [];
let numberArraySum = 0;

while ( numberArraySum < 50 ) {
    userNumber = parseInt(prompt('dimmi un numero') );
    numberArraySum += userNumber
    numberArray.push(numberArraySum);   
}