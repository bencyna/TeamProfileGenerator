const Manager = require("../lib/Manager");

describe("Manager", () => {
    describe("Initialisation", () => {
        it("Should return an object with the name, id, email address, github and role", () => {
            const newManager = new Manager ("Ben", "2", "email", "officeNumber", "Manager" )

            expect(newManager.name).toEqual("Ben");
            expect(newManager.id).toEqual("2");
            expect(newManager.email).toEqual("email");
            expect(newManager.officeNumber).toEqual("officeNumber");
            expect(newManager.role).toEqual("Manager");
        });
    });
});