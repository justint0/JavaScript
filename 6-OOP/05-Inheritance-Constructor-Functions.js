function Person(name, birthYear) {
  this.name = name;
  this.birthYear = birthYear;
}

Person.prototype.getName = function () {
  return this.name;
};

// Child constructor function
function Employee(name, birthYear, company) {
  Person.call(this, name, birthYear);
  this.company = company;
}

// Setting the prototype of the child constructor function
Employee.prototype = Object.create(Person.prototype);
Employee.prototype.constructor = Employee;

Employee.prototype.getCompany = function () {
  return this.company;
};
