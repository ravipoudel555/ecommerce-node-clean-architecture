const jwt = require("jsonwebtoken");
const makeAddOrder = require("./add-order");
const orderDb = require("../data-access");
const makeVerifyToken = require("./verify-token");
const tokenVerifier = Object.freeze({
  verify: (token, secret) => {
    return jwt.verify(token, secret);
  },
});
const verifyToken = makeVerifyToken({tokenVerifier});
const addOrder = makeAddOrder({orderDb, verifyToken});

const orderService = Object.freeze({
  addOrder,
});

module.exports = orderService;
