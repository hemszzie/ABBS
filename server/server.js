const express = require("express")
const cors = require("cors")
const dotenv = require("dotenv")
const mongoose = require("mongoose")
const postRoutes = require("./routes/postRoutes");

const authRoutes = require("./routes/authRoutes");

const userRoutes = require("./routes/userRoutes");

const clubRoutes = require("./routes/clubRoutes");

const houseRoutes = require("./routes/houseRoutes");

const eventRoutes = require("./routes/eventRoutes");

const Announcement = require("./models/Announcement")

const announcementRoutes = require("./routes/announcementRoutes")

const externalEventRoutes = require("./routes/externalEventRoutes")

const teamRequestRoutes = require("./routes/teamRequestRoutes")

dotenv.config()

const app = express()

app.use(cors())
app.use(express.json())

app.use(
  "/uploads",
  express.static("uploads")
);

app.use("/api/auth", authRoutes);
app.use("/api/posts", postRoutes);
app.use("/api/users", userRoutes);
app.use("/api/clubs", clubRoutes);
app.use("/api/houses", houseRoutes);
app.use("/api/events", eventRoutes);
app.use("/api/announcements", announcementRoutes);
app.use("/api/external-events", externalEventRoutes);
app.use("/api/team-requests", teamRequestRoutes);
mongoose.connect(process.env.MONGO_URI)
.then(() => console.log("MongoDB Connected"))
.catch((err) => console.log(err))

app.get("/", (req, res) => {
  res.send("ABBS Nexus API Running")
})

const PORT = process.env.PORT || 5000

app.listen(PORT, () => {
  console.log(`Server running on ${PORT}`)
})

app.use(
  "/uploads",
  express.static("uploads")
);