module.exports = function makePostOrder({addOrder}) {
  return async function postOrder(httpRequest) {
    try {
      const {bearer = {}, ...orderInfo} = httpRequest.body;
      bearer.token = httpRequest.headers["Authorization"];

      const orderResponse = await addOrder({bearer, ...orderInfo});

      return {
        headers: {
          "Content-Type": "application/json",
        },
        statusCode: 201,
        body: {
          orderResponse,
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
