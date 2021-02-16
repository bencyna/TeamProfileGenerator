const Employee = require("./Employee");
const inquirer = require("inquirer");

class Engineer extends Employee {
  constructor(github) {
    super("hello", "Engineer", "hello");
    this.github = github;
  }
  getGithub() {
    return inquirer
      .prompt([
        {
          type: "input",
          message: "What is this employees github link?",
          name: "githubLink",
        },
      ])
      .then((response) => {
        console.log(response.githubLink);
      });
  }
  getRole(Employee) {
    return "Engineer";
  }
}
const character = new Engineer("jeff", "jeff1", "@jeff");
character.getGithub();
