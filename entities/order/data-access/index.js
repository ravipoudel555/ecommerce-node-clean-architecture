const makeOrderDb = require("./order-db");
const makeDb = require("../../../db");

const orderDb = makeOrderDb({makeDb});
module.exports = orderDb;
