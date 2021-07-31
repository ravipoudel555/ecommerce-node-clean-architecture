const makeOrderDb = require("./order-db");
const makeFakeOrder = require("../../../__test__/fixtures/order");
const makeDb = require("../../../db");
describe("order-db", () => {
  let orderDb;
  beforeAll(() => {
    orderDb = makeOrderDb({makeDb});
  });
  it.skip("must insert order", async () => {
    const saleDetails = [
      {productId: "ckrn01q06000390ui0okl6wog", quantity: 2},
      {productId: "ckrm25x8t000040ui9sd0bz71", quantity: 1},
    ];
    const order = makeFakeOrder({
      userId: "ckrlibo0e0001l8uihg2u41et",
      saleDetails,
    });

    const result = await orderDb.insert(order);
    return expect(result).toEqual({msg: "order added successfully"});
  });

  it.skip("must return all the orders", async () => {
    expect(orderDb.findAll()).resolves.toEqual(
      expect.arrayContaining([{id: expect.any(String)}])
    );
  });
});
