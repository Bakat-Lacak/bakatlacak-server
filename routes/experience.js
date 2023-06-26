const express = require("express");
const router = express.Router();
const ExperienceController = require("../controllers/experienceController");

router.get("/", ExperienceController.getAll);
router.post("/create", ExperienceController.create);
router.get("/:id", ExperienceController.getById);
router.put("/:id", ExperienceController.update);
router.delete("/:id", ExperienceController.delete);

module.exports = router;
