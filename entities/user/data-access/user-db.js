const Id = require("../../Id");

module.exports = function makeUserDb({makeDb}) {
  return Object.freeze({
    insert,
    findById,
  });

  function insert({
    id = Id.makeId(),
    firstName,
    lastName,
    email,
    password,
    citizenshipNo,
  }) {
    return new Promise(async function (resolve, reject) {
      const db = await makeDb();
      db.query(
        "INSERT INTO users(id,citizenship_no,first_name,last_name,email,password) VALUES(?,?,?,?,?,?);",
        [id, citizenshipNo, firstName, lastName, email, password],
        function (error, result) {
          if (error) {
            if (error.errno == 1062) {
              const msgArray = error.sqlMessage.split(" ");

              const tableAndColumnArray =
                msgArray[msgArray.length - 1].split(".");

              const column = tableAndColumnArray[1].slice(
                0,
                tableAndColumnArray[1].length - 1
              );
              db.end();
              return reject(new Error(`${column} must be unique`));
            }
            db.end();
            return reject(error);
          }
          db.end();
          return resolve({
            id,
            firstName,
            lastName,
            email,
            citizenshipNo,
          });
        }
      );
    });
  }

  function findById({userId}) {
    return new Promise(async function (resolve, reject) {
      const db = await makeDb();

      db.query(
        "SELECT * from users WHERE id= ? ",
        userId,
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

  function filterUser(results) {
    return results.map((row) => {
      return {
        firstName: row.first_name,
        lastName: row.last_name,
        email: row.email,

        citizenshipNo: row.citizenship_no,
      };
    });
  }
};
