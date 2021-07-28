const mysql = require("mysql");

module.exports = async function makeDb() {
  // const connection = await mysql.createConnection({
  //   host: "localhost",
  //   user: "root",
  //   password: "9816624895",
  //   database: "clean_architecture",
  // });
  const connection = await mysql.createConnection({
    host: "localhost",
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
  });
  connection.connect();
  return connection;
};

// db.execute(
//   "insert into contacts(first_name,last_name,email_address) values(?,?,?)",
//   ["ravi", "poudel", "email"]
// );
