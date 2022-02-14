const router = require('express').Router();

const { getAllThoughts, getThoughtsById, createNewThought, updateThoughtById, deleteThoughtById, addReaction, deleteReaction   } = require('../../controllers/thought-controller');

// /api/thoughts
router
.route('/')
.get(getAllThoughts)
.post(createNewThought)

// /api/thoughts/:thoughtId/reactions
router
.route('/:thoughtId/reactions')
.post(addReaction)


// /api/thoughts/:id
router
.route('/:id')
.get(getThoughtsById)
.put(updateThoughtById)
.delete(deleteThoughtById)

router
.route('/:thoughtId/reactions/:reactionId')
.delete(deleteReaction)



module.exports = router;





