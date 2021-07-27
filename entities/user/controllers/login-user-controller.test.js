const makeLoginUserController = require("./login-user-controller");
const makeFakeMemberUser = require("../../../__test__/fixtures/member-user");
describe("login user controller", () => {
  it("successfully login user  ", async () => {
    const loginUserController = makeLoginUserController({
      loginUser: (c) => {
        return {
          email: c.email,
          token: "some token",
        };
      },
    });
    const user = makeFakeMemberUser();
    const httpRequest = {
      headers: {
        "Content-Type": "application/json",
      },
      body: user,
    };
    const expected = {
      headers: {
        "Content-Type": "application/json",
      },
      statusCode: 200,
      body: {
        loggedUser: {
          email: httpRequest.body.email,
          token: "some token",
        },
      },
    };
    const actual = await loginUserController(httpRequest);
    expect(actual).toEqual(expected);
  });
  it("return error for wrong password  ", async () => {
    const loginUserController = makeLoginUserController({
      loginUser: (c) => {
        throw new Error("Authozation failed: incorrect password");
      },
    });
    const user = makeFakeMemberUser();
    const httpRequest = {
      headers: {
        "Content-Type": "application/json",
      },
      body: user,
    };
    const expected = {
      headers: {
        "Content-Type": "application/json",
      },
      statusCode: 400,
      body: {
        error: "Authozation failed: incorrect password",
      },
    };
    const actual = await loginUserController(httpRequest);
    expect(actual).toEqual(expected);
  });
});
