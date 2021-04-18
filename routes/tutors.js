const { Router } = require('express')
const { signUp,getTutors,getTutor,updateTutor,deleteTutor } = require("../controllers/tutors.js")
const restrict = require("../helpers/restrict.js")

const router = Router()
router.put("/password-change/:id,changePassword");
router.get("/", getTutors);
router.get("/", getTutor);
router.put("/:id", restrict, updateTutor);
router.delete("/:id", restrict, deleteTutor);

module.exports = router;