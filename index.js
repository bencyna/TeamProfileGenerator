const Employee = require("./lib/Employee");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const Manager = require("./lib/Manager");
const inquirer = require("inquirer");
const fs = require("fs");

let responses = [];
// let newFile = ``

const genMan = () => {
  // Create an array of questions for user input
  return inquirer
    .prompt([
      {
        type: "input",
        message: "What is the Manager's name?",
        name: "name",
      },
      {
        type: "input",
        message: "What is the Manager's email address?",
        name: "email",
      },
      {
        type: "input",
        message: "What is the Manager's ID?",
        name: "id",
      },
      {
        type: "input",
        message: "What is the Manager's office number?",
        name: "manNum",
      },
    ])
    .then((answers) => {
      const { name, email, id, manNum } = answers;
      const newManager = new Manager(name, id, email, manNum);
      const managerData = [answers];
      console.log(managerData);
      newManager.office(manNum);
      responses.push(managerData);
      genInOrEngorEx();
    });
};

const genInOrEngorEx = () => {
  return inquirer
    .prompt([
      {
        type: "list",
        message: "Add a new employee",
        name: "newEmployee",
        choices: ["Intern", "Engineer", "No thanks, my team is ready!"],
      },
    ])
    .then((res) => {
      if (res.newEmployee == "Intern") {
        genIntern();
      }
        if (res.newEmployee == "Engineer") {
          genEngineer();
      }
        if (res.newEmployee == "No thanks, my team is ready!") {
          writeFile();
        }
    });
};

genMan();

const genIntern = () => {
  return inquirer
    .prompt([
      {
        type: "input",
        message: "What is the Intern's name?",
        name: "name",
      },
      {
        type: "input",
        message: "What is the Intern's email address?",
        name: "email",
      },
      {
        type: "input",
        message: "What is the Intern's ID?",
        name: "id",
      },
      {
        type: "input",
        message: "What school does the intern attend?",
        name: "schoolAttend",
      },
    ])
    .then((res) => {
      const {name, email, id, schoolAttend} = res;
      const newIntern = new Intern(name, id, email, schoolAttend);
      newIntern.getSchool(schoolAttend);
      // responses.push(res);
      // console.log(schoolAttend)
      genInOrEngorEx();
    });
};

const genEngineer = () => {
    return inquirer
    .prompt([
      {
        type: "input",
        message: "What is the Engineer's name?",
        name: "name",
      },
      {
        type: "input",
        message: "What is the Engineer's email address?",
        name: "email",
      },
      {
        type: "input",
        message: "What is the Engineer's ID?",
        name: "id",
      },
      {
        type: "input",
        message: "What is the Engineer's github link?",
        name: "github",
      }
    ])
    .then((results) => {
      const {name, email, id, github} = results;
      const newEngineer = new Engineer(name, id, email, github);
      newEngineer.getGithub(github);
      genInOrEngorEx();
      // responses.push(results);
    });
}


const writeFile = () => {
 newFile = `${responses[1].name}`;
  fs.writeFile("index.html", newFile, null, (err) => {
    err
      ? console.log("Oops, there was a problem: " + err)
      : console.log(responses[1].name);
  });
};
