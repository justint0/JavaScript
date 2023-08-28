"use strict";

console.log(`----- Spread Operator and Rest Operator -----`);

/* Spread Operator

The spread operator (...) allows us to quickly copy all or part of an existing array or object into another array or object. The spread operator works on all iterables.
*/

const base = ["Dough", "Cheese", "Sauce"];
const toppings = ["Pepperoni", "Chicken", "Vegetables"];
const pizzaIngredients = [...base, ...toppings];
console.log(pizzaIngredients);

/* Rest operator

The rest operator (...) allows a function to treat an indefinite number of arguments as an array.
*/

const greetEveryone = function (...names) {
  for (let i = 0; i < names.length; i++) console.log(`Hello ${names[i]}`);
};
greetEveryone("Alice", "Bob", "Charlie", "David");
