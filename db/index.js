const mysql = require("mysql");
require("dotenv").config();
module.exports = async function makeDb() {
  const connection = await mysql.createConnection({
    host: "localhost",
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
  });
  connection.connect();
  return connection;
};
