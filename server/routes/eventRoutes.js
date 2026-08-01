const express = require("express");

const router = express.Router();

const {
  isFaculty
} = require(
  "../middleware/roleMiddleware"
);

const {
  getEvents,
  createEvent,
  registerEvent,
  getEvent
} = require(
  "../controllers/eventController"
);

router.get("/", getEvents);

router.post("/", isFaculty, createEvent);

router.put("/:id/register", registerEvent );

router.get("/:id", getEvent);

module.exports = router;