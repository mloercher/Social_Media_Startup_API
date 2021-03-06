const { Schema, model, Types } = require("mongoose");
const dateFormat = require("../utils/dateFormat");

const ReactionSchema = new Schema(
  {
    // Correct?
    reactionId: {
      type: Schema.Types.ObjectId,
      default: new Types.ObjectId()
    },
    reactionBody: {
      type: String,
      required: true,
      maxlength: [280, "Maximum character count is 280"],
    },
    username: {
      type: String,
      required: true,
    },
    createdAt: {
      type: Date,
      default: Date.now,
      //Use a getter method to format the timestamp on query
      get: (createdAtVal) => dateFormat(createdAtVal),
    },
  },
  //tell SCHEMA it can use virtuals + getters
  {
    toJSON: {
      getters: true,
    },
    id: false,
  }
);

// This will not be a model, but rather will be used as the reaction field's subdocument schema in the Thought model.
// const Reaction = model("Reaction", ReactionSchema);
module.exports = ReactionSchema;
