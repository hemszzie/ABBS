const express =
require("express");

const router =
express.Router();

const {
  getHouses,
  getLeaderboard,
  addPoints,
  updatePointsByName
} = require("../controllers/houseController");

router.get(
  "/",
  getHouses
);

router.get(
  "/leaderboard",
  getLeaderboard
);

router.put(
  "/:id/add-points",
  addPoints
);

router.post(
  "/update-points",
  updatePointsByName
);

module.exports =
router;