"use strict";

console.log(`----- ES6 Classes -----`);

/* ES6 Classes and accessor properties

Classes are hoisted with an uninitialized value, are first-class citizens, and are executed in strict mode.

In JavaScript, accessor properties are methods that get or set the value of an object. For that, we use these two keywords:

  get - to define a getter method to get the property value
  set - to define a setter method to set the property value

Classes can have public methods, private methods, public fields, and private fields.
*/

class Person {
  constructor(name, birthYear) {
    this.name = name;
    this.birthYear = birthYear;
  }

  get getName() {
    return this.firstName;
  }

  set changeName(newName) {
    this.name = newName;
  }

  introduce() {
    console.log(`Hello, my name is ${this.firstName}.`);
  }

  static about = () => console.log(`Person class`);
}

const justin = new Person("Justin", 2000);
