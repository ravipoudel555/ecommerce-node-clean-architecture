const makeDb = require("../../../db");
const makeUserDb = require("./user-db");
const makeFakeUser = require("../../../__test__/fixtures/user");

describe("user db", () => {
  let userDb;
  beforeAll(() => {
    userDb = makeUserDb({makeDb});
  });
  it.skip("signup/post user", async () => {
    const user = makeFakeUser();
    const result = await userDb.insert(user);
    return expect(result).toEqual(
      expect.objectContaining({
        firstName: user.firstName,
        lastName: user.lastName,
      })
    );
  });
  it.skip("get user  by Id", async () => {
    const insertedUser = await userDb.insert(makeFakeUser());
    const result = await userDb.findById({userId: insertedUser.id});
    return expect(result).toEqual(
      expect.objectContaining({
        firstName: insertedUser.firstName,
        lastName: insertedUser.lastName,
      })
    );
  });
  it("get user  by email", async () => {
    const insertedUser = await userDb.insert(makeFakeUser());
    const result = await userDb.findByEmail({email: insertedUser.email});
    console.log(result);
    return expect(result).toEqual(
      expect.objectContaining({
        firstName: insertedUser.firstName,
        lastName: insertedUser.lastName,
        citizenshipNo: insertedUser.citizenshipNo,
      })
    );
  });
});
