const mongoose = require("mongoose");

const ExerciseSchema = new mongoose.Schema({
  name: String,
  description: String,
  type: String,
  difficulty: String,
  image: String,
  demoVideoLink: String,
  // Otros campos si es necesario
});

const Exercise = mongoose.model("Exercise", ExerciseSchema);

module.exports = Exercise;
