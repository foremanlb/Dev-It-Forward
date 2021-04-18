const { Router } = require("express");
const {
  getUsers,
  verify,
  getUser,
  deleteUser,
  changePassword,
  signUp,
  updateUser,
} = require("../controllers/users.js");
const restrict = require("../helpers/restrict.js");
const router = Router();

router.post("/sign-up", signUp);
router.get("/", getUsers);
router.get("/:id", getUser);
router.get("/verify", verify);
router.put("/password-change/:id", changePassword);
router.put("/:id", restrict, updateUser);
router.delete("/:id", restrict, deleteUser);

module.exports = router;
