const express = require("express");
const router = express.Router();
const authRouter = require("./auth");
const userRouter = require("./user");
const jobListingRouter = require("./joblisting");
const companyProfileRouter = require("./companyprofile")
const typeRouter = require("./type");
const { authentication, authorization } = require("../middlewares/auth");
const UserController = require("../controllers/userController")

router.use("/api/auth", authRouter);
router.use(authentication); // BELOW HERE AUTHENTICATED ROUTES
router.use("/api/job_listing", jobListingRouter);

// router.use(authorization(["admin", "user", "recruiter"])); // BELOW HERE AUTHORIZATION ROUTES
router.use("/api/users", userRouter);
router.use("/api/companyProfile", companyProfileRouter);
router.use("/api/types", typeRouter);

module.exports = router;
