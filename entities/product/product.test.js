const {makeProduct} = require("./");
const makeFakeProduct = require("../../__test__/fixtures/product");

describe("product", () => {
  it("must have a valid id", () => {
    const product = makeFakeProduct({id: "21323"});
    expect(() => makeProduct(product)).toThrow("User must have a valid id.");
  });

  it("must have a product name", () => {
    const product = makeFakeProduct({name: undefined});
    expect(() => makeProduct(product)).toThrow(
      "product can not be null or undefined."
    );
  });

  it("must have a price", () => {
    const product = makeFakeProduct({price: undefined});
    expect(() => makeProduct(product)).toThrow(
      "price can not be null or undefined."
    );
  });
  it("must have a quantity", () => {
    const product = makeFakeProduct({quantity: undefined});
    expect(() => makeProduct(product)).toThrow(
      "quantity can not be null or undefined."
    );
  });

  it("must have product name of at least 2 characters long", () => {
    const product = makeFakeProduct({name: "a"});
    expect(() => makeProduct(product)).toThrow(
      "product name must be at least 2 characters long"
    );
  });

  it("must have imageUrl of at least 2 characters long", () => {
    const product = makeFakeProduct({imageUrl: "a"});
    expect(() => makeProduct(product)).toThrow("invalid image url");
  });
});
