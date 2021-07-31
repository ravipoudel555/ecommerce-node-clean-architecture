const jwt = require("jsonwebtoken");

const tokenVerifier = Object.freeze({
  verify: (token, secret) => {
    return jwt.verify(token, secret);
  },
});

module.exports = tokenVerifier;
