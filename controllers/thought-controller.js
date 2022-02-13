const { Thought } = require('../models');

const thoughtController = {
    // get ALL thoughts
    getAllThoughts(req, res) {
        Thought.find()
          .select("-__v")
          .then((dbThoughtData) => res.json(dbThoughtData))
          .catch((err) => {
            console.log(err);
            res.status(400).json(err);
          });
      },

    // get single thought by Id
    getThoughtsById({ params }, res) {
        Thought.findOne({ _id: params.id })
          .select("-__v")
          .then((dbThoughtData) => {
            if (!dbThoughtData) {
              res.status(404).json({ message: "No thought found with this id" });
              return;
            }
            res.json(dbThoughtData);
          })
          .catch((err) => {
            console.log(err);
            res.status(400).json(err);
          });
      },

    //create a new thought
    createNewThought(req, res) {
        Thought.create(req.body)
          .then((dbThoughtData) => res.json(dbThoughtData))
          .catch((err) => res.json(err));
      }, 

    //update a thought by Id
    updateThoughtById({ params, body }, res) {
        Thought.findOneAndUpdate({ _id: params.id }, body, { new: true })
          .then((dbThoughtData) => {
            if (!dbThoughtData) {
              res.status(404).json({ message: "No Thought found with this id" });
              return;
            }
            res.json(dbThoughtData);
          })
          .catch((err) => res.status(400).json(err));
      },

    // delete Thought by Id
    deleteThoughtById({ params }, res) {
        Thought.findOneAndDelete({ _id: params.id })
          .then((dbThoughtData) => {
            if (!dbThoughtData) {
              res.status(404).json({ message: "No Thought found with this id" });
              return;
            }
            res.json(dbThoughtData);
          })
          .catch((err) => res.status(400).json(err));
      },
    
}

module.exports = thoughtController;