const express = require("express");
const router = express.Router();
const SkillController = require("../controllers/skillController");

router.get("/", SkillController.getAllSkills);
router.get("/me", SkillController.getSkillByUserId)
router.post("/new", SkillController.addUserSkill);
router.post("/", SkillController.createSkill);
router.get("/:id", SkillController.getSkillById);
router.put("/:id", SkillController.updateSkill);
router.delete("/delete", SkillController.deleteUserSkill);
router.delete("/:id", SkillController.deleteSkill);

module.exports = router;
