import { Link } from "react-router-dom";

function Home() {
  return (
    <div className="min-h-screen bg-slate-950 text-white flex items-center justify-center px-6">

      <div className="max-w-5xl w-full text-center">

        <div className="mb-8">
          <img
            src="/abbs.png"
            alt="ABBS"
            className="h-24 mx-auto mb-4"
          />

          <h1 className="text-6xl md:text-7xl font-black">
            ABBS Nexus
          </h1>

          <p className="text-blue-300 text-xl mt-3">
            Campus Community Platform
          </p>
        </div>

        <p className="max-w-3xl mx-auto text-lg text-gray-400 leading-relaxed">
          A centralized platform designed for students and faculty
          to manage events, join clubs, participate in house
          competitions, explore opportunities, and collaborate
          within the ABBS community.
        </p>

        <div className="mt-10 flex flex-col sm:flex-row justify-center gap-4">

          <Link
            to="/login"
            className="
              bg-gradient-to-r
              from-blue-600
              to-indigo-700
              px-8
              py-4
              rounded-2xl
              font-semibold
              text-lg
              hover:scale-105
              transition
            "
          >
            Login
          </Link>

          <Link
            to="/register"
            className="
              bg-gradient-to-r
              from-blue-600
              to-indigo-700
              px-8
              py-4
              rounded-2xl
              font-semibold
              text-lg
              hover:scale-105
              transition
            "
          >
            Register
          </Link>

        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-5 mt-16">

          <div className="bg-slate-900 p-5 rounded-2xl border border-slate-800">
            <div className="text-3xl mb-2">📅</div>
            <h3 className="font-semibold">Events</h3>
            <p className="text-gray-400 text-sm mt-1">
              Discover and register for campus events.
            </p>
          </div>

          <div className="bg-slate-900 p-5 rounded-2xl border border-slate-800">
            <div className="text-3xl mb-2">🏛</div>
            <h3 className="font-semibold">Clubs</h3>
            <p className="text-gray-400 text-sm mt-1">
              Join communities and student clubs.
            </p>
          </div>

          <div className="bg-slate-900 p-5 rounded-2xl border border-slate-800">
            <div className="text-3xl mb-2">🏆</div>
            <h3 className="font-semibold">Houses</h3>
            <p className="text-gray-400 text-sm mt-1">
              Participate in house competitions.
            </p>
          </div>

          <div className="bg-slate-900 p-5 rounded-2xl border border-slate-800">
            <div className="text-3xl mb-2">🌍</div>
            <h3 className="font-semibold">Opportunities</h3>
            <p className="text-gray-400 text-sm mt-1">
              Explore internships and competitions.
            </p>
          </div>

        </div>
        <p className="mt-16 text-gray-500 text-lg">
          Developed for Acharya Bangalore B-School
        </p>

      </div>

    </div>
  );
}

export default Home;