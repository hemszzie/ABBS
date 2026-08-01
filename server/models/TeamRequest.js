const mongoose = require("mongoose");

const teamRequestSchema =
new mongoose.Schema(
{
  eventName: String,

  createdBy: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User"
  },

  description: String,

  requiredMembers: Number,

  members: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: "User"
  }],

  joinRequests: [{
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User"
    },

    status: {
      type: String,
      default: "pending"
    }
  }]
},
{
  timestamps:true
});

module.exports =
mongoose.model(
  "TeamRequest",
  teamRequestSchema
);