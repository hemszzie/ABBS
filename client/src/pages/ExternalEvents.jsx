import { useEffect, useState } from "react";
import axios from "axios";

function ExternalEvents() {
  const [events, setEvents] = useState([]);

  useEffect(() => {
    fetchEvents();
  }, []);

  const fetchEvents = async () => {
    try {
      const res = await axios.get(
        "http://localhost:5000/api/external-events"
      );

      setEvents(res.data);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="min-h-screen bg-slate-950 text-white p-6">

      <h1 className="text-5xl font-bold mb-2">
        🌎 Inter-College Events
      </h1>

      <p className="text-gray-400 mb-8">
        Discover hackathons, workshops and competitions from other colleges
      </p>

      <div className="grid md:grid-cols-3 gap-6">

        {events.map((event) => (

          <div
            key={event._id}
            className="bg-slate-900 rounded-3xl overflow-hidden shadow-lg"
          >

            <img
              src={
                event.posterImage ||
                "https://picsum.photos/800/500"
              }
              alt={event.title}
              className="w-full h-56 object-cover"
            />

            <div className="p-5">

              <span className="bg-blue-600 px-3 py-1 rounded-full text-sm">
                {event.college}
              </span>

              <h2 className="text-2xl font-bold mt-4">
                {event.title}
              </h2>

              <p className="text-gray-400 mt-2">
                📍 {event.venue}
              </p>

              <p className="text-gray-400">
                👥 Team Size: {event.teamSize}
              </p>

              <div className="flex gap-2 mt-5">

                <a
                  href={event.registrationLink}
                  target="_blank"
                  rel="noreferrer"
                  className="bg-purple-600 px-4 py-2 rounded"
                >
                  Register
                </a>

                <a
                  href={event.brochurePdf}
                  target="_blank"
                  rel="noreferrer"
                  className="bg-green-600 px-4 py-2 rounded"
                >
                  Brochure
                </a>

              </div>

            </div>

          </div>

        ))}

      </div>

    </div>
  );
}

export default ExternalEvents;