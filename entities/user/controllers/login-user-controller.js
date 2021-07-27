module.exports = function makeLoginUserController({loginUser}) {
  return async function loginUserController(httpRequest) {
    try {
      const userInfo = httpRequest.body;
      const loggedUser = await loginUser({...userInfo});
      return {
        headers: {
          "Content-Type": "application/json",
        },
        statusCode: 200,
        body: {
          loggedUser,
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
