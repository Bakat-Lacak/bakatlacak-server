const express = require("express");
const router = express.Router();
const authRouter = require("./auth");
const userRouter = require("./user");
const jobListingRouter = require("./joblisting");
const experienceRouter = require("./experience");
const educationRouter = require("./education");
const companyProfileRouter = require("./companyprofile");
const typeRouter = require("./type");
const { authentication, authorization } = require("../middlewares/auth");

router.use("/api/auth", authRouter);
router.use(authentication); // BELOW HERE AUTHENTICATED ROUTES
router.use("/api/job_listing", jobListingRouter);

// router.use(authorization(["admin", "user", "recruiter"])); // BELOW HERE AUTHORIZATION ROUTES
router.use("/api/users", userRouter);
router.use("/api/companyProfile", companyProfileRouter);
router.use("/api/experiences", experienceRouter);
router.use("/api/educations", educationRouter);
router.use("/api/types", typeRouter);
module.exports = router;
