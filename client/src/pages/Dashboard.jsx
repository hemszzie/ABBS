import { Link } from "react-router-dom";
import BottomNav from "../components/BottomNav";
import { useEffect, useState } from "react";
import axios from "axios";

function Dashboard() {

  const user =
    JSON.parse(
      localStorage.getItem("user")
    );

  const [search, setSearch] =
  useState("");

  const [events, setEvents] =
    useState([]);

  const [announcements, setAnnouncements] =
    useState([]);

  const [houses, setHouses] =
    useState([]);

  const [clubs, setClubs] =
    useState([]);

  const [teams, setTeams] =
    useState([]);

  const [externalEvents, setExternalEvents] =
    useState([]);

  const [myEvents, setMyEvents] =
  useState([]);

const [myClubs, setMyClubs] =
  useState([]);

const [myTeams, setMyTeams] =
  useState([]);

  const filteredEvents =
  events.filter((event) =>
    event.title
      ?.toLowerCase()
      .includes(
        search.toLowerCase()
      )
  );

const filteredClubs =
  clubs.filter((club) =>
    club.name
      ?.toLowerCase()
      .includes(
        search.toLowerCase()
      )
  );

const filteredHouses =
  houses.filter((house) =>
    house.name
      ?.toLowerCase()
      .includes(
        search.toLowerCase()
      )
  );
  useEffect(() => {

    axios
      .get(
        "http://localhost:5000/api/events"
      )
      .then((res) =>
        setEvents(
          res.data.slice(0, 3)
        )
      );

    axios
      .get(
        "http://localhost:5000/api/announcements"
      )
      .then((res) =>
        setAnnouncements(
          res.data.slice(0, 3)
        )
      );

    axios
      .get(
        "http://localhost:5000/api/houses/leaderboard"
      )
      .then((res) =>
        setHouses(
          res.data.slice(0, 3)
        )
      );

    axios
      .get(
        "http://localhost:5000/api/clubs"
      )
      .then((res) =>
        setClubs(
          res.data.slice(0, 3)
        )
      );

    axios
      .get(
        "http://localhost:5000/api/team-requests"
      )
      .then((res) =>
        setTeams(
          res.data.slice(0, 3)
        )
      );

    axios
      .get(
        "http://localhost:5000/api/external-events"
      )
      .then((res) =>
        setExternalEvents(
          res.data
        )
      );

    axios
  .get(
    `http://localhost:5000/api/users/${user._id}`
  )
  .then((res) => {

    console.log("PROFILE DATA:", res.data);

    setMyEvents(
      res.data.events || []
    );

    setMyClubs(
      res.data.clubs || []
    );

    setMyTeams(
      res.data.teams || []
    );

  });

  }, []);

  return (
    <div className="min-h-screen bg-slate-950 text-white p-6 pb-24">


      {/* Hero */}

    
  <div
    className="
      relative
      bg-gradient-to-r
     bg-gradient-to-r
from-teal-600
via-cyan-600
to-blue-800
      p-10
      rounded-[32px]
      shadow-2xl
    "
  >
    
  <img
  src="/abbs.png"
  alt="ABBS"
  className="
    absolute
    top-0
    left-6
    w-100
    h-auto
    object-contain
  "
/>

    {user?.role === "faculty" && (

      <Link
        to="/faculty-dashboard"
        className="
          absolute
          top-8
          right-8
          bg-white
          text-slate-900
          px-6
          py-3
          rounded-2xl
          font-semibold
          shadow-lg
          hover:scale-105
          transition
        "
      >
        🎓 Faculty Dashboard →
      </Link>

    )}

   <div className="
flex
flex-col
md:flex-row
items-center
gap-5
mt-12
">

  <img
    src={
  user?.profileImage
    ? `http://localhost:5000${user.profileImage}`
    : `https://ui-avatars.com/api/?name=${user?.name}`
}
    alt="Profile"
    className="
      w-24
      h-24
      rounded-full
      border-4
      border-white
      object-cover
    "
  />

  <div>

    <h1 className="text-3xl md:text-7xl font-black">
      Welcome {user?.name} 🫱🏻‍🫲🏻
    </h1>

    <p className="text-blue-100">
      {user?.email}
    </p>

  </div>

</div>

    <p className="mt-4 text-xl text-blue-100">
      Your Digital Campus Community
    </p>

    <p className="text-blue-200 mt-1">
      ABBS Nexus
    </p>

    <div className="
mt-6
flex
flex-col
md:flex-row
gap-3
md:gap-6
text-base
md:text-lg
">

      <span>📅 Events Hub</span>

      <span>🏛 Clubs & Communities</span>

      <span>🏆 House Competitions</span>

      <span>🌎 External Opportunities</span>

    </div>

  </div>

    <h2 className="text-2xl font-bold mt-10 mb-4">
  🎯 My Activity
</h2>

<div className="grid md:grid-cols-3 gap-4">

  <div className="
  bg-slate-900
  p-5
  rounded-2xl
  hover:-translate-y-1
  hover:bg-slate-800
  transition
">

    <h3 className="text-3xl font-bold">
      {myEvents.length}
    </h3>

    <p>
      Registered Events
    </p>

  </div>

  <div className="
  bg-slate-900
  p-5
  rounded-2xl
  hover:-translate-y-1
  hover:bg-slate-800
  transition
">

    <h3 className="text-3xl font-bold">
      {myClubs.length}
    </h3>

    <p>
      Joined Clubs
    </p>

  </div>

  <div className="
  bg-slate-900
  p-5
  rounded-2xl
  hover:-translate-y-1
  hover:bg-slate-800
  transition
">

    <h3 className="text-3xl font-bold">
      {myTeams.length}
    </h3>

    <p>
      Team Requests
    </p>

  </div>

</div>

<div className="mt-6 bg-slate-900 p-5 rounded-2xl">

  <h3 className="text-xl font-bold mb-4">
    Recent Activity
  </h3>

  {myEvents.map((event) => (

    <p
      key={event._id}
      className="mb-2"
    >
      ✅ Registered for {event.title}
    </p>

  ))}

  {myClubs.map((club) => (

    <p
      key={club._id}
      className="mb-2"
    >
      🏛 Joined {club.name}
    </p>

  ))}

  {myTeams.map((team) => (

    <p
      key={team._id}
      className="mb-2"
    >
      👥 Joined team for {team.eventName}
    </p>

  ))}

</div>

      {/* Search */}

      <div className="mt-6">

        <input
  type="text"
  placeholder="🔍 Search events, clubs, houses..."
  value={search}
  onChange={(e) =>
    setSearch(e.target.value)
  }
  className="
  w-full
  p-5
  rounded-3xl
  bg-slate-900
  border
  border-slate-700
  focus:border-purple-500
  outline-none
"
/>

     {search && (

  <div className="bg-slate-900 rounded-2xl p-4 mt-4">

    <h2 className="text-xl font-bold mb-3">
      Search Results
    </h2>

    {filteredEvents.map((event) => (
      <p key={event._id}>
        📅 {event.title}
      </p>
    ))}

    {filteredClubs.map((club) => (
      <p key={club._id}>
        🏛 {club.name}
      </p>
    ))}

    {filteredHouses.map((house) => (
      <p key={house._id}>
        🏆 {house.name}
      </p>
    ))}

  </div>

)}
      </div>

      {/* Quick Access */}

      <h2 className="text-2xl font-bold mt-10 mb-4">
        Quick Access
      </h2>

      <div className="grid grid-cols-2 md:grid-cols-3 gap-4">

        <Link
          to="/events"
          className="
  bg-slate-900
  p-6
  rounded-3xl
  text-center
  hover:bg-gradient-to-r from-blue-600 to-indigo-700
  hover:scale-105
  transition
  font-semibold
"
        >
          📅 Events
        </Link>

        <Link
          to="/clubs"
          className="
  bg-slate-900
  p-6
  rounded-3xl
  text-center
  hover:bg-gradient-to-r from-blue-600 to-indigo-700
  hover:scale-105
  transition
  font-semibold
"
        >
          🏛 Clubs
        </Link>

        <Link
          to="/houses"
          className="
  bg-slate-900
  p-6
  rounded-3xl
  text-center
  hover:bg-gradient-to-r from-blue-600 to-indigo-700
  hover:scale-105
  transition
  font-semibold
"
        >
          🏆 Houses
        </Link>

        <Link
          to="/team-requests"
          className="
  bg-slate-900
  p-6
  rounded-3xl
  text-center
  hover:bg-gradient-to-r from-blue-600 to-indigo-700
  hover:scale-105
  transition
  font-semibold
"
        >
          👥 Teams
        </Link>

        <Link
          to="/feed"
          className="
  bg-slate-900
  p-6
  rounded-3xl
  text-center
  hover:bg-gradient-to-r from-blue-600 to-indigo-700
  hover:scale-105
  transition
  font-semibold
"
        >
          📰 Feed
        </Link>

        <Link
          to="/announcements"
          className="
  bg-slate-900
  p-6
  rounded-3xl
  text-center
  hover:bg-gradient-to-r from-blue-600 to-indigo-700
  hover:scale-105
  transition
  font-semibold
"
        >
          🔔 Updates
        </Link>

      </div>

      {/* Events */}

      <div className="mt-12">

        <h2 className="text-3xl font-extrabold mb-5">
          📅 Upcoming Events
        </h2>

        <div className="grid md:grid-cols-3 gap-4">

          {events.map((event) => (

            <div
              key={event._id}
              className="bg-slate-900 p-5 rounded-2xl"
            >

              <h3 className="text-xl font-bold">
                {event.title}
              </h3>

              <p className="text-gray-400 mt-2">
                📍 {event.venue}
              </p>

            </div>

          ))}

        </div>

      </div>

      {/* External Events */}

      {/* External Events */}

<div className="mt-12">

  <h2 className="text-3xl font-bold mb-4">
    🌎 Inter College Events
  </h2>

  <div className="grid md:grid-cols-3 gap-4">

    {externalEvents.map((event) => (

      <Link
        key={event._id}
        to={`/external-events/${event._id}`}
        className="bg-slate-900 rounded-2xl overflow-hidden block hover:scale-105 transition"
      >

        <img
          src={
            event.posterImage ||
            "https://picsum.photos/600/400"
          }
          alt={event.title}
          className="w-full h-44 object-cover"
        />

        <div className="p-4">

          <h3 className="font-bold text-lg">
            {event.title}
          </h3>

          <p className="text-gray-400">
            {event.college}
          </p>

          <p className="text-purple-400 mt-2">
            View Details →
          </p>

        </div>

      </Link>

    ))}

  </div>

</div>

      {/* Announcements */}

      <div className="mt-12">

        <h2 className="text-3xl font-bold mb-4">
          📢 Latest Updates
        </h2>

        {announcements.map((item) => (

          <div
            key={item._id}
            className="bg-slate-900 p-4 rounded-xl mb-3"
          >
            {item.title}
          </div>

        ))}

      </div>

      {/* House Leaderboard */}

      <div className="mt-12">

        <h2 className="text-3xl font-bold mb-4">
          🏆 House Rankings
        </h2>

        {houses.map(
          (house, index) => (

            <div
              key={house._id}
              className="bg-slate-900 p-4 rounded-xl mb-3 flex justify-between"
            >

              <span>
                #{index + 1}
                {" "}
                {house.name}
              </span>

              <span>
                {house.points}
                {" "}
                pts
              </span>

            </div>

          )
        )}

      </div>

      {/* Clubs */}

      <div className="mt-12">

        <h2 className="text-3xl font-bold mb-4">
          🏛 Popular Clubs
        </h2>

        <div className="grid md:grid-cols-3 gap-4">

          {clubs.map((club) => (

            <div
              key={club._id}
              className="bg-slate-900 p-5 rounded-2xl"
            >

              <h3 className="font-bold text-xl">
                {club.name}
              </h3>

              <p className="text-gray-400 mt-2">
                👥 {club.members?.length || 0}
                {" "}
                Members
              </p>

            </div>

          ))}

        </div>

      </div>

      {/* Team Requests */}

      <div className="mt-12">

        <h2 className="text-3xl font-bold mb-4">
          👥 Need Teammates
        </h2>

        {teams.map((team) => (

          <div
            key={team._id}
            className="bg-slate-900 p-4 rounded-xl mb-3"
          >

            <h3 className="font-bold">
              {team.eventName}
            </h3>

            <p>
              {team.description}
            </p>

          </div>

        ))}

      </div>
      <BottomNav />
    </div>
    
  );
}

export default Dashboard;