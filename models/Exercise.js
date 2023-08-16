const mongoose = require("mongoose");

const ExerciseSchema = new mongoose.Schema({
  type:String,
  name: String,
  description: String,
  muscleZonePrincipal: String,
  muscleZoneSecundaries: [String],
  difficulty: String,
  imageMZP: String,
  videoId: String,
  // Otros campos si es necesario
});

const Exercise = mongoose.model("Exercise", ExerciseSchema);

module.exports = Exercise;
