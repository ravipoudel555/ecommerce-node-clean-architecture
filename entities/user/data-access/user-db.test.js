const makeDb = require("../../../db");
const makeUserDb = require("./user-db");
const makeFakeUser = require("../../../__test__/fixtures/user");

describe("user db", () => {
  let userDb;
  beforeAll(() => {
    userDb = makeUserDb({makeDb});
  });
  it("signup/post user", async () => {
    const user = makeFakeUser();
    const result = await userDb.insert(user);
    return expect(result).toEqual(
      expect.objectContaining({
        firstName: user.firstName,
        lastName: user.lastName,
      })
    );
  });
  it("get user", async () => {
    const insertedUser = await userDb.insert(makeFakeUser());
    const result = await userDb.findById({userId: insertedUser.id});
    return expect(result).toEqual(
      expect.objectContaining({
        firstName: insertedUser.firstName,
        lastName: insertedUser.lastName,
      })
    );
  });
});
