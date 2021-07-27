const {makeMemberUser} = require("../index");

module.exports = function makeLoginUser({
  userDb,
  tokenGenerator,
  passwordComparator,
}) {
  return async function loginUser(userCreds) {
    const user = makeMemberUser(userCreds);
    const userData = await userDb.findByEmail({email: user.getEmail()});
    if (
      passwordComparator({
        savedPassword: user.getPassword(),
        newPassword: userData.password,
      })
    ) {
      const token = tokenGenerator({email: userData.email, id: userData.id});
      return {
        token,
        email: userData.email,
      };
    } else {
      throw new Error("Authozation failed: incorrect password");
    }
  };
};
