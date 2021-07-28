module.exports = function makeGetProducts({listProducts}) {
  return async function getProducts(httpRequest) {
    try {
      const product = await listProducts({productId: httpRequest.params.id});
      return {
        headers: {
          "Content-Type": "application/json",
        },
        statusCode: 200,
        body: {
          product,
        },
      };
    } catch (e) {
      return {
        headers: {
          "Content-Type": "application/json",
        },
        statusCode: 200,
        body: {
          error: e.message,
        },
      };
    }
  };
};
