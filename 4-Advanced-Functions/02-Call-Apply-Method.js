"use strict";

console.log(`----- Call and Apply Method -----`);

/* Call and Apply Method

The call() method calls the function with a given this value and arguments provided individually.

The apply() method is similar except it takes arguments as an array.
*/

const person = {
  fullName: function (city, country) {
    return this.firstName + " " + this.lastName + "," + city + "," + country;
  },
};

const person1 = {
  firstName: "Kylian",
  lastName: "Mbappe",
};

person.fullName.call(person1, "Paris", "France");
person.fullName.apply(person1, ["Paris", "France"]);
