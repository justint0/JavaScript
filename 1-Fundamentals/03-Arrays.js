"use strict";

console.log(`----- Arrays -----`);

/* Arrays

Arrays are containers / objects where we can store values.
We can create arrays using bracket notation or the new operator.
*/

// Bracket notation.
const countries = ["United States", "Canada", "France", "Mexico"];

// new operator
const companies = new Array("Amazon", "Apple", "Google", "Meta", "Microsoft");

// Accessing data in an array
console.log(countries[0]);
console.log(countries[countries.length - 1]);

// Getting length of array
console.log(`I have ${companies.length} companies listed!`);

// Changing the elements in an array
countries[3] = "Germany";
console.log(countries);

// Basic array operations

const names = ["Albert", "Bob", "Chris", "David"];

// .push add elements to the end of array. It returns the length of the array.
names.push("Evan");

// .unshift adds elements to the beginning of the array. It returns the length of the array.
names.unshift("Aidan");

// .pop removes the last element of the array. It returns the removed element.
names.pop();

// .shift removes the first element of the array. It returns the removed element.
names.shift();

// .indexOf returns the index of a given element.
names.indexOf("Chris");

// .includes returns true if an element is in the array.
names.includes("Stephen");
