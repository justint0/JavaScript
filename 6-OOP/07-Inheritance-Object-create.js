const PersonProto = {
  init(name, birthYear) {
    this.name = name;
    this.birthYear = birthYear;
  },

  calcAge() {
    return new Date().getFullYear() - birthYear;
  },
};

const EmployeeProto = Object.create(PersonProto);

EmployeeProto.init = function (name, birthYear, company) {
  PersonProto.init.call(this, name, birthYear);
  this.company = company;
};

EmployeeProto.getCompany = function () {
  return this.company;
};
