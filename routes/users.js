const { Router} = require("express");
const { signUp } = require("../controllers/users.js");
const router = Router();
router.post("/sign-up", signUp);
module.exports = router; 