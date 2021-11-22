// Generatore di “nomi cognomi” casuali: prendendo
// * una lista di nomi e una lista di cognomi,
// * Gatsby vuole generare una falsa lista di invitati.

const firstNameArray = ['Alessandro', 'Giulio', 'Andrea', 'Marta', 'Marco', 'Vanessa'];
const lastNameArray = ['Rossi', 'Tonucci', 'Talè', 'Bonci', 'Marinelli'];

// Genero un numero per il primo e uno per il secondo array casualmente
let firstArrayLength = firstNameArray.length - 1;
const firstArrayNumber = getRndInteger(1, firstArrayLength);
console.log(firstArrayNumber);

let secondArrayLength = lastNameArray.length - 1;
const secondArrayNumber = getRndInteger(1, secondArrayLength);
console.log(secondArrayNumber);

console.log( firstNameArray[firstArrayNumber] + ' ' + lastNameArray[secondArrayNumber] );


// FUNCTIONS
// genera numero casuale da min a max inclusi

function getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min + 1) ) + min;
}
  