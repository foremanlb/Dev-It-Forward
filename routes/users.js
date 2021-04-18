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

<<<<<<< HEAD
router.post("/sign-up", signUp);
router.get("/", getUsers);
router.get("/:id", getUser);
router.get("/verify", verify);
router.put("/password-change/:id", changePassword);
router.put("/:id", restrict, updateUser);
router.delete("/:id", restrict, deleteUser);
=======
router.post('/sign-up', signUp)
router.get('/', getUsers);
router.get('/:id', getUser);
router.put('/password-change/:id', changePassword);
router.put('/:id', restrict, updateUser);
router.delete('/:id', restrict, deleteUser);
>>>>>>> d5c74b69d21f432de19944f517341eb0730dd33c

module.exports = router;
