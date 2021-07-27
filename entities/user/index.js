const bcrypt = require("bcrypt");
const buildMakeUser = require("./user");
const buildMakeMemberUser = require("./member-user");
const requiredParam = require("../../helpers/required-param");
const emailValidator = require("../../helpers/is-valid-email");
const Id = require("../Id");

const makeUser = buildMakeUser({
  Id,
  encrypter,
  requiredParam,
  emailValidator,
  upperFirstLetter,
});

const makeMemberUser = buildMakeMemberUser({
  encrypter,
  requiredParam,
  emailValidator,
});

module.exports = {makeUser, makeMemberUser};

function encrypter(text) {
  return bcrypt.hashSync(text, bcrypt.genSaltSync(10), null);
}

function upperFirstLetter(word) {
  if (word.length === 1) {
    return word.toUpperCase();
  }
  return word.charAt(0).toUpperCase() + word.substring(1);
}
