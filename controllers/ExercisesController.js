const Exercise = require("../models/Exercise");

const ExerciseController = {
  async createExercise(req, res, next) {
    try {
      const exercise = await Exercise.create(req.body);
      res.status(201).send({ message: "Ejercicio creado con éxito", exercise });
    } catch (error) {
      console.error(error);
      next(error);
    }
  },

  async getExercises(req, res) {
    try {
      const exercises = await Exercise.find();
      res.send(exercises);
    } catch (error) {
      console.error(error);
      res.status(500).send(error);
    }
  },

  async getExerciseById(req, res) {
    try {
      const exercise = await Exercise.findById(req.params._id);
      res.send(exercise);
    } catch (error) {
      console.error(error);
      res.status(500).send(error);
    }
  },

  async updateExercise(req, res) {
    try {
      const updatedExercise = await Exercise.findByIdAndUpdate(
        req.params._id,
        req.body,
        { new: true }
      );
      res.send({ message: "Ejercicio actualizado con éxito", exercise: updatedExercise });
    } catch (error) {
      console.error(error);
      res.status(500).send(error);
    }
  },

  async deleteExercise(req, res) {
    try {
      await Exercise.findByIdAndDelete(req.params._id);
      res.send({ message: "Ejercicio eliminado con éxito" });
    } catch (error) {
      console.error(error);
      res.status(500).send(error);
    }
  }
};

module.exports = ExerciseController;
