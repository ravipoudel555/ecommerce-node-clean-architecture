const makeUser = require("../index");
module.exports = function makeSignupUser({userDb}) {
  return async function signupUser(userInfo) {
    const user = makeUser(userInfo);

    return userDb.insert({
      firstName: user.getFirstName(),
      lastName: user.getLastName(),
      email: user.getEmail(),
      password: user.getPassword(),
      citizenshipNo: user.getCitizenshipNo(),
    });
  };
};
