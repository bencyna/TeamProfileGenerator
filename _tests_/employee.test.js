const Employee = require("../lib/employee");

describe("Employee", () => {
    describe("Initialisation", () => {
        it("Should return an object with the name, id, and emsail address", () => {
            const newEmployee = new Employee ("Ben", "1", "email")

            expect(newEmployee.name).toEqual("Ben");
            expect(newEmployee.id).toEqual("1");
            expect(newEmployee.email).toEqual("email");
        });
    });
});
