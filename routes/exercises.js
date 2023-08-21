const express = require("express")
const ExerciseController = require('../controllers/ExercisesController')
const router = express.Router()

router.post("/create",ExerciseController.createExercise)
router.delete("/delete/:_id",ExerciseController.deleteExercise)
router.put("/update/:_id", ExerciseController.updateExercise)
router.get('/all',ExerciseController.getExercises)
router.get("/byId/:_id", ExerciseController.getExerciseById)
router.get("/byName/:name", ExerciseController.getExerciseByName)
router.get("/byMuscleZonePrincipal/:muscleZone", ExerciseController.getExercisesByMuscleZonePrincipal);
router.get("/byDifficulty/:difficulty", ExerciseController.getExercisesByDifficulty);
router.get("/byEquipment/:equipment", ExerciseController.getExercisesByEquipment);

module.exports = router