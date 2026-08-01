import {
  useEffect,
  useState
} from "react";

import axios from "axios";

function HouseLeaderboard() {

  const [houses, setHouses] =
    useState([]);

  useEffect(() => {

    axios
      .get(
        "http://localhost:5000/api/houses/leaderboard"
      )
      .then((res) =>
        setHouses(res.data)
      );

  }, []);

  return (
    <div className="min-h-screen bg-slate-950 text-white p-6">

      <h1 className="text-5xl font-bold mb-8">
        🏆 House Leaderboard
      </h1>

      {houses.map(
        (house, index) => (

          <div
            key={house._id}
            className="bg-slate-900 p-5 rounded-2xl mb-4 flex justify-between"
          >

            <div>

              <h2 className="text-2xl font-bold">
                #{index + 1}
                {" "}
                {house.name}
              </h2>

              <p>
                Members:
                {" "}
                {house.members?.length || 0}
              </p>

            </div>

            <div className="text-right">

              <p className="text-3xl font-bold">
                {house.points}
              </p>

              <p>
                Points
              </p>

            </div>

          </div>

        )
      )}

    </div>
  );
}

export default HouseLeaderboard;