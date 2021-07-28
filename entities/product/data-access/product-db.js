module.exports = function makeProductDb({makeDb}) {
  return Object.freeze({
    insert,
    findAll,
    findById,
  });

  function insert({id, name, price, description, quantity, imageUrl}) {
    return new Promise(async function (resolve, reject) {
      const db = await makeDb();
      db.query(
        "INSERT INTO products(id, name, description, image_url, price, quantity) VALUES(?,?,?,?,?,?);",
        [id, name, description, imageUrl, price, quantity],
        function (error, result) {
          if (error) {
            db.end();
            return reject(error);
          }
          db.end();
          return resolve({
            id,
            name,
            description,
            imageUrl,
            price,
            quantity,
          });
        }
      );
    });
  }

  function findById({productId}) {
    return new Promise(async function (resolve, reject) {
      const db = await makeDb();

      db.query(
        "SELECT * from products WHERE id= ? ",
        productId,
        function (error, result, metaData) {
          db.end();
          if (error) {
            return reject({error});
          }

          return resolve(filterUser(result)[0]);
        }
      );
    });
  }

  function findAll() {
    return new Promise(async function (resolve, reject) {
      const db = await makeDb();

      db.query(
        "SELECT * from products",

        function (error, result, metaData) {
          db.end();
          if (error) {
            return reject({error});
          }

          return resolve(filterUser(result));
        }
      );
    });
  }

  function filterUser(results) {
    return results.map((row) => {
      return {
        id: row.id,
        name: row.name,
        description: row.description,
        price: row.price,
        quantity: row.quantity,
        imageUrl: row.image_url,
      };
    });
  }
};
