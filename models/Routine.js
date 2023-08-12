const mongoose = require("mongoose");
const ObjectId = mongoose.Schema.Types.ObjectId
const RoutineSchema = new mongoose.Schema({
  name: String,
  description: String,
  days: [
    {
      dayName: String,
      exercises: [
        {
          exerciseId: { type:ObjectId , ref: "Exercise" },
          series:String
        }
      ]
    }
  ],
  userCreator: { type: ObjectId, ref: "User" },
  usersFavs :[ {type: ObjectId, ref: "User" }]
});

const Routine = mongoose.model("Routine", RoutineSchema);

module.exports = Routine;
