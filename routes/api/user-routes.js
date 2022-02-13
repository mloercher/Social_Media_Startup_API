const router = require("express").Router();

const { getAllUsers, createNewUser, deleteUser, updateUser, getUserById, addFriend, deleteFriend } = require("../../controllers/users-controller");

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

// /api/users/:userId/friends/:friendId
router
.route('/:userId/friends/:friendId')
.put(addFriend)
.delete(deleteFriend)

module.exports = router;
