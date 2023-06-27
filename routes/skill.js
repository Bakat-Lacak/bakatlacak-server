const express = require("express");
const router = express.Router();
const SkillController = require("../controllers/skillController");

router.get("/", SkillController.getAllSkills);
router.post("/", SkillController.createSkill);
router.get("/:id", SkillController.getSkillById);
router.put("/:id", SkillController.updateSkill);
router.delete("/:id", SkillController.deleteSkill);