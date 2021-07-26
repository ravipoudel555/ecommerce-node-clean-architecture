const {Router} = require("express");
const router = new Router();

const makeCallback = require("../express-callback");
const {signupUserController} = require("../entities/user/controllers");

router.post("/signup", makeCallback(signupUserController));

module.exports = router;
