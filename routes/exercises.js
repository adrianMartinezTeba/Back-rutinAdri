const express = require("express")
const ExerciseController = require('../controllers/ExercisesController')
const router = express.Router()

router.post("/create",ExerciseController.createExercise)
router.delete("/delete/:_id",ExerciseController.deleteExercise)
router.put("/update/:_id", ExerciseController.updateExercise)
router.get("/byId/:_id", ExerciseController.getExerciseById)
router.get('/all',ExerciseController.getExercises)

module.exports = router