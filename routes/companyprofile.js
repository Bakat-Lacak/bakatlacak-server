const express = require("express");
const router = express.Router();
const CompanyProfileController = require("../controllers/companyprofileController");

router.get("/", CompanyProfileController.getAll);
router.post("/create", CompanyProfileController.create);
router.get("/:id", CompanyProfileController.getById);
router.put("/:id", CompanyProfileController.update);
router.delete("/:id", CompanyProfileController.delete);

module.exports = router;
