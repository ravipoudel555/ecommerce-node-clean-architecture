const makeVerifyToken = require("./verify-token");
const tokenVerifier = require("../../../__test__/fixtures/token-verifier");
const fakeTokenGenerator = require("../../../__test__/fixtures/token-generator");
describe("verify-token", () => {
  let verifyToken;
  beforeAll(() => {
    verifyToken = makeVerifyToken({tokenVerifier});
  });

  it.skip("must throw error for an invalid token", () => {
    expect(() => verifyToken({token: "abc"})).toThrow("Invalid token");
  });
  it.skip("must return user's info for a valid token", () => {
    const token = fakeTokenGenerator({secret: "secret"});
    expect(
      verifyToken({
        token,
      })
    ).toEqual(
      expect.objectContaining({
        email: expect.any(String),
        id: expect.any(String),
      })
    );
  });
});
