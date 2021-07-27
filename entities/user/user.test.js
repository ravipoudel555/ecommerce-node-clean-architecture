const makeFakeUser = require("../../__test__/fixtures/user");
const {makeUser} = require("./");
describe("user", () => {
  it("must have first name", () => {
    const user = makeFakeUser({firstName: undefined});
    expect(() => makeUser(user)).toThrow(
      "firstName can not be null or undefined."
    );
  });
  it("must have last name", () => {
    const user = makeFakeUser({lastName: undefined});
    expect(() => makeUser(user)).toThrow(
      "lastName can not be null or undefined."
    );
  });
  it("must have an email", () => {
    const user = makeFakeUser({email: undefined});
    expect(() => makeUser(user)).toThrow("email can not be null or undefined.");
  });
  it("must have a password", () => {
    const user = makeFakeUser({password: undefined});
    expect(() => makeUser(user)).toThrow(
      "password can not be null or undefined."
    );
  });
  it("must have a citizenshipNo", () => {
    const user = makeFakeUser({citizenshipNo: undefined});
    expect(() => makeUser(user)).toThrow(
      "citizenshipNo can not be null or undefined."
    );
  });
  it("must have firstName length of at least 2 characters", () => {
    const user = makeFakeUser({firstName: "a"});
    expect(() => makeUser(user)).toThrow(
      "First name  must be longer than 2 characters"
    );
  });
  it("must have a lastName length of at least 2 characters", () => {
    const user = makeFakeUser({lastName: "b"});
    expect(() => makeUser(user)).toThrow(
      "Last name  must be longer than 2 characters"
    );
  });
  it("must have a password length of at least 8 characters", () => {
    const user = makeFakeUser({password: "1234567"});
    expect(() => makeUser(user)).toThrow(
      "Password  must be at least 8 characters long"
    );
  });
  it("must create an encrypted password", () => {
    const user = makeFakeUser({password: "12345678"});
    expect(makeUser(user).getPassword()).not.toEqual(user.password);
  });

  it("must have a valid email", () => {
    const user = makeFakeUser({email: "ra"});
    expect(() => makeUser(user)).toThrow("Invalid email.");
  });
  it("must uppercase firstName's starting letter", () => {
    const fakeUser = makeFakeUser({firstName: "ravi"});
    const user = makeUser(fakeUser);
    expect(user.getFirstName()).toEqual("Ravi");
  });
  it("must uppercase lastName's starting letter", () => {
    const fakeUser = makeFakeUser({lastName: "poudel"});
    const user = makeUser(fakeUser);
    expect(user.getLastName()).toEqual("Poudel");
  });
});
