const {makeProduct} = require("..");

module.exports = function makeAddProduct({productDb}) {
  return async function addProduct(productInfo) {
    const product = makeProduct(productInfo);
    return productDb.insert({
      id: product.getId(),
      name: product.getName(),
      price: product.getPrice(),
      quantity: product.getQuantity(),
      description: product.getDescription(),
      imageUrl: product.getImageUrl(),
    });
  };
};
