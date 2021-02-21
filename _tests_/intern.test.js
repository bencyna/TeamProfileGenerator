const Intern = require("../lib/Intern");

describe("Intern", () => {
    describe("Initialisation", () => {
        it("Should return an object with the name, id, email address, school and role", () => {
            const newIntern = new Intern ("Ben", "2", "email", "school", "Intern" )

            expect(newIntern.name).toEqual("Ben");
            expect(newIntern.id).toEqual("2");
            expect(newIntern.email).toEqual("email");
            expect(newIntern.school).toEqual("school");
            expect(newIntern.role).toEqual("Intern");
        });
    });
});