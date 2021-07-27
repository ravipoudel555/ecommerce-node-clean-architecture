const makeSignupUser = require("./signup-user");
const makeLoginUser = require("./login-user");
const userDb = require("../data-access");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const signupUser = makeSignupUser({userDb});
const loginUser = makeLoginUser({userDb, tokenGenerator, passwordComparator});

const userService = Object.freeze({
  signupUser,
  loginUser,
});

module.exports = userService;

function tokenGenerator({email, id}) {
  return jwt.sign({email, id}, "secret", {expiresIn: "1hr"});
}

function passwordComparator({savedPassword, newPassword}) {
  return bcrypt.compareSync(savedPassword, newPassword);
}
