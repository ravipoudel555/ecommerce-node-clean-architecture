const makeGetProducts = require("./get-products");
const makePostProduct = require("./post-product");

const {addProduct, listProducts} = require("../use-cases");

const getProducts = makeGetProducts({listProducts});
const postProduct = makePostProduct({addProduct});

const productController = Object.freeze({
  getProducts,
  postProduct,
});

module.exports = productController;
