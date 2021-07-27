const makeUserDb = require("../data-access/user-db");
const makeSignupUser = require("./signup-user");
const makeLoginUser = require("./login-user");
const makeFakeUser = require("../../../__test__/fixtures/user");
const makeDb = require("../../../db");
describe("login user", () => {
  let userDb;
  beforeAll(() => {
    userDb = makeUserDb({makeDb});
  });
  it.skip("returns a token ", async () => {
    const user = makeFakeUser();
    const memberUser = {
      email: user.email,
      password: user.password,
    };
    const signupUser = makeSignupUser({userDb});
    const loginUser = makeLoginUser({
      userDb,
      tokenGenerator: () => "this is token",
      passwordComparator: () => true,
    });
    const signedupUser = await signupUser(user);
    return expect(await loginUser(memberUser)).toEqual({
      email: user.email,
      token: "this is token",
    });
  });
  it("returns error if incorrect password ", async () => {
    const user = makeFakeUser();
    const memberUser = {
      email: user.email,
      password: "this is fake password",
    };
    const signupUser = makeSignupUser({userDb});
    const loginUser = makeLoginUser({
      userDb,
      tokenGenerator: () => "this is token",
      passwordComparator: () => false,
    });
    const signedupUser = await signupUser(user);

    expect(loginUser(memberUser)).rejects.toEqual(
      new Error("Authozation failed: incorrect password")
    );
  });
});
