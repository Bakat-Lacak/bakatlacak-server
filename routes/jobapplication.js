const express = require("express");
const router = express.Router();
const JobApplicationController = require("../controllers/jobapplicationController");
const documentsUpload = require("../middlewares/multer").documentsUpload;
const errorHandler = require("../middlewares/errorHandler");
const { authorization } = require("../middlewares/auth");

router.get(
  "/",
  authorization(["user"]),
  JobApplicationController.getAllByUserId
);

router.post(
  "/",
  authorization(["user"]),
  documentsUpload.fields([{ name: "resume", maxCount: 1 }]),
  JobApplicationController.createJobApplication
);

router.put(
  "/:id",
  authorization(["recruiter"]),
  JobApplicationController.updateJobApplication
);

router.get(
  "/allapply/:id",
  authorization(["recruiter"]),
  JobApplicationController.getApplicationForRecruiter
)

router.get(
  "/allapply",
  authorization(["recruiter"]),
  JobApplicationController.allAppliedUser
)

module.exports = router;
