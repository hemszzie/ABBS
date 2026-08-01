const User = require("../models/User");

exports.updateProfile = async (req, res) => {
  try {

    const user =
      await User.findByIdAndUpdate(
        req.params.id,
        req.body,
        { new: true }
      );

    res.json(user);

  } catch (error) {

    res.status(500).json({
      message: error.message,
    });

  }
};

exports.getUser = async (req, res) => {

  try {

    const user =
      await User.findById(req.params.id);

    const Event =
      require("../models/Event");

    const Club =
      require("../models/Club");

    const TeamRequest =
      require("../models/TeamRequest");

    const events =
      await Event.find({
        registrations: user._id,
      });

    const clubs =
      await Club.find({
        members: user._id,
      });

    const teams =
      await TeamRequest.find({
        members: user._id,
      });

    res.json({
      user,
      events,
      clubs,
      teams,
    });

  } catch (error) {

    res.status(500).json({
      message: error.message,
    });

  }

};

exports.uploadProfileImage =
async (req, res) => {

  try {

    const user =
    await User.findById(
      req.params.id
    );

    user.profileImage =
`/uploads/${req.file.filename}`;

    await user.save();

    res.json(user);

  } catch (error) {

    res.status(500).json({
      message:
      "Upload Failed"
    });

  }

};