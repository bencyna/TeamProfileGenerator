const inquirer = require("inquirer");

class Employee {
  constructor(name, id, email) {
    this.id = id;
    this.name = name;
    this.email = email;
  }
  getName(name) {
    console.log(this.name);
    this.name = name;
  }
  getId(id) {
    this.id = id;
  }
  getEmail(email) {
    this.email = email;
  }
  getRole(Employee) {
    return Employee;
  }
}

module.exports = Employee;
