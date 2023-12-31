const express = require("express");
const router = express.Router();
const UserProfileController = require("../controllers/userprofileController");
const documentsUpload = require("../middlewares/multer").documentsUpload;
const errorHandler = require("../middlewares/errorHandler");

router.get("/", UserProfileController.getAllUserProfile, errorHandler);

router.put("/update", documentsUpload.fields([
  { name: 'resume', maxCount: 1 },
  { name: 'portofolio', maxCount: 1 }
]), UserProfileController.updateUserProfile, errorHandler);
router.get("/:user_id", UserProfileController.getUserProfileById, errorHandler);

router.post("/", documentsUpload.fields([
  { name: 'resume', maxCount: 1 },
  { name: 'portofolio', maxCount: 1 }
]), UserProfileController.createUserProfile, errorHandler);


router.delete("/:user_id", UserProfileController.deleteUserProfile, errorHandler);

module.exports = router;