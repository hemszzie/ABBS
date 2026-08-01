import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";

function ExternalEventDetails() {

  const { id } = useParams();

  const [event, setEvent] =
    useState(null);

  useEffect(() => {

    axios
      .get(
        `http://localhost:5000/api/external-events/${id}`
      )
      .then((res) =>
        setEvent(res.data)
      );

  }, [id]);

  if (!event) {
    return (
      <div className="text-white p-6">
        Loading...
      </div>
    );
  }

  return (
    <div className="bg-slate-950 min-h-screen text-white">

      <img
        src={
          event.posterImage ||
          "https://picsum.photos/1200/500"
        }
        alt={event.title}
        className="w-full h-96 object-cover"
      />

      <div className="max-w-5xl mx-auto p-6">

        <h1 className="text-5xl font-bold">
          {event.title}
        </h1>

        <p className="text-xl text-purple-400 mt-2">
          {event.college}
        </p>

        <div className="mt-6 bg-slate-900 p-5 rounded-2xl">

          <p>
            📍 {event.venue}
          </p>

          <p>
            👥 Team Size:
            {" "}
            {event.teamSize}
          </p>

          <p>
            📅
            {" "}
            {event.eventDate
              ? new Date(
                  event.eventDate
                ).toLocaleDateString()
              : "TBA"}
          </p>

          <p>
            🏷 {event.category}
          </p>

        </div>

        <div className="mt-6">

          <h2 className="text-2xl font-bold">
            Description
          </h2>

          <p className="mt-3">
            {event.description}
          </p>

        </div>

        <div className="flex gap-4 mt-8">

          <a
            href={event.registrationLink}
            target="_blank"
            rel="noreferrer"
            className="bg-purple-600 px-6 py-3 rounded-xl"
          >
            Register
          </a>

         <a 
  href={`http://localhost:5000${event.brochurePdf}`} 
  target="_blank" 
  rel="noopener noreferrer"
  className="bg-green-600 px-6 py-3 rounded-xl"
>
  Download Brochure
</a>

        </div>

      </div>

    </div>
  );
}

export default ExternalEventDetails;