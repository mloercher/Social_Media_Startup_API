const router = require('express').Router();

const { getAllThoughts, getThoughtsById, createNewThought, updateThoughtById, deleteThoughtById   } = require('../../controllers/thought-controller');

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



module.exports = router;





