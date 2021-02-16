const Employee = require('./Employee');

class Manager extends Employee {
    constructor(officeNumber) {
        super(name, "Manager"+num, email);
        this.officeNumber = officeNumber;
    }
    office() {
        return inquirer
            .prompt([
              {
                type: "input",
                message: "What is the Manager's office number?",
                name: "manNum",
              },
            ])
            .then((response) => {
              response.manNum = this.officeNumber;
              this.getRole();
            }); 
    }
    getRole(){
        return "Manager"
    }
}

module.exports = Manager