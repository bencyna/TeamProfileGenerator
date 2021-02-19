const Employee = require("./Employee");

class Engineer extends Employee {
  constructor(name, id, email, github) {
    super(name, id, email);
    this.github = github;
  }
  getGithub(github) {
    this.github = github;
    console.log(this.email);
    console.log(this.github)
  }
}

module.exports = Engineer;
