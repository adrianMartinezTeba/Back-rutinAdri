const Exercise = require("../models/Exercise");

const ExerciseController = {
  async createExercise(req, res) {
    try {
      const exercise = await Exercise.create(req.body);
      res.status(201).send({ message: "Ejercicio creado con éxito", exercise });
    } catch (error) {
      console.error(error);
  
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
  async getExerciseByName(req, res) {
    try {
      const exerciseName = req.params.name; // Obtén el nombre del ejercicio de los parámetros de la URL
      const { name } = req.query; // Obtén el parámetro de búsqueda de la URL

      let exercises;

      if (name) {
        exercises = await Exercise.find({ name: { $regex: name, $options: "i" } }); // Búsqueda de ejercicios por nombre
      } else {
        // Si no se proporciona un parámetro de búsqueda, busca el ejercicio exacto por nombre
       exercises = await Exercise.findOne({ name: exerciseName });

        if (exercises) {
          res.send(exercises); // Si se encuentra el ejercicio, envíalo como respuesta
          return;
        } else {
          res.status(404).send({ message: "No se encontró el ejercicio" }); // Si no se encuentra, responde con un error 404
          return;
        }
      }

      res.send(exercises); // Si se encuentra algún ejercicio con la búsqueda por nombre, envía como respuesta
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
