const {makeOrder} = require(".");
const makeFakeOrder = require("../../__test__/fixtures/order");
describe("order-and-detail", () => {
  it("must have valid id of order", () => {
    const order = makeFakeOrder({id: "abc"});
    expect(() => makeOrder(order)).toThrow("order must have a valid id.");
  });

  it("must have a userId", () => {
    const order = makeFakeOrder({userId: undefined});
    expect(() => makeOrder(order)).toThrow(
      "userId can not be null or undefined."
    );
  });

  it("must have a saleDetails", () => {
    const order = makeFakeOrder({saleDetails: undefined});
    expect(() => makeOrder(order)).toThrow(
      "saleDetails can not be null or undefined."
    );
  });
  it("must have a productId", () => {
    const saleDetails = [
      {
        quantity: 5,
      },
    ];
    const order = makeFakeOrder({saleDetails});
    expect(() => makeOrder(order)).toThrow(
      "productId can not be null or undefined"
    );
  });
  it("must have a valid productId", () => {
    const saleDetails = [
      {
        productId: "abc",
        quantity: 5,
      },
    ];
    const order = makeFakeOrder({saleDetails});
    expect(() => makeOrder(order)).toThrow("productId must be a valid id.");
  });

  it("must have  quantity", () => {
    const saleDetails = [
      {
        productId: "abc",
      },
    ];
    const order = makeFakeOrder({saleDetails});
    expect(() => makeOrder(order)).toThrow(
      "quantity can not be null or undefined"
    );
  });

  it("must have  non zero quantity", () => {
    const saleDetails = [
      {
        productId: "abc",
        quantity: 0,
      },
    ];
    const order = makeFakeOrder({saleDetails});
    expect(() => makeOrder(order)).toThrow("quantity can't be zero");
  });
});
