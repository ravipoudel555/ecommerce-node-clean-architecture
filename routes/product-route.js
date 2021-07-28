const {Router} = require("express");
const router = new Router();

const makeCallback = require("../express-callback");
const {postProduct, getProducts} = require("../entities/product/controllers");

router.post("/", makeCallback(postProduct));
router.get("/:id", makeCallback(getProducts));
router.get("/", makeCallback(getProducts));

module.exports = router;
