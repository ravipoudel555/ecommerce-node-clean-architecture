var express = require("express");
var logger = require("morgan");
const {notFound} = require("./entities/user/controllers");
const makeCallback = require("./express-callback");
require("dotenv").config();
const app = express();

app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({extended: false}));

app.use("/users", require("./routes/user-route"));
app.use(makeCallback(notFound));
app.listen(3000, () => console.log(`server started`));
module.exports = app;
