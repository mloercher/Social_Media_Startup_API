const { Schema, model } = require("mongoose");

const UserSchema = new Schema({
  username: {
    type: String,
    unique: true,
    required: "Username is required",
    trim: true,
  },

  email: {
    type: String,
    unique: true,
    required: "email address is required",
    match: "/^([a-z0-9_.-]+)@([da-z.-]+).([a-z.]{2,6})$/",
  },
  thoughts: [
    {
      type: Schema.Types.ObjectId,
      ref: "Thought",
    },
  ],
  friends: [
    {
      type: Schema.Types.ObjectId,
      ref: "User",
    },
  ],
});

//Create a virtual called friendCount that retrieves the length of the user's friends array field on query.

const User = model("User", UserSchema);

module.exports = User;
