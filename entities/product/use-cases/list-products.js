module.exports = function makeListProducts({productDb}) {
  return async function listProducts({productId} = {}) {
    // const products =  productId
    //   ? await productDb.findById({productId})
    //   : await productDb.findAll();
    if (!productId) {
      return await productDb.findAll();
    } else {
      const product = await productDb.findById({productId});
      if (!product || product === {}) throw new Error("product not found");
      return product;
    }
  };
};
