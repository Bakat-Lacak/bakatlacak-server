const express = require("express");
const router = express.Router();
const UserController = require("../controllers/userController");

router.post("/register", UserController.register);
router.post("/login", UserController.login);
router.put("/update/:id", UserController.update);
router.delete("/delete/:id", UserController.delete);

module.exports = router;
