const Manager = require("../lib/Manager");

describe("Manager", () => {
  describe("Initialisation", () => {
    it("Should return an object with the name to equal Ben", () => {
      const newManager = new Manager(
        "Ben",
        "2",
        "email",
        "officeNumber",
        "Manager"
      );

      expect(newManager.name).toEqual("Ben");
    });
    it("Should return an object with the id to equal 2", () => {
      const newManager = new Manager(
        "Ben",
        "2",
        "email",
        "officeNumber",
        "Manager"
      );

      expect(newManager.id).toEqual("2");
    });
    it("Should return an object with the email to equal email", () => {
      const newManager = new Manager(
        "Ben",
        "2",
        "email",
        "officeNumber",
        "Manager"
      );

      expect(newManager.email).toEqual("email");
    });
    it("Should return an object with the office number to equal officeNumber", () => {
      const newManager = new Manager(
        "Ben",
        "2",
        "email",
        "officeNumber",
        "Manager"
      );

      expect(newManager.officeNumber).toEqual("officeNumber");
    });
    it("Should return an object with the role to equal role", () => {
      const newManager = new Manager(
        "Ben",
        "2",
        "email",
        "officeNumber",
        "Manager"
      );
      expect(newManager.role).toEqual("Manager");
    });
  });
});
