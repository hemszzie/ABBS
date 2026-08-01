const House =
require("../models/House");

exports.getHouses =
async (req, res) => {

  const houses =
  await House.find();

  res.json(houses);
};

exports.getLeaderboard =
async (req, res) => {

  const houses =
  await House.find()
  .sort({
    points: -1
  });

  res.json(houses);
};

exports.addPoints =
async (req, res) => {

  const house =
  await House.findById(
    req.params.id
  );

house.points += Number(points);

house.history.push({
  points: Number(points),
  reason: req.body.reason
});

await house.save();

  res.json(house);
};

exports.updatePointsByName = async (req, res) => {
  try {
    const { houseName, points, reason } = req.body;

    const house = await House.findOne({
      name: houseName,
    });

    if (!house) {
      return res.status(404).json({
        message: "House not found",
      });
    }

    house.points += Number(points);

    house.history.push({
      points: Number(points),
      reason: reason,
    });

    await house.save();

    res.json({
      message: "Points Updated Successfully",
      house,
    });

  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};