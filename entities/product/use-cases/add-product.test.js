const makeAddProduct = require("./add-product");
const makeDb = require("../../../db");
const makeProductDb = require("../data-access/product-db");
const makeFakeProduct = require("../../../__test__/fixtures/product");

describe("add-product", () => {
  let productDb;
  beforeAll(() => {
    productDb = makeProductDb({makeDb});
  });
  it.skip("must add a product to database", async () => {
    const addProduct = makeAddProduct({productDb});
    const product = makeFakeProduct();

    const result = await addProduct(product);
    return expect(result).toEqual(product);
  });
});
