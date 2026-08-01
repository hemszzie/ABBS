const express = require("express");

const router = express.Router();

const upload =
require("../middleware/upload");

const {
  getUser,
  updateProfile,
  uploadProfileImage
} = require(
  "../controllers/userController"
);

router.get(
  "/:id",
  getUser
);

router.put(
  "/:id",
  updateProfile
);

router.put(
  "/upload-profile/:id",
  upload.single(
    "profileImage"
  ),
  uploadProfileImage
);

module.exports = router;