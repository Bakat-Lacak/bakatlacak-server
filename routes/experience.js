const express = require("express");
const router = express.Router();
const ExperienceController = require("../controllers/experienceController");

router.get("/", ExperienceController.getAll);
router.get("/me", ExperienceController.getByUserId);
router.get("/:id", ExperienceController.getById);
router.post("/", ExperienceController.create);
router.put("/update", ExperienceController.update);
router.delete("/delete", ExperienceController.delete);

module.exports = router;
