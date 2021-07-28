const faker = require("faker");
const cuid = require("cuid");

const Id = Object.freeze({
  makeId: cuid,
  isValidId: cuid.isCuid,
});

module.exports = function makeFakeProduct(overrides) {
  const user = {
    id: Id.makeId(),
    name: faker.commerce.productName(),
    description: faker.commerce.productDescription(),
    imageUrl: faker.image.imageUrl(),
    price: Math.floor(faker.commerce.price()),
    quantity: faker.datatype.number(10),
  };
  return {
    ...user,
    ...overrides,
  };
};
