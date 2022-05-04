const mongoose = require("mongoose");

const trainerSchema = new mongoose.Schema({
  name: String,
  age: Number,
  gender: {
    type: String,
    enum: ["Boy", "Girl"],
    default: "Boy",
  },
});

module.exports = mongoose.model("trainer", trainerSchema);
