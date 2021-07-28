var express = require("express");
var logger = require("morgan");
const {notFound} = require("./entities/user/controllers");
const makeCallback = require("./express-callback");
require("dotenv").config();
const app = express();

app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({extended: false}));

//routes
app.use("/users", require("./routes/user-route"));
app.use("/products", require("./routes/product-route"));
app.use(makeCallback(notFound));

const port = process.env.PORT || 9000;
//starting server
app.listen(port, () => console.log(`server started at port ${port}`));
module.exports = app;
