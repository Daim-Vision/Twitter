const mongoose = require("mongoose");

const usersSchema = mongoose.Schema({
  name: String,
  saves: [
    {
      type: mongoose.SchemaTypes.ObjectId,
      ref: "Twitt",
    },
  ],
});

const User = mongoose.model("User", usersSchema);

module.exports = User;
