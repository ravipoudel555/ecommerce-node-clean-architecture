const productDb = require("../data-access");
const makeAddProduct = require("./add-product");
const makeListProducts = require("./list-products");

const addProduct = makeAddProduct({productDb});
const listProducts = makeListProducts({productDb});

const productServices = Object.freeze({
  addProduct,
  listProducts,
});

module.exports = productServices;
