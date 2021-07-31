const {makeOrderDetail} = require("./");
const makeFakeOrderDetail = require("../../__test__/fixtures/order-detail");
describe("order-detail", () => {
  it("must have an order id", () => {
    const orderDetail = makeFakeOrderDetail({orderId: undefined});
    expect(() => makeOrderDetail(orderDetail)).toThrow(
      "orderId can not be null or undefined"
    );
  });
  it("must have an product id", () => {
    const orderDetail = makeFakeOrderDetail({productId: undefined});
    expect(() => makeOrderDetail(orderDetail)).toThrow(
      "productId can not be null or undefined"
    );
  });
  it("must have a quantity", () => {
    const orderDetail = makeFakeOrderDetail({quantity: undefined});
    expect(() => makeOrderDetail(orderDetail)).toThrow(
      "quantity can not be null or undefined"
    );
  });
  it("must have a valid productId", () => {
    const orderDetail = makeFakeOrderDetail({productId: "a"});
    expect(() => makeOrderDetail(orderDetail)).toThrow(
      "productId must be a valid id."
    );
  });
  it("must have a quantity", () => {
    const orderDetail = makeFakeOrderDetail({orderId: "abc"});
    expect(() => makeOrderDetail(orderDetail)).toThrow(
      "orderId must be a valid id."
    );
  });
});
