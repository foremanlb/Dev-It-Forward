const { Router } = require("express");
const {
  signUp,
  signIn,
  getTutors,
  getTutor,
  updateTutor,
  deleteTutor,
  changePassword,
} = require("../controllers/tutors.js");
const restrict = require("../helpers/restrict.js");

const router = Router();
router.put("/password-change/:id", changePassword);
router.get("/", getTutors);
router.get("/", getTutor);
router.put("/:id", restrict, updateTutor);
router.delete("/:id", restrict, deleteTutor);
router.post("/sign-up", signUp);
router.post("/sign-in", signIn);

module.exports = router;
