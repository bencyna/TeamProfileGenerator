const Intern = require("../lib/Intern");

describe("Intern", () => {
  describe("Initialisation", () => {
    it("Should return an object with the name to equal Ben", () => {
      const newIntern = new Intern("Ben", "2", "email", "school", "Intern");

      expect(newIntern.name).toEqual("Ben");
    });
    it("Should return an object with the id to equal 2", () => {
      const newIntern = new Intern("Ben", "2", "email", "school", "Intern");

      expect(newIntern.id).toEqual("2");
    });
    it("Should return an object with the email to equal email", () => {
      const newIntern = new Intern("Ben", "2", "email", "school", "Intern");

      expect(newIntern.email).toEqual("email");
    });
    it("Should return an object with the school to equal school", () => {
      const newIntern = new Intern("Ben", "2", "email", "school", "Intern");

      expect(newIntern.school).toEqual("school");
    });
    it("Should return an object with the role to equal intern", () => {
      const newIntern = new Intern("Ben", "2", "email", "school", "Intern");

      expect(newIntern.role).toEqual("Intern");
    });
  });
});
