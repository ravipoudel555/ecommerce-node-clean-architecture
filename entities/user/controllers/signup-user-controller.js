module.exports = function makeSignupUserController({signupUser}) {
  return async function signupUserController(httpRequest) {
    try {
      const userInfo = httpRequest.body;
      const signedUser = await signupUser({...userInfo});
      return {
        headers: {
          "Content-Type": "application/json",
        },
        statusCode: 201,
        body: {
          signedUser,
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
