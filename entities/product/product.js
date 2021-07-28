module.exports = function buildMakeProduct({Id, requiredParam}) {
  return function makeProduct({
    id = Id.makeId(),
    name = requiredParam("productName"),
    imageUrl = requiredParam("imageUrl"),
    price = requiredParam("price"),
    quantity = requiredParam("quantity"),
    description = requiredParam("description"),
  }) {
    if (!Id.isValidId(id)) {
      throw new Error("User must have a valid id.");
    }

    if (name.trim().length < 2) {
      throw new Error("product name must be at least 2 characters long");
    }
    if (description.trim().length < 2) {
      throw new Error("description must be at least 2 characters long");
    }
    if (imageUrl.trim().length < 2) {
      throw new Error("invalid image url");
    }

    return Object.freeze({
      getId: () => id,
      getName: () => name,
      getQuantity: () => quantity,
      getPrice: () => price,
      getImageUrl: () => imageUrl,
      getDescription: () => description,
    });
  };
};
