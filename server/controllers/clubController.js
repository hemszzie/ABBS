const Club = require("../models/Club");

exports.getClubs = async (req, res) => {
  try {
    const clubs = await Club.find();
    res.json(clubs);
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

exports.getClubById = async (req, res) => {
  try {
    const club = await Club.findById(
      req.params.id
    );

    if (!club) {
      return res.status(404).json({
        message: "Club not found",
      });
    }

    res.json(club);

  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

exports.joinClub = async (req, res) => {
  const { userId } = req.body;

  const club = await Club.findById(
    req.params.id
  );

  if (
    !club.members.includes(userId)
  ) {
    club.members.push(userId);
  }

  await club.save();

  res.json(club);
};

exports.leaveClub = async (req, res) => {
  const { userId } = req.body;

  const club = await Club.findById(
    req.params.id
  );

  club.members = club.members.filter(
    (m) => m.toString() !== userId
  );

  await club.save();

  res.json(club);
};

exports.createClub = async (req, res) => {
  try {
    const club = await Club.create(req.body);

    res.status(201).json(club);
  } catch (error) {
    res.status(500).json({
      message: error.message
    });
  }
};