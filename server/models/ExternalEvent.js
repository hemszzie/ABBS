const mongoose = require("mongoose");

const externalEventSchema = new mongoose.Schema(
  {
    college: String,
    title: String,
    description: String,

    posterImage: String,

    brochurePdf: String,

    registrationLink: String,

    venue: String,

    eventDate: Date,

    teamSize: Number,

    category: String
  },
  {
    timestamps: true
  }
);

module.exports = mongoose.model(
  "ExternalEvent",
  externalEventSchema
);