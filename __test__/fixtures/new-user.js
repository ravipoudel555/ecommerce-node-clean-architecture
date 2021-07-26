const faker = require("faker");
const cuid = require("cuid");

const Id = Object.freeze({
  makeId: cuid,
  isValidId: cuid.isCuid,
});

module.exports = function makeFakeNewUser(overrides) {
  const user = {
    firstName: faker.name.firstName(),
    lastName: faker.name.lastName(),
    id: Id.makeId(),
    citizenshipNo: faker.finance.creditCardNumber().toString(),
    password: faker.name.firstName() + faker.name.lastName(),
    email: faker.internet.email(),
  };
  return {
    ...user,
    ...overrides,
  };
};
