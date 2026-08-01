import { Link } from "react-router-dom";



function FacultyDashboard() {


   const user =
    JSON.parse(
      localStorage.getItem("user")
    );

  if (
    !user ||
    user.role !== "faculty"
  ) {
    return (
      <div className="text-white p-6">
        Access Denied
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-slate-950 text-white p-6">

      <h1 className="text-4xl font-bold mb-8">
        Faculty Dashboard
      </h1>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">

        <Link
          to="/create-event"
          className="bg-slate-900 p-6 rounded-2xl hover:bg-slate-800"
        >
          <h2 className="text-2xl font-bold">
            📅 Events
          </h2>

          <p className="mt-2 text-gray-400">
            Create and manage college events
          </p>

          <div className="mt-4 text-purple-400">
            ➕ Create Event
          </div>
        </Link>

        <Link
          to="/create-announcement"
          className="bg-slate-900 p-6 rounded-2xl hover:bg-slate-800"
        >
          <h2 className="text-2xl font-bold">
            📢 Announcements
          </h2>

          <p className="mt-2 text-gray-400">
            Post campus announcements
          </p>

          <div className="mt-4 text-purple-400">
            ➕ Create Announcement
          </div>
        </Link>

        <Link
          to="/create-club"
          className="bg-slate-900 p-6 rounded-2xl hover:bg-slate-800"
        >
          <h2 className="text-2xl font-bold">
            🏛 Clubs
          </h2>

          <p className="mt-2 text-gray-400">
            Create and manage clubs
          </p>

          <div className="mt-4 text-purple-400">
            ➕ Create Club
          </div>
        </Link>

        <Link
          to="/create-external-event"
          className="bg-slate-900 p-6 rounded-2xl hover:bg-slate-800"
        >
          <h2 className="text-2xl font-bold">
            🌎 External Events
          </h2>

          <p className="mt-2 text-gray-400">
            Upload other college events
          </p>

          <div className="mt-4 text-purple-400">
            ➕ Upload Poster
          </div>
        </Link>

        <Link
          to="/create-house-points"
          className="bg-slate-900 p-6 rounded-2xl hover:bg-slate-800"
        >
          <h2 className="text-2xl font-bold">
            🏆 Houses
          </h2>

          <p className="mt-2 text-gray-400">
            Update house points
          </p>

          <div className="mt-4 text-purple-400">
            ➕ Update Scores
          </div>
        </Link>

      </div>

    </div>
  );
}

export default FacultyDashboard;
