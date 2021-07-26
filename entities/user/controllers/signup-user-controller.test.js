const makeSignupUserController = require("./signup-user-controller");
const makeFakeUser = require("../../../__test__/fixtures/user");

describe("signup user controller", () => {
  it("successfully signup a user  ", async () => {
    const signupUserController = makeSignupUserController({
      signupUser: (c) => c,
    });

    const user = makeFakeUser();
    const request = {
      headers: {
        "Content-Type": "application/json",
      },
      body: user,
    };

    const expected = {
      headers: {
        "Content-Type": "application/json",
      },
      statusCode: 201,
      body: {signedUser: request.body},
    };
    const actual = await signupUserController(request);
    expect(actual).toEqual(expected);
  });

  it("reports user errors ", async () => {
    const signupUserController = makeSignupUserController({
      signupUser: () => {
        throw Error("Bad request");
      },
    });

    const fakeUser = makeFakeUser();
    const request = {
      headers: {
        "Content-Type": "application/json",
      },
      body: fakeUser,
    };

    const expected = {
      headers: {
        "Content-Type": "application/json",
      },
      statusCode: 400,
      body: {error: "Bad request"},
    };
    const actual = await signupUserController(request);
    expect(actual).toEqual(expected);
  });
});
