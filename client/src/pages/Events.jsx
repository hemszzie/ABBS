import { useEffect, useState } from "react";
import axios from "axios";
import EventCard from "../components/EventCard";

function Events() {

  const [events, setEvents] =
    useState([]);

  const [filter, setFilter] =
    useState("All");

  useEffect(() => {

    axios
      .get(
        "http://localhost:5000/api/events"
      )
      .then((res) =>
        setEvents(res.data)
      );

  }, []);

  const filtered =
    filter === "All"
      ? events
      : events.filter(
          e =>
            e.category === filter
        );

  return (
    <div className="min-h-screen bg-slate-950 text-white p-6">

      <div className="mb-8">

  <h1 className="text-5xl font-bold">
    Discover Events 🚀
  </h1>

  <p className="text-gray-400 mt-2">
    ABBS • Inter-College • Hackathons • Workshops
  </p>

</div>

      <div className="flex gap-3 mb-6">

        {[
          "All",
          "Academic",
          "Cultural",
          "Sports",
          "Workshop",
          "Hackathon"
        ].map((cat) => (

          <button
            key={cat}
            onClick={() =>
              setFilter(cat)
            }
            className="bg-slate-800 px-4 py-2 rounded"
          >
            {cat}
          </button>

        ))}

      </div>

      <div className="grid md:grid-cols-3 gap-6">

        {filtered.map((event) => (

          <EventCard
            key={event._id}
            event={event}
          />

        ))}

      </div>

    </div>
  );
}

export default Events;