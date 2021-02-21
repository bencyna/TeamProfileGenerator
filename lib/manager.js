const Employee = require('./Employee');

class Manager extends Employee {
    constructor(name, id, email, officeNumber, role) {
        super(name, id, email);
        this.officeNumber = officeNumber;
        this.role = role;
    }
    office(officeNumber) {
        this.officeNumber = officeNumber
    }
    getRole(Employee){
        Employee = "Manager"
    }
}

module.exports = Manager