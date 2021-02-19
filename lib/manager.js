const Employee = require('./Employee');

class Manager extends Employee {
    constructor(name, id, email, officeNumber) {
        super(name, id, email);
        this.officeNumber = officeNumber;
        this.name = name;
        this.id = id;
        this.email = email;
    }
    office(officeNumber) {
        // console.log(this.officeNumber);
        // console.log(this.email)
        this.officeNumber = officeNumber
        console.log(officeNumber)
    }
    getRole(){
        return "Manager"
    }
}

module.exports = Manager