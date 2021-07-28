module.exports = function makePostProduct({addProduct}) {
  return async function postProduct(httpRequest) {
    try {
      const productInfo = httpRequest.body;
      const addedProduct = await addProduct({...productInfo});
      return {
        headers: {
          "Content-Type": "application/json",
        },
        statusCode: 201,
        body: {
          addedProduct,
        },
      };
    } catch (e) {
      return {
        headers: {"Content-Type": "application/json"},
        statusCode: 400,
        body: {
          error: e.message,
        },
      };
    }
  };
};
