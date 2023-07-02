const express = require("express");
const router = express.Router();
const TypeController = require("../controllers/typeController");

router.get("/", TypeController.getAllTypes);
router.post("/", TypeController.createType);
router.get("/:id", TypeController.getTypeById);
router.put("/:id", TypeController.updateType);
router.delete("/:id", TypeController.deleteType);

module.exports = router;