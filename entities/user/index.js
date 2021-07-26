const bcrypt = require("bcrypt");
const buildMakeUser = require("./user");
const requiredParam = require("../../helpers/required-param");
const emailValidator = require("../../helpers/is-valid-email");
const Id = require("../Id");

const makeUser = buildMakeUser({
  Id,
  encrypter,
  requiredParam,
  emailValidator,
});

module.exports = makeUser;

function encrypter(text) {
  return bcrypt.hashSync(text, bcrypt.genSaltSync(10), null);
}
