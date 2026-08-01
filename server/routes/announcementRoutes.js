const express = require("express");
const router = express.Router();

const {
  getAnnouncements,
  createAnnouncement,
} = require("../controllers/announcementController");

const {
  isFaculty
} = require(
  "../middleware/roleMiddleware"
);

router.get("/", getAnnouncements);
router.post("/", isFaculty, createAnnouncement);

module.exports = router;