"use strict";

console.log(`----- Logical Operator -----`);

/* Short Circuiting (&& and ||)

OR operator ( || ) returns the first true value or the last value if all of them are false. Use OR to set default values.

AND operator ( && ) returns the first false value or the last value if all of them are true. Use AND to create conditionals.

Nullish coalescing operator (??) works exactly the same as OR operator except only nullish values short circuit the evaluation.
*/

// Prints "Hello world!"
console.log(0 || null || "" || undefined || false || "Hello world!");

let suspect;
suspect === undefined && console.log("Suspect has not been identified.");

// Prints 0
console.log(null ?? undefined ?? 0 ?? "Hello world!");

/* Logical Assignment Operators

OR assigns a value to a variable if that variable is false.
Nullish assigns a value to a variable if that variable is nullish.
AND assigns a value to a variable if that variable is true
*/

const myCity = {
  name: "Stamford",
  state: "Connecticut",
  motto: "Moving Forward With People",
  population: 0,
  secretary: "",
};

myCity.secretary ||= "Stephanie";
myCity.population ??= 136309;
myCity.motto &&= "The City That Works";

console.log(myCity);

// Optional Chaining - if a property does not exist, undefined is returned.
const guests = [{ name: "Jack", age: 20 }];

console.log(guests[0]?.name ?? "Array is empty");
