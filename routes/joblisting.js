const express = require("express");
const router = express.Router();
const JobListingController = require("../controllers/joblistingController");
const {authorization} = require("../middlewares/auth")

router.get("/", JobListingController.getJobListing);
router.get("/:id", JobListingController.getJobListingByID);
router.post("/", authorization(["recruiter"]), JobListingController.createJobListing);
router.put("/:id", authorization(["recruiter"]), JobListingController.updateJobListing);
router.delete("/:id", authorization(["recruiter"]), JobListingController.deleteJobListing);

module.exports = router;
