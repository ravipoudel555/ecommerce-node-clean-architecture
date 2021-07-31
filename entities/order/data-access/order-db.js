module.exports = function makeOrderDb({makeDb}) {
  return Object.freeze({
    insert,
    findAll,
  });

  function insert({id, userId, orderDate, saleDetails}) {
    return new Promise(async function (resolve, reject) {
      const db = await makeDb();

      db.query(
        "INSERT into orders(id,user_id,order_date) values (?,?,?)",
        [id, userId, orderDate],
        function (error, result) {
          if (error) {
            return reject(error);
          }
          db.query(
            "INSERT into order_details(order_id,product_id,quantity) values ?",
            [saleDetails.map((sale) => [id, sale.productId, sale.quantity])],
            function (error, result) {
              db.end();
              if (error) {
                return reject(error);
              }
              return resolve({
                msg: "order added successfully",
              });
            }
          );
        }
      );
    });
  }
  function findAll() {
    return new Promise(async (resolve, reject) => {
      const db = await makeDb();
      const query =
        "SELECT o.id,o.order_date,od.product_id,p.name,p.description,p.image_url,od.quantity FROM orders o " +
        "INNER JOIN order_details od " +
        "ON o.id =od.order_id " +
        "INNER JOIN products p " +
        "ON od.product_id = p.id ";
      db.query(query, function (error, result) {
        db.end();
        if (error) {
          return reject(error);
        }
        return resolve(result);
      });
    });
  }
  function resultMapper(result) {
    const mappedResult = result.map((object) => {
      return Object.freeze({
        id: object.id,
      });
    });
  }
};
