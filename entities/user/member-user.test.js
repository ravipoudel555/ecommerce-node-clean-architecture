const makeFakeMemberUser = require("../../__test__/fixtures/member-user");
const {makeMemberUser} = require("./");

describe("member user", () => {
  it("must have email", () => {
    const memberUser = makeFakeMemberUser({email: undefined});
    expect(() => makeMemberUser(memberUser)).toThrow(
      "email can not be null or undefined."
    );
  });
  it("must have password", () => {
    const memberUser = makeFakeMemberUser({password: undefined});
    expect(() => makeMemberUser(memberUser)).toThrow(
      "password can not be null or undefined."
    );
  });
});
