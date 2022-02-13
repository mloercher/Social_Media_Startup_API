const { Schema, model } = require("mongoose");
const dateFormat = require("../utils/dateFormat");

const ThoughtSchema = new Schema(
  {
    thoughtText: {
      type: String,
      required: "Thought is required",
      minlength: [1, "thought must be at least one character long"],
      maxlength: [128, "max amount of characters is 128!"],
    },
    createdAt: {
      type: Date,
      default: Date.now,
      //getter to convert date format on front end
      get: (createdAtVal) => dateFormat(createdAtVal),
    },
    username: {
      type: String,
      required: true,
    },
    //Array of nested documents created with the reactionSchema
    reactions: [
      {
        type: Schema.Types.ObjectId,
        ref: "Reaction",
      },
    ],
  },
  //tell SCHEMA it can use virtuals + getters
  {
    toJSON: {
      virtuals: true,
      getters: true,
    },
    id: false,
  }
);
//Create a virtual called reactionCount that retrieves the length of the thought's reactions array field on query.
ThoughtSchema.virtual("reactionCount").get(function () {
  return this.reactions.length;
});

const Thought = model("Thought", ThoughtSchema);

module.exports = Thought;
