const express = require("express");
const router = express.Router();
const authRouter = require("./auth");
const userRouter = require("./user");
const { authentication, authorization } = require("../middlewares/auth");

router.use("/api/auth", authRouter);
router.use(authentication); // BELOW HERE AUTHENTICATED ROUTES

router.use(authorization(["admin", "user", "recruiter"])); // BELOW HERE AUTHORIZATION ROUTES
router.use("/api/users", userRouter);
router.use("/api/companyProfile", companyProfile);

module.exports = router;
