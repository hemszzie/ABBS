const mongoose = require("mongoose");

const houseSchema = new mongoose.Schema(
{
  name: String,

  description: String,

  color: String,

  points: {
    type: Number,
    default: 0
  },

  achievements: [
    {
      title: String,
      points: Number
    }
  ],

  members: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User"
    }
  ],

  history: [
  {
    points: Number,
    reason: String,
    updatedAt: {
      type: Date,
      default: Date.now
    }
  }
]
},
{
  timestamps: true
});

module.exports =
mongoose.model(
  "House",
  houseSchema
);