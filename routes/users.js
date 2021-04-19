const { Router} = require("express");
const { getUsers, getUser, deleteUser, changePassword, signUp, updateUser, signIn } = require("../controllers/users.js");
const restrict = require("../helpers/restrict.js");
const router = Router();

router.post('/sign-up', signUp)
router.get('/', getUsers);
router.get('/:id', getUser);
router.put('/password-change/:id', changePassword);
router.put('/:id', restrict, updateUser);
router.delete('/:id', restrict, deleteUser);
router.post('/sign-in', signIn)




module.exports = router; 