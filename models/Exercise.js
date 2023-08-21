const mongoose = require("mongoose");

const ExerciseSchema = new mongoose.Schema({
  equipment: String,
  name: String,
  description: String,
  muscleZonePrincipal: String,
  muscleZoneSecundaries: String,
  difficulty: String,
  videoId: String,
  // Otros campos si es necesario
});

const Exercise = mongoose.model("Exercise", ExerciseSchema);

module.exports = Exercise;
