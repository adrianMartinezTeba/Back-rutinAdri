const mongoose = require("mongoose");

const RoutineSchema = new mongoose.Schema({
  name: String,
  description: String,
  days: [
    {
      dayName: String,
      exercises: [
        {
          exerciseId: { type: mongoose.Schema.Types.ObjectId, ref: "Exercise" }
        }
      ]
    }
  ],
  user: { type: mongoose.Schema.Types.ObjectId, ref: "User" }
});

const Routine = mongoose.model("Routine", RoutineSchema);

module.exports = Routine;
