const express = require("express");
const router = express.Router();
const JobApplicationController = require("../controllers/jobapplicationController");
const documentsUpload = require("../middlewares/multer").documentsUpload;
const errorHandler = require("../middlewares/errorHandler");
const { authorization } = require("../middlewares/auth");

router.post("/", authorization(["user"]), documentsUpload.fields([
  { name: 'resume', maxCount: 1 },
]), JobApplicationController.createJobApplication);

router.put("/:id", authorization(["recruiter"]), JobApplicationController.updateJobApplication)

module.exports = router;