const router = require('express').Router();

const { getAllThoughts, getThoughtsById, createNewThought, updateThoughtById, deleteThoughtById, addReaction, deleteReaction   } = require('../../controllers/thought-controller');

// /api/thoughts
router
.route('/')
.get(getAllThoughts)
.post(createNewThought)


// /api/thoughts/:id
router
.route('/:id')
.get(getThoughtsById)
.put(updateThoughtById)
.delete(deleteThoughtById)

// /api/thoughts/:thoughtId/reactions
router
.route('/:thoughtId/reactions')
.post(addReaction)
.delete(deleteReaction)



module.exports = router;





