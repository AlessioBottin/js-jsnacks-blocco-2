// Crea un array di numeri interi e fai la somma di tutti gli elementi
//  * che sono in posizione dispari

const numberArray = [1, 2, 4, 67, 76, 102, 23];
let sum = 0;

for ( i = 0; i < numberArray.length; i++ ) {
    let thisNumber = numberArray[i];

    if ( i % 2 !== 0 ) {
        sum = sum + thisNumber;
    }
}

console.log(sum);