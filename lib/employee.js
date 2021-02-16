const inquirer = require("inquirer");

class Employee {
    constructor(name, id, email) {
        this.id = id;
        this.name = name;
        this.email = email;
    }
    getName() {
        return inquirer
        .prompt([
            {
              type: "input",
              message: "What is the name of the employee?",
              name: "name",
            },
          ])
          .then((response) => {
            console.log(response.name);
            this.getId()
          });
    }
    getId() {
        return inquirer
        .prompt([
            {
              type: "input",
              message: "What is the employees ID?",
              name: "id",
            },
          ])
          .then((response) => {
            console.log(response.id);
            this.getEmail()
          });

    }
    getEmail() {
        return inquirer
        .prompt([
            {
              type: "input",
              message: "What is the employees email address?",
              name: "email",
            },
          ])
          .then((response) => {
            console.log(response.email);
            this.getRole()
          });
    }
    getRole(Employee) {
        return inquirer
        .prompt([
            {
              type: "list",
              message: "Add a new employee",
              name: "newEmployee",
              choices: ["Intern", "Engineer", "No thanks, my team is ready!"]
            },
          ])
          .then((response) => {
            console.log(response.newEmployee);
          });
    }
}
const person = new Employee("n", 'm', 'n')
person.getName();

module.exports = Employee;