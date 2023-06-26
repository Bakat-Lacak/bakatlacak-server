const express = require("express");
const router = express.Router();
const UserController = require("../controllers/userController");

router.post("/register", UserController.register);
router.post("/login", UserController.login);
router.post("/update", UserController.update);
router.get("/:id", UserController.getByID);
router.post("/delete", UserController.delete);


module.exports = router;
