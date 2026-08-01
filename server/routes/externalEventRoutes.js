const express = require("express");
const router = express.Router();
const upload = require("../middleware/upload"); // Ensure this handles PDF

const {
  getExternalEvents,
  createExternalEvent,
  getExternalEventById
} = require("../controllers/externalEventController");

const { isFaculty } = require("../middleware/roleMiddleware");

router.get("/", getExternalEvents);
router.post("/", isFaculty, upload.single("brochurePdf"), createExternalEvent);
router.get("/:id", getExternalEventById);

module.exports = router;