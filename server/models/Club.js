const mongoose = require("mongoose");

const clubSchema = new mongoose.Schema(
{
  name: String,

  description: String,

  logo: String,

  members: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: "User"
  }],

  projects: [
    {
      title: String,
      description: String,
      githubLink: String
    }
  ],

  resources: [
    {
      title: String,
      fileUrl: String
    }
  ],

  posts: [
  {
    content: String,
    author: String,
    createdAt: {
      type: Date,
      default: Date.now
    }
  }
],

events: [
  {
    title: String,
    date: Date
  }
]
},
{
  timestamps: true
});

module.exports =
mongoose.model(
  "Club",
  clubSchema
);