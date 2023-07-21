const express = require("express");
const router = express.Router();
const UserProfileController = require("../controllers/userprofileController");
const documentsUpload = require("../middlewares/multer").documentsUpload;
const imageUpload = require("../middlewares/multer").imageUpload;
const documentsImageUpload =
  require("../middlewares/multer").documentsImageUpload;
const errorHandler = require("../middlewares/errorHandler");

router.get("/", UserProfileController.getAllUserProfile, errorHandler);

router.get("/:user_id", UserProfileController.getUserProfileById, errorHandler);

router.post(
  "/",
  documentsImageUpload.fields([
    { name: "resume", maxCount: 1 },
    { name: "portofolio", maxCount: 1 },
    { name: "image", maxCount: 1 },
  ]),
  // imageUpload.fields([{ name: "image", maxCount: 1 }]),

  UserProfileController.createUserProfile,
  errorHandler
);

router.put(
  "/:user_id",
  documentsImageUpload.fields([
    { name: "resume", maxCount: 1 },
    { name: "portofolio", maxCount: 1 },
    { name: "image", maxCount: 1 },
  ]),
  UserProfileController.updateUserProfile,
  errorHandler
);

router.delete(
  "/:user_id",
  UserProfileController.deleteUserProfile,
  errorHandler
);

module.exports = router;
