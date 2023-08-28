class PersonCl {
  constructor(name, birthYear) {
    this.name = name;
    this.birthYear = birthYear;
  }

  getName() {
    return this.name;
  }
}

// Child class
class EmployeeCl extends PersonCl {
  constructor(name, birthYear, company) {
    // call superclass constructor
    super(name, birthYear);
    this.company = company;
  }

  getCompany() {
    return this.company;
  }
}
