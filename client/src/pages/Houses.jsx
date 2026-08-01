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

            <div className="mt-4">

  <h3 className="font-bold">
    Recent Updates
  </h3>

  {house.history?.slice().reverse().map(
    (item, index) => (

      <div
        key={index}
        className="bg-slate-800 p-2 rounded mt-2 text-sm"
      >
        +{item.points} pts
        {" - "}
        {item.reason}

        <div className="text-gray-400 text-xs">
          {new Date(
            item.updatedAt
          ).toLocaleString()}
        </div>
      </div>

    )
  )}

</div>


          </div>

        ))}

      </div>

    </div>
  );
}

export default Houses;