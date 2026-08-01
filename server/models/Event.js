const mongoose = require("mongoose");

const eventSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
    },

    description: String,

    category: {
      type: String,
      enum: [
      "Academic",
      "Cultural",
      "Sports",
      "Workshop",
      "Hackathon",
      "Seminar"
    ]
    },

    club: String,

    houseCompetition: {
      type: Boolean,
      default: false,
    },

    venue: String,

    eventDate: Date,

    registrations: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
      },
    ],

    bannerImage: {
  type: String,
  default: ""
},
posterImage: {
  type: String,
  default: ""
},

organizer: String,

maxSeats: Number,

tags: [String],

status: {
  type: String,
  default: "Upcoming"
}
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model(
  "Event",
  eventSchema
);
