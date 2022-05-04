const mongoose = require("mongoose");

const pokemonsSchema = new mongoose.Schema({
  name: String,
  level: {
    type: Number,
    min: 1,
    max: 100,
  },
  health_point: {
    type: Number,
    min: 0,
  },
  trainer: {
    type: mongoose.SchemaTypes.ObjectId,
    ref: "trainer",
  },
  gender: {
    type: String,
    enum: ["Male", "Female"],
    default: "Male",
  },
  weight: {
    type: Number,
    min: 0,
  },
  size: {
    type: String,
    enum: ["small", "medium", "big"],
    default: "small",
  },
});

module.exports = mongoose.model("pokemons", pokemonsSchema);
