const Employee = require("./Employee");

    class Intern extends Employee {
        constructor(school) {
            super (name, "Intern"+num, email);
            this.school = school; 
        }
        getSchool(){
            return inquirer
            .prompt([
              {
                type: "input",
                message: "What school does the intern attend?",
                name: "schoolAttend",
              },
            ])
            .then((response) => {
              console.log(response.schoolAttend);
            }); 
        }
        getRole(Employee) {
            return "Intern"
        }
    }
