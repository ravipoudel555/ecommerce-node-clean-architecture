const {makeOrder} = require("../");
module.exports = function makeAddOrder({orderDb, verifyToken}) {
  return async function addOrder(orderInfo) {
    if (orderInfo.bearer.token) {
      const decoded = verifyToken({token: orderInfo.bearer.token});

      const order = makeOrder({
        saleDetails: orderInfo.saleDetails,
        userId: decoded.id,
      });

      return orderDb.insert({
        id: order.getId(),
        userId: order.getUserId(),
        orderDate: order.getOrderDate(),
        saleDetails: order.getSaleDetails(),
      });
    } else {
      throw new Error("You must add a token in Authorization header");
    }
  };
};
