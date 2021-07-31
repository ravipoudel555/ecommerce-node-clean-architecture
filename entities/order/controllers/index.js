const makePostOrder = require("./post-order");
const {addOrder} = require("../use-cases");

const postOrder = makePostOrder({addOrder});

const orderController = Object.freeze({
  postOrder,
});

module.exports = orderController;
