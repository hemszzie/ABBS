const mongoose = require("mongoose");

const announcementSchema =
new mongoose.Schema(
  {
    title: String,

    content: String,

    category: {
      type: String,
      enum: [
        "General",
        "Academic",
        "Placement",
        "Club",
        "Event"
      ]
    },

    createdBy: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User"
    }
  },
  {
    timestamps: true
  }
);

module.exports =
mongoose.model(
  "Announcement",
  announcementSchema
);