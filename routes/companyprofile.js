const express = require("express");
const router = express.Router();
const CompanyProfileController = require("../controllers/companyprofileController");
const {authorization} = require("../middlewares/auth")
const imageUpload = require("../middlewares/multer").imageUpload;

router.get("/", CompanyProfileController.getAll);
router.post("/", authorization(["recruiter"]), imageUpload.fields([
    { name: "image", maxCount: 1 },
  ]), CompanyProfileController.create,

);

router.get("/:id", CompanyProfileController.getById);
router.put("/:id", authorization(["recruiter"]), imageUpload.fields([
    { name: "image", maxCount: 1 },
  ]), CompanyProfileController.update);
router.delete("/:id", authorization(["recruiter"]), CompanyProfileController.delete);

module.exports = router;
