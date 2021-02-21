const Engineer = require("../lib/Engineer");

describe("Engineer", () => {
    describe("Initialisation", () => {
        it("Should return an object with the name, id, email address, github and role", () => {
            const newEngineer = new Engineer ("Ben", "2", "email", "github", "Engineer" )

            expect(newEngineer.name).toEqual("Ben");
            expect(newEngineer.id).toEqual("2");
            expect(newEngineer.email).toEqual("email");
            expect(newEngineer.github).toEqual("github");
            expect(newEngineer.role).toEqual("Engineer");
        });
    });
});