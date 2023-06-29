const express = require("express");
const router = express.Router();
const CompanyProfileController = require("../controllers/companyprofileController");
const {authorization} = require("../middlewares/auth")

router.get("/", CompanyProfileController.getAll);
router.post("/", authorization(["recruiter"]), CompanyProfileController.create);
router.get("/:id", CompanyProfileController.getById);
router.put("/:id", authorization(["recruiter"]), CompanyProfileController.update);
router.delete("/:id", authorization(["recruiter"]), CompanyProfileController.delete);

module.exports = router;
