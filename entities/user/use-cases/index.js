const makeSignupUser = require("./signup-user");
const userDb = require("../data-access");

const signupUser = makeSignupUser({userDb});

const userService = Object.freeze({
  signupUser,
});

module.exports = userService;
