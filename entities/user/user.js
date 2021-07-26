module.exports = function buildMakeUser({
  Id,
  encrypter,
  requiredParam,
  emailValidator,
}) {
  return function makeUser({
    id = Id.makeId(),
    firstName = requiredParam("firstName"),
    lastName = requiredParam("lastName"),
    citizenshipNo = requiredParam("citizenshipNo"),
    email = requiredParam("email"),
    password = requiredParam("password"),
  }) {
    if (!emailValidator(email)) {
      throw new Error("Invalid email.");
    }
    if (!Id.isValidId(id)) {
      throw new Error("User must have a valid id.");
    }
    if (firstName.trim().length < 2) {
      throw new Error("First name  must be longer than 2 characters");
    }
    if (lastName.trim().length < 2) {
      throw new Error("Last name  must be longer than 2 characters");
    }
    if (password.trim().length < 8) {
      throw new Error("Password  must be at least 8 characters long");
    }

    const encryptedPassword = encrypter(password);
    return Object.freeze({
      getId: () => id,
      getFirstName: () => firstName,
      getLastName: () => lastName,
      getEmail: () => email,
      getPassword: () => encryptedPassword,
      getCitizenshipNo: () => citizenshipNo,
    });
  };
};
