const makeAddOrder = require("./add-order");
const makeOrderDb = require("../data-access/order-db");
const makeFakeOrder = require("../.././../__test__/fixtures/order");
const makeDb = require("../../../db");
describe("add-order", () => {
  let orderDb;
  beforeAll(() => {
    orderDb = makeOrderDb({makeDb});
  });
  it.skip("must add order to database", async () => {
    const fakeOrder = makeFakeOrder({
      userId: "ckrlibo0e0001l8uihg2u41et",
      saleDetails: [{productId: "ckrn01q06000390ui0okl6wog", quantity: 5}],
    });

    const addOrder = makeAddOrder({
      orderDb,
      verifyToken: (token) => {
        return {email: "abc@g.com", id: "ckrlibo0e0001l8uihg2u41et"};
      },
    });
    const result = await addOrder({
      orderInfo: fakeOrder,
      bearer: {token: "dfkjdlf"},
    });
    return expect(result).toEqual({msg: "order added successfully"});
  });

  it("must throw an error for invalid token", async () => {
    const fakeOrder = makeFakeOrder({
      userId: "ckrlibo0e0001l8uihg2u41et",
      saleDetails: [{productId: "ckrn01q06000390ui0okl6wog", quantity: 5}],
    });

    const addOrder = makeAddOrder({
      orderDb,
      verifyToken: (token) => {
        throw new Error("Invalid token");
      },
    });

    expect(
      addOrder({
        orderInfo: fakeOrder,
        bearer: {token: "dfkjdlf"},
      })
    ).rejects.toThrow("Invalid token");
  });
});
