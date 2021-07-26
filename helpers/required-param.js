const { RequiredParameterError } = require("./errors");

module.exports = function requiredParam(param) {
  throw new RequiredParameterError(param);
  //return `${param} cannot be empty`;
};
