const express = require("express");
const router = express.Router();
const authRouter = require("./auth");
const userRouter = require("./user");
const companyProfileRouter = require("./companyprofile")
const { authentication, authorization } = require("../middlewares/auth");
const UserController = require("../controllers/userController")

router.use("/api/auth", authRouter);
router.use(authentication); // BELOW HERE AUTHENTICATED ROUTES
router.get("/api/users/:id", UserController.getByID);


// router.use(authorization(["admin", "user", "recruiter"])); // BELOW HERE AUTHORIZATION ROUTES
router.use("/api/users", userRouter);
router.use("/api/companyProfile", companyProfileRouter);

module.exports = router;
