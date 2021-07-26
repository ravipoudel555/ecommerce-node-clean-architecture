const {signupUser} = require("../use-cases");

const makeSignupUsercontroller = require("./signup-user-controller");

const signupUserController = makeSignupUsercontroller({signupUser});

const userController = Object.freeze({
  signupUserController,
});

module.exports = userController;
