const express = require("express");
const router = express.Router();
const authRouter = require("./auth");
const userRouter = require("./user");
const experienceRouter = require("./experience");
const educationRouter = require("./education");
const { authentication } = require("../middlewares/auth");

router.use("/api/auth", authRouter);
router.use(authentication); // BELOW HERE AUTHENTICATED ROUTES
router.use("/api/users", userRouter);
router.use("/api/experiences", experienceRouter);
router.use("/api/educations", educationRouter);
module.exports = router;
