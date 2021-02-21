const Employee = require("./Employee");

class Engineer extends Employee {
  constructor(name, id, email, github, role) {
    super(name, id, email);
    this.github = github;
    this.role = role;
  }
  getGithub(github) {
    this.github = github;
  }
  getRole(Employee){
    Employee = "Engineer"
  }
}

module.exports = Engineer;
