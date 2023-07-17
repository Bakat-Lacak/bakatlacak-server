const express = require("express");
const router = express.Router();
const ExperienceController = require("../controllers/experienceController");

router.get("/", ExperienceController.getAll);
router.get("/me", ExperienceController.getByUserId);
router.get("/:id", ExperienceController.getById);
router.post("/", ExperienceController.create);
router.put("/:id", ExperienceController.update);
router.delete("/:id", ExperienceController.delete);

module.exports = router;
