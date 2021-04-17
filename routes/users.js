const { Router} = require("express");
const { getUsers, getUser, deleteUser, changePassword, signUp } = require("../controllers/users.js");
const restrict = require("../helpers/restrict.js");
const router = Router();

router.post('/sign-up',signUp)
router.get('/users',getUsers);
router.get('/users/:id',getUser);
router.put('/password-change/:id',changePassword);
router.delete('/users/:id',restrict,deleteUser);




module.exports = router; 