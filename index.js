var express = require("express");
var logger = require("morgan");
require("dotenv").config();
var app = express();

app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({extended: false}));

app.use("/users", require("./routes/user-route"));

app.listen(3000, () => console.log(`server started`));
module.exports = app;
