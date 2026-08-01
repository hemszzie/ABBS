import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

function Clubs() {

  const [clubs, setClubs] =
    useState([]);

  const user =
    JSON.parse(
      localStorage.getItem("user")
    );

  const fetchClubs = async () => {
    const res = await axios.get(
      "http://localhost:5000/api/clubs"
    );

    setClubs(res.data);
  };

  useEffect(() => {
    fetchClubs();
  }, []);

  const joinClub = async (id) => {
    try {

      await axios.put(
        `http://localhost:5000/api/clubs/${id}/join`,
        {
          userId: user._id,
        }
      );

      alert("Joined Club!");

      fetchClubs();

    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="min-h-screen bg-slate-950 text-white p-6">

      <h1 className="text-5xl font-bold mb-2">
        🏛 Clubs
      </h1>

      <p className="text-gray-400 mb-8">
        Join communities, collaborate on projects and attend club events
      </p>

      <div className="grid md:grid-cols-3 gap-6">

        {clubs.map((club) => (

          <div
            key={club._id}
            className="bg-slate-900 rounded-3xl overflow-hidden shadow-lg"
          >

            <img
              src={
                club.logo ||
                "https://picsum.photos/400/250"
              }
              alt={club.name}
              className="w-full h-48 object-cover"
            />

            <div className="p-5">

              <h2 className="text-2xl font-bold">
                {club.name}
              </h2>

              <p className="text-gray-400 mt-2">
                {club.description}
              </p>

              <p className="mt-4">
                👥 Members:
                {" "}
                {club.members?.length || 0}
              </p>

              <div className="flex gap-3 mt-5">

                <button
                  onClick={() =>
                    joinClub(club._id)
                  }
                  className="bg-purple-600 px-4 py-2 rounded-xl"
                >
                  Join Club
                </button>

                <Link
                  to={`/clubs/${club._id}`}
                  className="bg-blue-600 px-4 py-2 rounded-xl"
                >
                  View Club
                </Link>

              </div>

            </div>

          </div>

        ))}

      </div>

    </div>
  );
}

export default Clubs;