const {Router} = require("express");
const router = new Router();

const makeCallback = require("../express-callback");
const {postOrder} = require("../entities/order/controllers");

router.post("/", makeCallback(postOrder));

module.exports = router;
