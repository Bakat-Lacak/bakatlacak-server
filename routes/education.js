const express = require("express");
const router = express.Router();
const EducationController = require("../controllers/educationController");

router.get("/", EducationController.getAllUser);
router.post("/create", EducationController.create);
router.get("/:id", EducationController.getById);
router.put("/:id", EducationController.update);
router.delete("/:id", EducationController.delete);

module.exports = router;
