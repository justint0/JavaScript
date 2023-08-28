"use strict";

console.log(`----- Objects -----`);

/* Objects

An object is an unordered collection of key-value pairs. Each key-value pair is called a property. There are different ways to create new objects. The example uses object literals.
*/

const character = {
  firstName: "Curtis",
  lastName: "Connors",
  alias: "Lizard",
  specialty: "biology",
  yearCreated: 1963,
  printBio: function () {
    console.log(
      `${this.firstName} ${this.lastName}, also known as ${this.alias}, is a master of ${this.specialty} and was introduced in the year ${this.yearCreated}.`
    );
  },
};

// Add new property to object. We can also add properties using the this keyword inside a function expression.
character.nemesis = "Spider-Man";

// Access data using dot or bracket notation
console.log(character.nemesis);
console.log(character["nemesis"]);

// The this keyword points to the object calling the method.
character.printBio();
