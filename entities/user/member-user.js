module.exports = function buildMakeMemberUser({requiredParam, emailValidator}) {
  return function makeMemberUser({
    email = requiredParam("email"),
    password = requiredParam("password"),
  }) {
    if (!emailValidator(email)) {
      throw new Error("Invalid email.");
    }

    if (password.trim().length < 8) {
      throw new Error("Password  must be at least 8 characters long");
    }

    return Object.freeze({
      getEmail: () => email,
      getPassword: () => password,
    });
  };
};
