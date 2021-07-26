const makeUserDb = require("./user-db");
const makeDb = require("../../../db");
const userDb = makeUserDb({makeDb});
module.exports = userDb;
