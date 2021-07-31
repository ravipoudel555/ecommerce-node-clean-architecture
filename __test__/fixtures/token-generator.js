const makeFakeUser = require("./user");
const jwt = require("jsonwebtoken");

module.exports = function fakeTokenGenerator({secret}) {
  const user = makeFakeUser();
  return jwt.sign({email: user.email, id: user.id}, secret, {
    expiresIn: "1hr",
  });
};
