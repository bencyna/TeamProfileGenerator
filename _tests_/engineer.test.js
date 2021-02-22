const Engineer = require("../lib/Engineer");

describe("Engineer", () => {
  describe("Initialisation", () => {
    it("Should return an object with the name to equal Ben", () => {
      const newEngineer = new Engineer(
        "Ben",
        "2",
        "email",
        "github",
        "Engineer"
      );

      expect(newEngineer.name).toEqual("Ben");
    });
    it("Should return an object with the id to equal 2", () => {
      const newEngineer = new Engineer(
        "Ben",
        "2",
        "email",
        "github",
        "Engineer"
      );

      expect(newEngineer.id).toEqual("2");
    });
    it("Should return an object with the email to equal email", () => {
      const newEngineer = new Engineer(
        "Ben",
        "2",
        "email",
        "github",
        "Engineer"
      );

      expect(newEngineer.email).toEqual("email");
    });
  });
  it("Should return an object with the github to equal github",  () => {
    const newEngineer = new Engineer("Ben", "2", "email", "github", "Engineer");

    expect(newEngineer.github).toEqual("github");
  });
  it("Should return an object with the role to equal Engineer", () => {
    const newEngineer = new Engineer("Ben", "2", "email", "github", "Engineer");

    expect(newEngineer.role).toEqual("Engineer");
  });
});
