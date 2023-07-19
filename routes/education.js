const express = require("express");
const router = express.Router();
const EducationController = require("../controllers/educationController");

router.get("/", EducationController.getAll);
router.put("/update", EducationController.updateNew)
router.get("/me", EducationController.getByUserId)
router.post("/", EducationController.create);
router.post("/new", EducationController.createUserEducation)
router.get("/:id", EducationController.getById);
router.put("/:id", EducationController.update);
router.delete("/it", EducationController.delete);

module.exports = router;
