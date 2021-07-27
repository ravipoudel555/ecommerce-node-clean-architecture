const faker = require("faker");
const cuid = require("cuid");

module.exports = function makeFakeNewMemberUser(overrides) {
  const user = {
    password: faker.name.firstName() + faker.name.lastName(),
    email: faker.internet.email(),
  };
  return {
    ...user,
    ...overrides,
  };
};
