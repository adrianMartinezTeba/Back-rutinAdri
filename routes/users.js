const express = require("express");
const UserController = require("../controllers/UserController");
const router = express.Router();

router.post("/register", UserController.register);
router.get("/confirmRegister/:emailToken", UserController.confirm);
router.post("/login", UserController.login);
router.delete("/logout", UserController.logout);
router.get("/userInfo/:_id", UserController.getInfoById);
router.get('/recoverPassword/:email', UserController.recoverPassword);
router.put("/resetPassword/:recoverToken", UserController.resetPassword);

module.exports = router;
