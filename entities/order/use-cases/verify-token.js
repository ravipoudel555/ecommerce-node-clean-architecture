module.exports = function makeVerifyToken({tokenVerifier}) {
  return function verifyToken({token}) {
    try {
      const decoded = tokenVerifier.verify(token, "secret");

      return decoded;
    } catch (e) {
      throw new Error("Invalid token");
    }
  };
};
