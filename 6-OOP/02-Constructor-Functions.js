"use strict";

console.log(`----- Constructor Functions -----`);

// Constructor functions and the new operator
const Person = function (name, birthYear) {
  this.name = name;
  this.birthYear = birthYear;
};

Person.prototype.country = "USA";
Person.prototype.calcAge = function () {
  return new Date().getFullYear() - this.birthYear;
};
Person.about = () => console.log(`Person class`);

const justin = new Person("Justin", 2000);

// The prototype of justin is Student.prototype.
console.log(justin.__proto__ === Person.prototype);
console.log(Person.prototype.isPrototypeOf(justin));
