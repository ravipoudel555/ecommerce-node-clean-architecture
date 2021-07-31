const cuid = require("cuid");
const faker = require("faker");
const Id = Object.freeze({
  makeId: cuid,
  isValidId: cuid.isCuid,
});

module.exports = function makeFakeOrder(overrides) {
  const order = {
    id: Id.makeId(),
    userId: Id.makeId(),
    orderDate: Date.now().toString(),
    saleDetails: [
      {productId: Id.makeId(), quantity: faker.datatype.number(10) + 1},
      {productId: Id.makeId(), quantity: faker.datatype.number(10) + 1},
    ],
  };
  return {
    ...order,
    ...overrides,
  };
};
