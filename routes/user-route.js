const {Router} = require("express");
const router = new Router();

const makeCallback = require("../express-callback");
const {
  signupUserController,
  loginUserController,
} = require("../entities/user/controllers");

router.post("/signup", makeCallback(signupUserController));
router.post("/login", makeCallback(loginUserController));

module.exports = router;
