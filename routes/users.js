const { Router } = require("express");
const {
  getUsers,
  verify,
  getUser,
  deleteUser,
  changePassword,
  signUp,
  updateUser,
  signIn,
} = require("../controllers/users.js");

const restrict = require("../helpers/restrictUser.js");

const router = Router();

router.post("/sign-up", signUp);
router.get("/", getUsers);
router.get("/user/:id", getUser);
router.put("/password-change/:id", changePassword);
router.put("/:id", restrict, updateUser);
router.delete("/:id", restrict, deleteUser);
router.get("/verify", verify);
router.post("/sign-in", signIn);

module.exports = router;