module.exports = function buildMakeOrder({requiredParam, Id}) {
  return function makeOrder({
    id = Id.makeId(),
    userId = requiredParam("userId"),
    orderDate = new Date().toUTCString(),
    saleDetails = requiredParam("saleDetails"),
  }) {
    if (!Id.isValidId(id)) {
      throw new Error("order must have a valid id.");
    }

    if (!Id.isValidId(userId)) {
      throw new Error("userId must be a valid id.");
    }

    for (let saleDetail of saleDetails) {
      validateSaleDetail(saleDetail);
    }

    function validateSaleDetail({
      productId = requiredParam("productId"),
      quantity = requiredParam("quantity"),
    }) {
      if (quantity === 0) throw new Error("quantity can't be zero");
      if (!Id.isValidId(productId))
        throw new Error("productId must be a valid id.");
    }

    return Object.freeze({
      getId: () => id,
      getUserId: () => userId,
      getOrderDate: () => orderDate,
      getSaleDetails: () => saleDetails,
    });
  };
};
