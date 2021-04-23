const { Router } = require("express");
const {
  signUp,
  signIn,
  getTutors,
  getTutor,
  updateTutor,
  deleteTutor,
  changePassword,
  verify,
} = require("../controllers/tutors.js");
const restrict = require("../helpers/restrictTutor.js");

const router = Router();
router.put("/password-change/:id", changePassword);
router.get("/", getTutors);
router.get("/tutor/:id", getTutor);
router.put("/:id", restrict, updateTutor);
router.delete("/:id", restrict, deleteTutor);
router.post("/sign-up", signUp);
router.post("/sign-in", signIn);
router.get("/verify", verify);

module.exports = router;
