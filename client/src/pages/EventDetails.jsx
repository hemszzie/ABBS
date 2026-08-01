import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";

function EventDetails() {
  const { id } = useParams();

  const [event, setEvent] = useState(null);

  const user = JSON.parse(
    localStorage.getItem("user")
  );

  useEffect(() => {
    fetchEvent();
  }, [id]);

  const fetchEvent = async () => {
    try {
      const res = await axios.get(
        `http://localhost:5000/api/events/${id}`
      );

      setEvent(res.data);
    } catch (error) {
      console.log(error);
    }
  };

  const register = async () => {
    try {
      console.log("Register button clicked");

      await axios.put(
        `http://localhost:5000/api/events/${id}/register`,
        {
          userId: user._id,
        }
      );

      alert("Registered Successfully!");

      fetchEvent();

    } catch (error) {
      console.log(error);

      alert(
        error?.response?.data?.message ||
          "Registration failed"
      );
    }
  };

  // Loading Screen
  if (!event) {
    return (
      <div className="min-h-screen bg-slate-950 text-white flex items-center justify-center">
        <h1 className="text-2xl font-bold">
          Loading Event...
        </h1>
      </div>
    );
  }

  return (
    <div className="bg-slate-950 min-h-screen text-white">

      <img
  src={
    event.posterImage?.trim()
      ? event.posterImage
      : event.bannerImage?.trim()
      ? event.bannerImage
      : "https://picsum.photos/1200/500"
  }
  alt={event.title}
  className="w-full h-96 object-cover"
  onError={(e) => {
    e.target.src =
      "https://picsum.photos/1200/500";
  }}
/>

      <div className="max-w-5xl mx-auto p-6">

        <h1 className="text-4xl font-bold">
          {event.title}
        </h1>

        <p className="text-gray-400 mt-2">
          📅{" "}
          {event.eventDate
            ? new Date(
                event.eventDate
              ).toLocaleDateString()
            : "Date TBA"}
        </p>

        <p className="text-gray-400">
          📍 {event.venue}
        </p>

        <p className="text-gray-400">
          👤 {event.organizer}
        </p>

        <div className="mt-6">
          <h2 className="text-2xl font-semibold mb-2">
            About Event
          </h2>

          <p>
            {event.description}
          </p>
        </div>

        <div className="mt-6 bg-slate-900 p-4 rounded-xl">

          <p>
            Category:
            {" "}
            {event.category}
          </p>

          <p>
            Seats:
            {" "}
            {event.maxSeats}
          </p>

          <p>
            Registrations:
            {" "}
            {event.registrations?.length || 0}
          </p>

        </div>

        <button
          onClick={register}
          className="mt-6 bg-purple-600 hover:bg-purple-700 px-6 py-3 rounded-xl"
        >
          Register Now
        </button>

      </div>

    </div>
  );
}

export default EventDetails;