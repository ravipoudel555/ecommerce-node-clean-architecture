const makeFakeProduct = require("../../../__test__/fixtures/product");
const makeProductDb = require("./product-db");

const makeDb = require("../../../db");

describe("product-db", () => {
  let productDb;
  beforeAll(() => {
    productDb = makeProductDb({makeDb});
  });
  it.skip("must add a product to database", async () => {
    const product = makeFakeProduct();
    const result = await productDb.insert(product);
    return expect(result).toEqual(product);
  });

  it.skip("must return a product from database", async () => {
    const product = makeFakeProduct();
    const addedProduct = await productDb.insert(product);
    const result = await productDb.findById({productId: addedProduct.id});
    return expect(result).toEqual(addedProduct);
  });
  it("must return all products from database", async () => {
    const product = makeFakeProduct();
    const addedProduct = await productDb.insert(product);
    const result = await productDb.findAll();
    return expect(result).toEqual(
      expect.arrayContaining([expect.objectContaining(addedProduct)])
    );
  });
});
