"use strict";

console.log(`----- Bind Method -----`);

/* Bind Method

With the bind() method, an object can borrow a method from another object.
*/

const teacher = {
  firstName: "John",
  lastName: "Higgins",
  fullName: function () {
    return this.firstName + " " + this.lastName;
  },
};

const student = {
  firstName: "David",
  lastName: "Green",
};

let fullName = teacher.fullName.bind(student);
console.log(fullName);
