const mongoose = require("mongoose");

const commentsSchema = mongoose.Schema({
  text: String,
  user: {
    type: mongoose.SchemaTypes.ObjectId,
    ref: "User",
  },
  toTwitt: {
    type: mongoose.SchemaTypes.ObjectId,
    ref: "Twitt",
  },
});

const Comment = mongoose.model("Comment", commentsSchema);
module.exports = Comment;
