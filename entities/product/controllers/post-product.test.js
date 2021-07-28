const makePostProduct = require("./post-product");
const makeFakeProduct = require("../../../__test__/fixtures/product");
describe("post product", () => {
  it("must successfully add a product", async () => {
    const postProduct = makePostProduct({addProduct: (c) => c});
    const product = makeFakeProduct();
    const request = {
      headers: {
        "Content-Type": "application/json",
      },
      body: product,
    };

    const expected = {
      headers: {
        "Content-Type": "application/json",
      },
      statusCode: 201,
      body: {addedProduct: request.body},
    };

    const actual = await postProduct(request);
    expect(actual).toEqual(expected);
  });

  it("must report post product errors", async () => {
    const postProduct = makePostProduct({
      addProduct: (c) => {
        throw new Error("couldn't add product");
      },
    });

    const productInfo = makeFakeProduct();
    const request = {
      headers: {
        "Content-Type": "application/json",
      },
      body: productInfo,
    };

    const expected = {
      headers: {"Content-Type": "application/json"},
      statusCode: 400,
      body: {
        error: "couldn't add product",
      },
    };

    const result = await postProduct(request);
    expect(result).toEqual(expected);
  });
});
