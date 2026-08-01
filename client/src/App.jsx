import { Routes, Route } from "react-router-dom"
import Home from "./pages/Home"
import Login from "./pages/Login"
import Dashboard from "./pages/Dashboard"
import Register from "./pages/Register"
import Feed from "./pages/Feed"
import Profile from "./pages/Profile"
import Clubs from "./pages/Clubs"
import Houses from "./pages/Houses"
import Events from "./pages/Events"
import EventDetails from "./pages/EventDetails"
import FacultyDashboard from "./pages/FacultyDashboard"
import Announcements from "./pages/Announcements"
import CreateEvent from "./pages/CreateEvent"
import ExternalEvents from "./pages/ExternalEvents"
import TeamRequests from "./pages/TeamRequests"
import ClubDetails from "./pages/ClubDetails"
import HouseLeaderboard from "./pages/HouseLeaderboard"
import ExternalEventDetails from "./pages/ExternalEventDetails"
import EditProfile from "./pages/EditProfile"
import CreateAnnouncement from "./pages/CreateAnnouncement"
import CreateClub from "./pages/CreateClub"
import CreateHousePoints from "./pages/CreateHousePoints"
import CreateExternalEvent from "./pages/CreateExternalEvent"

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="/register" element={<Register />} />
      <Route path="/feed" element={<Feed />} />
      <Route path="/profile" element={<Profile />} />
      <Route path="/clubs" element={<Clubs />} />
      <Route path="/houses" element={<Houses />} />
      <Route path="/events" element={<Events />} />
      <Route path="/events/:id" element={<EventDetails />} />
      <Route path="/faculty-dashboard" element={<FacultyDashboard />} />
      <Route path="/announcements" element={<Announcements />} />
      <Route path="/create-event" element={<CreateEvent />} />
      <Route path="/external-events" element={<ExternalEvents />} />
      <Route path="/team-requests" element={<TeamRequests />} />
      <Route path="/clubs/:id" element={<ClubDetails />} />
      <Route path="/house-leaderboard" element={<HouseLeaderboard />} />
      <Route path="/external-events/:id" element={<ExternalEventDetails />} />
      <Route path="/edit-profile" element={<EditProfile />} />
      <Route path="/create-announcement" element={<CreateAnnouncement />} />
      <Route path="/create-club" element={<CreateClub />} />
      <Route path="/create-house-points" element={<CreateHousePoints />} />
      <Route path="/create-external-event" element={<CreateExternalEvent />} />
    </Routes>
  )
}

export default App