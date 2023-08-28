"use strict";

console.log(`----- Reduce -----`);

/*
Reduce Method

The reduce() method executes a user-supplied "reducer" callback function on each element of the array, in order, passing in the return value from the calculation on the preceding element. The final result of running the reducer across all elements of the array is a single value.
*/

const array1 = [1, 2, 3, 4];
const initialValue = 0;
const sumWithInitial = array1.reduce(
  (accumulator, currentValue) => accumulator + currentValue,
  initialValue
);

console.log(sumWithInitial);

//

const letters = ["h", "e", "y"];
const string = letters.reduce(
  (accumulator, currentLetter) => accumulator + currentLetter,
  ""
);

console.log(string);
