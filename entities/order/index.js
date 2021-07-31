const requiredParam = require("../../helpers/required-param");
const buildMakeOrder = require("./order");
const Id = require("../Id");

const makeOrder = buildMakeOrder({Id, requiredParam});

module.exports = {makeOrder};
