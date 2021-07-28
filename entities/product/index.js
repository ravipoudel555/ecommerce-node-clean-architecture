const buildMakeProduct = require("./product");
const requiredParam = require("../../helpers/required-param");

const Id = require("../Id");

const makeProduct = buildMakeProduct({Id, requiredParam});

module.exports = {makeProduct};
