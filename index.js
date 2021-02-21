const Employee = require("./lib/Employee");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const Manager = require("./lib/Manager");
const inquirer = require("inquirer");
const fs = require("fs");

let responses = [];

const genMan = () => {
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
      const newManager = new Manager(name, id, email, manNum, "Manager");
      newManager.office(manNum);
      newManager.getRole("Manager");
      responses.push(newManager);
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
      const { name, email, id, schoolAttend } = res;
      const newIntern = new Intern(name, id, email, schoolAttend, "Intern");
      newIntern.getRole("Intern");
      newIntern.getSchool(schoolAttend);
      responses.push(newIntern);
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
      },
    ])
    .then((results) => {
      const { name, email, id, github } = results;
      const newEngineer = new Engineer(name, id, email, github, "Engineer");
      newEngineer.getGithub(github);
      newEngineer.getRole("Engineer");
      responses.push(newEngineer);
      genInOrEngorEx();
    });
};

const writeFile = () => {
  let newFile = "";
  let addToFile = "";

  for (let i = 0; i < responses.length; i++) {
    let employee = responses[i];
    let personName = employee.name;
    let personEmail = employee.email;
    let personId = employee.id;
    let personRole = employee.role;
    let extDet = "";

    if (employee.officeNumber) {
      extDet = `Office Number: ${employee.officeNumber}`;
    }
    if (employee.github) {
      extDet = `Github: <a href = "${employee.github}" target = "_blank">Github</a>`;
    }
    if (employee.school) {
      extDet = `School: ${employee.school}`;
    }

    addToFile += 
`<div class="col-md-4 person">
              <header class="main">
                <h4>${personName}</h4>
                <h6>${personRole}</h6>
              </header>  
              <div class="bio">
                <ul>
                  <li>id: ${personId}</li>
                  <li>Email: <a href="mailto:${personEmail}"> ${personEmail} </a></li>
                  <li>${extDet}</li>
                </ul>
              </div> 
            </div>`;
  }

  newFile = newFile = 
  `<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Team Generator</title>
    <link rel="stylesheet" href="./assets/style.css" />
    <link
      href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta2/dist/css/bootstrap.min.css"
      rel="stylesheet"
      integrity="sha384-BmbxuPwQa2lc/FVzBcNJ7UAyJxM6wuqIj61tLrc4wSX0szH/Ev+nYRRuWlolflfl"
      crossorigin="anonymous"
    />
  </head>
  <body style="background-color: #203647;">
    <header id="head"> 
      <h1>Our Team</h1>
    </header>
    <main class="container">
      <div class="row">
        <div class="col-md-9">
          <section class="row people">
            ${addToFile}                         
          </section>
        </div>
      </div>
    </main>
  </body>
</html>
`;

  fs.writeFile("./dist/index.html", newFile, null, (err) => {
    err
      ? console.log("Oops, there was a problem: " + err)
      : console.log(responses[0].name);
  });
};
