const router = require("express").Router();

const { getAllUsers, createNewUser, deleteUser, updateUser, getUserById } = require("../../controllers/users-controller");

// /api/users
router
.route("/")
.get(getAllUsers)
.post(createNewUser)


// /api/users/:id
router
.route('/:id')
.get(getUserById)
.delete(deleteUser)
.put(updateUser)

module.exports = router;
