const Employee = require("../lib/employee");

describe("Employee", () => {
  describe("Initialisation", () => {
    it("Should return an object with the name to equal Ben", () => {
      const newEmployee = new Employee("Ben", "1", "email");

      expect(newEmployee.name).toEqual("Ben");
    });
    it("Should return an object with the id to equa 1 ", () => {
      const newEmployee = new Employee("Ben", "1", "email");

      expect(newEmployee.id).toEqual("1");
    });
    it("Should return an object with the email to equal email ", () => {
      const newEmployee = new Employee("Ben", "1", "email");

      expect(newEmployee.email).toEqual("email");
    });
  });
});
