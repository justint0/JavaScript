"use strict";

console.log(`----- Looping Arrays and Objects -----`);

/* Looping Arrays and Objects: for-of and for-in

for-of provides access to the values of those keys.

for-in provides access to the object keys.
*/

// Arrays
const students = ["Abby", "Blake", "Charlie"];

for (const student of students) {
  console.log(`Hello ${student}!`);
}

for (const student in students) {
  console.log(`This is student #${student}!`);
}

// Objects
const myCity = {
  name: "Stamford",
  state: "Connecticut",
  population: 136309,
};

// Get keys and values
const keys = Object.keys(myCity);
const values = Object.values(myCity);
console.log(keys, values);

// Get both using Object.entries
for (const [key, value] of Object.entries(myCity)) {
  console.log(`${key}, ${value}`);
}
