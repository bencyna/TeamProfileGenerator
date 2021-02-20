const Employee = require("./Employee");

    class Intern extends Employee {
        constructor(name, id, email, school, role) {
            super(name, id, email);
            this.school = school; 
            this.role = role;
        }
        getSchool(school){
          this.school = school
          console.log(this.school)
      }
      getRole(Employee) {
          Employee = "Intern"
      }
    }

    module.exports = Intern
