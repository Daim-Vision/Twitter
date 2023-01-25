const mongoose = require("mongoose");

const twittsSchema = mongoose.Schema({
  text: String,
  likes: [
    {
      type: mongoose.SchemaTypes.ObjectId,
      ref: "User",
    },
  ],
});

const Twitt = mongoose.model("Twitt", twittsSchema);

module.exports = Twitt;
