import { Link } from "react-router-dom";

function Sidebar() {
  return (
    <div className="w-64 h-screen bg-slate-900 fixed left-0 top-0 p-5">

      <h1 className="text-2xl font-bold text-purple-500 mb-10">
        ABBS Nexus
      </h1>

      <div className="flex flex-col gap-4">

        <Link to="/dashboard">Dashboard</Link>

        <Link to="/feed">Feed</Link>

        <Link to="/clubs">Clubs</Link>

        <Link to="/houses">Houses</Link>

        <Link to="/events">Events</Link>

        <Link to="/profile">Profile</Link>

      </div>

    </div>
  );
}

export default Sidebar;