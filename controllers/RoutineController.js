const Routine = require("../models/Routine");

const RoutineController = {
  async createRoutine(req, res, next) {
    try {
      const routine = await Routine.create(req.body);
      res.status(201).send({ message: "Rutina creada con éxito", routine });
    } catch (error) {
      console.error(error);
      next(error);
    }
  },

  async getRoutines(req, res) {
    try {
      const routines = await Routine.find();
      res.send(routines);
    } catch (error) {
      console.error(error);
      res.status(500).send(error);
    }
  },

  async getRoutineById(req, res) {
    try {
      const routine = await Routine.findById(req.params._id);
      res.send(routine);
    } catch (error) {
      console.error(error);
      res.status(500).send(error);
    }
  },

  async updateRoutine(req, res) {
    try {
      const updatedRoutine = await Routine.findByIdAndUpdate(
        req.params._id,
        req.body,
        { new: true }
      );
      res.send({ message: "Rutina actualizada con éxito", routine: updatedRoutine });
    } catch (error) {
      console.error(error);
      res.status(500).send(error);
    }
  },

  async deleteRoutine(req, res) {
    try {
      await Routine.findByIdAndDelete(req.params._id);
      res.send({ message: "Rutina eliminada con éxito" });
    } catch (error) {
      console.error(error);
      res.status(500).send(error);
    }
  }
};

module.exports = RoutineController;
