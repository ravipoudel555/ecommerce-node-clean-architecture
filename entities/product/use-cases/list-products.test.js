const makeDb = require("../../../db");
const makeProductDb = require("../data-access/product-db");
const makeFakeProduct = require("../../../__test__/fixtures/product");
const makeListProducts = require("./list-products");

describe("list-products", () => {
  let productDb;
  beforeAll(() => {
    productDb = makeProductDb({makeDb});
  });

  it.skip("must return a product", async () => {
    const listProducts = makeListProducts({productDb});
    const product = makeFakeProduct();
    const addedProduct = await productDb.insert(product);
    const result = await listProducts({productId: addedProduct.id});
    return expect(result).toEqual(addedProduct);
  });

  it("must return all the products", async () => {
    const listProducts = makeListProducts({productDb});
    const product = makeFakeProduct();
    const addedProduct = await productDb.insert(product);
    const result = await listProducts();
    return expect(result).toEqual(expect.arrayContaining([addedProduct]));
  });
});
