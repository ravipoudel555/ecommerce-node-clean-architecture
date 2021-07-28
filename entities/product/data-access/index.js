const makeProdutDb = require("./product-db");
const makeDb = require("../../../db");
const productDb = makeProdutDb({makeDb});
module.exports = productDb;
