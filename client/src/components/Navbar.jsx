import {
  useEffect,
  useState
} from "react";

import axios from "axios";

function Houses() {

  const [houses, setHouses] =
    useState([]);

  useEffect(() => {

    axios
      .get(
        "http://localhost:5000/api/houses"
      )
      .then((res) =>
        setHouses(res.data)
      );

  }, []);

  return (
    <div className="min-h-screen bg-slate-950 text-white p-6">

      <h1 className="text-5xl font-bold mb-8">
        🏠 Houses
      </h1>

      <div className="grid md:grid-cols-2 gap-6">

        {houses.map((house) => (

          <div
            key={house._id}
            className="bg-slate-900 p-6 rounded-2xl"
          >

            <h2 className="text-3xl font-bold">
              {house.name}
            </h2>

            <p className="mt-3">
              {house.description}
            </p>

            <p className="mt-4">
              👥 Members:
              {" "}
              {house.members?.length || 0}
            </p>

            <p>
              🏆 Points:
              {" "}
              {house.points}
            </p>

          </div>

        ))}

      </div>

    </div>
  );
}

export default Houses;