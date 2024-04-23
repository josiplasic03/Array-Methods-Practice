// Metoda za računanje dužine niza (broji broj indeksa počevši od nule)
let niz = [1, 2, 3, 4, 5];

console.log(niz.length); // Output 5.

// Metoda za parsiranje niza u string
let fruits = ["Banana", "Orange", "Apple", "Mango"];
console.log(fruits.toString()); // Output Banana,Orange,Apple,Mango


// Metode koje vracaju indeksirani element
let fruitss = ["Banana", "Orange", "Apple", "Mango"];
let fruit = fruitss.at(2); // Output Apple
// Ova metoda vraća isti rezultat kao bracket notacija -> []

// Metoda .join sluzi za parsiranje niza u string, razlikuje se od toString() zato što se mogu definirati separatori
let joinArray = [1, 2, 3, 4];
console.log(joinArray.split("=")); // Output 1=2=3=4

// Metode za uklanjanje i dodavanje elemenata u nizove
// .pop() sluzi za uklanjanje zadnjeg elementa u nizu i returna vraceni element
let popArray = [1, 2, 3, 4];
console.log(popArray.pop()); // Output -> 4

// .push() sluzi za dodavanje elementa na posljednje mjesto u nizu. Stvara promjene na postojecem nizu, ne vraca novi niz!
let pushArray = [1, 2, 3, 4];
console.log(pushArray.push(99)); // Output -> 5 Ali je number 99 uspjesno dodan na kraj niza

// Shifting metode.
// .shift() metoda stvara promjene na niz tako što uklanja element sa prvog indexa i smanjuje svim elementima index za 1. Vraca uklonjenu vrijednost.
let shiftArray = [1, 2, 3, 4];
console.log(shiftArray.shift()); // Output -> 1

// .unshift() metoda sluzi za dodavanje elemenata na pocetak niza, vraca novu duzinu niza.
let unshiftArray = [3, 4, 5];
console.log(unshiftArray.unshift(1, 2)) // Output -> 5

// Direktno mijenjanje elemenata u nizu preko indexa
let bracketArray = [1, 2, 3, 4, 10];
bracketArray[4] = 5;
console.log(bracketArray) // -> Output -> [ 1, 2, 3, 4, 5 ]


// Dodavanje elementa na kraj preko bracket i metode
let lengthArray = [1, 2, 3];
lengthArray[lengthArray.length] = 4;
console.log(lengthArray); // Output -> [ 1, 2, 3, 4 ]

// Operator .delete kada se koristi nad nizom ostavlja undefined rupe po nizu.
let deletedArray = [1, 2, 3, 4, 5];
delete deletedArray[0]
console.log(deletedArray) // Output -> [ <1 empty item>, 2, 3, 4, 5 ]

// U programiranju concatenation znaci spajanje od pocetka do kraja, u ovom slucaju znaci spajanje nizova od pocetka do kraja.
// Vazno je napomenuti da .concat() kreira novi niz, a stari ostaje nepromijenjen!
const array1 = ["Cecilie", "Lone"];
const array2 = ["Emil", "Tobias", "Linus"];
const array3 = ["Robin", "Morgan"];

const concatArray = array1.concat(array2, array3);

console.log(concatArray); // Output -> [
/*     'Cecilie', 'Lone',
    'Emil',    'Tobias',
    'Linus',   'Robin',
    'Morgan'
  ] */

// Također concatenation radi i sa stringovima.
let example1 = 'Snow';
let example2 = 'Ball';
let concatenedString = example1.concat(example2);
console.log(concatenedString); // Output -> SnowBall

let nameArray = ['Josip'];
let nameArrayAdd = nameArray.concat("Lasić");
console.log(nameArrayAdd); // Output -> 
