const express = require("express")
const RoutineController = require("../controllers/RoutineController")
const router = express.Router()

router.post("/create",RoutineController.createRoutine)
router.delete("/delete/:_id",RoutineController.deleteRoutine)
router.put("/update/:_id", RoutineController.updateRoutine)
router.get("/byId/:_id", RoutineController.getRoutineById)
router.get('/all',RoutineController.getRoutines)

module.exports = router