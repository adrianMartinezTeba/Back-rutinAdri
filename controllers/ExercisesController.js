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
  
      const exercises = await Exercise.find({ name: { $regex: exerciseName, $options: "i" } }); // Búsqueda de ejercicios que contengan las palabras proporcionadas
  
      if (exercises.length > 0) {
        res.send(exercises); // Si se encuentran ejercicios, envíalos como respuesta
      } else {
        res.status(404).send({ message: "No se encontraron ejercicios" }); // Si no se encuentra ningún ejercicio, responde con un error 404
      }
    } catch (error) {
      console.error(error);
      res.status(500).send(error);
    }
  },
  async  getExercisesByMuscleZonePrincipal(req, res) {
    try {
      const muscleZone = req.params.muscleZone; // Obtén el valor del parámetro desde la URL
  
      const exercises = await Exercise.find({ muscleZonePrincipal: muscleZone });
  
      if (exercises.length > 0) {
        res.send(exercises);
      } else {
        res.status(404).send({ message: "No se encontraron ejercicios para la zona muscular principal proporcionada" });
      }
    } catch (error) {
      console.error(error);
      res.status(500).send(error);
    }
  },
  
  // Controlador para buscar ejercicios por muscleZoneSecundaries
  async  getExercisesByMuscleZoneSecundaries(req, res) {
    try {
      const muscleZone = req.params.muscleZone; // Obtén el valor del parámetro desde la URL
  
      const exercises = await Exercise.find({ muscleZoneSecundaries: muscleZone });
  
      if (exercises.length > 0) {
        res.send(exercises);
      } else {
        res.status(404).send({ message: "No se encontraron ejercicios para la zona muscular secundaria proporcionada" });
      }
    } catch (error) {
      console.error(error);
      res.status(500).send(error);
    }
  },
  
  // Controlador para buscar ejercicios por dificultad
  async  getExercisesByDifficulty(req, res) {
    try {
      const difficulty = req.params.difficulty; // Obtén el valor del parámetro desde la URL
  
      const exercises = await Exercise.find({ difficulty: difficulty });
  
      if (exercises.length > 0) {
        res.send(exercises);
      } else {
        res.status(404).send({ message: "No se encontraron ejercicios para la dificultad proporcionada" });
      }
    } catch (error) {
      console.error(error);
      res.status(500).send(error);
    }
  },
  async  getExercisesByType(req, res) {
    try {
      const type = req.params.type; // Obtén el valor del parámetro desde la URL
  
      const exercises = await Exercise.find({ type });
  
      if (exercises.length > 0) {
        res.send(exercises);
      } else {
        res.status(404).send({ message: "No se encontraron ejercicios para la dificultad proporcionada" });
      }
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
