"use strict";

console.log(`----- Destructuring -----`);

/* Destructuring

The destructuring assignment syntax is a JavaScript expression that makes it possible to unpack values from arrays, or properties from objects, into distinct variables.
*/

// Destructuring arrays
const fruits = ["Apple", "Lemon", "Mango"];
let [app, lem, man] = fruits;
console.log(app, lem, man);

// Swapping variables
let a = 10,
  b = 20;
[a, b] = [b, a];
console.log(a, b);

// Skip variables
const nums = [1, 2, 3, 4, 5];
const [one, two, , four, five] = nums;
console.log(one, two, four, five);

// Destructuring objects
const myCity = {
  name: "Stamford",
  state: "Connecticut",
  motto: "The City That Works",
  population: 136309,
  neighbors: ["Greenwich", "New Canaan", "Darien"],
};

const { name: myCityName, state } = myCity;
console.log(myCityName, state);

// Setting default values.
const { mayor: mayor = "Caroline Simmons" } = myCity;
console.log(mayor);
