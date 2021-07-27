const {signupUser, loginUser} = require("../use-cases");

const makeSignupUsercontroller = require("./signup-user-controller");
const makeLoginUserController = require("./login-user-controller");
const signupUserController = makeSignupUsercontroller({signupUser});
const loginUserController = makeLoginUserController({loginUser});
const notFound = require("./not-found");
const userController = Object.freeze({
  signupUserController,
  loginUserController,
  notFound,
});

module.exports = userController;
