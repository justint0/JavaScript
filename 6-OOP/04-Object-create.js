"use strict";

console.log(`----- Object.create() -----`);

const PersonProto = {
  init(name, birthYear) {
    this.name = name;
    this.birthYear = birthYear;
  },

  calcAge() {
    return new Date().getFullYear() - birthYear;
  },
};

const justin = Object.create(PersonProto);
justin.init("Justin", 2000);
