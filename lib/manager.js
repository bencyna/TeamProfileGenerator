const Employee = require('./Employee');

class Manager extends Employee {
    constructor(name, id, email, officeNumber, role) {
        super(name, id, email);
        this.officeNumber = officeNumber;
        this.role = role;
    }
    office(officeNumber) {
        // console.log(this.officeNumber);
        // console.log(this.email)
        this.officeNumber = officeNumber
        console.log(officeNumber)
    }
    getRole(Employee){
        Employee = "Manager"
    }
}

module.exports = Manager