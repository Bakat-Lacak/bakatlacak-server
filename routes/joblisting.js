const express = require("express");
const router = express.Router();
const JobListingController = require("../controllers/joblistingController");

router.get("/", JobListingController.getJobListing);
router.get("/:id", JobListingController.getJobListingByID);
router.post("/", JobListingController.createJobListing);
router.put("/:id", JobListingController.updateJobListing);
router.delete("/:id", JobListingController.deleteJobListing);

module.exports = router;
