const express = require("express");

const router = express.Router();

const {
  getClubs,
  joinClub,
  leaveClub,
  getClubById,
  createClub
} = require("../controllers/clubController");

const {
  isFaculty
} = require("../middleware/roleMiddleware");

router.get("/", getClubs);

router.get("/:id", getClubById);

router.put("/:id/join", joinClub);

router.put("/:id/leave", leaveClub);

router.post(
  "/",
  isFaculty,
  createClub
);

module.exports = router;