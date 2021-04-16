const { Router} = require("express");
const { signUp, signIn, verify } = require("../controllers/users.js");
const router = Router();
router.post("/sign-up", signUp);
router.post("/sign-in", signIn);
router.get("/verify", verify);

module.exports = router;