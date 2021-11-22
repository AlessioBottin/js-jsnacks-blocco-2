let userNumber = parseInt(prompt('dimmi un numero'));
let printedNUmber = userNumber;

if ( userNumber % 2 === 0 ) {
    console.log(printedNUmber)
} else {
    printedNUmber = userNumber + 1 ;
    console.log(printedNUmber);
}