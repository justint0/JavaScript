"use strict";

console.log(`----- Map -----`);

/* Map 

The map() method creates a new array populated with the results of calling a provided function on every element in the calling array.
*/

const exchangeRate = 0.8;
const dollars = [1, 2, 3];
const pounds = dollars.map((amount, index, array) =>
  Math.round(amount * exchangeRate, 2)
);

console.log(pounds);
