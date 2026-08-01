import { useState } from "react";
import axios from "axios";

function CreateEvent() {

  const user =
JSON.parse(
  localStorage.getItem("user")
);

  if (
  user?.role !== "faculty" &&
  user?.role !== "admin"
) {
  return (
    <div className="min-h-screen bg-slate-950 text-white flex items-center justify-center">

      <div className="bg-slate-900 p-8 rounded-2xl">

        <h1 className="text-3xl font-bold">
          Access Denied
        </h1>

        <p className="mt-3 text-gray-400">
          Only Faculty can create events
        </p>

      </div>

    </div>
  );
}

  const [formData, setFormData] = useState({
    title: "",
    description: "",
    category: "Workshop",
    organizer: "",
    venue: "",
    eventDate: "",
    posterImage: "",
    maxSeats: 100,
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await axios.post(
        "http://localhost:5000/api/events",
        formData,
        {
    headers: {
      role: "faculty"
    }
  }
      );

      alert("Event Created Successfully!");

      setFormData({
        title: "",
        description: "",
        category: "Workshop",
        organizer: "",
        venue: "",
        eventDate: "",
        posterImage: "",
        maxSeats: 100,
      });

    } catch (error) {
      console.log(error);
      alert("Failed to create event");
    }
  };

  return (
    <div className="min-h-screen bg-slate-950 text-white p-6">

      <h1 className="text-4xl font-bold mb-8">
        Create Event
      </h1>

      <form
        onSubmit={handleSubmit}
        className="bg-slate-900 p-6 rounded-2xl max-w-3xl mx-auto"
      >

        <input
          type="text"
          name="title"
          placeholder="Event Title"
          value={formData.title}
          onChange={handleChange}
          className="w-full p-3 mb-4 rounded bg-slate-800"
          required
        />

        <textarea
          name="description"
          placeholder="Event Description"
          value={formData.description}
          onChange={handleChange}
          className="w-full p-3 mb-4 rounded bg-slate-800"
          rows="4"
        />

        <select
          name="category"
          value={formData.category}
          onChange={handleChange}
          className="w-full p-3 mb-4 rounded bg-slate-800"
        >
          <option>Academic</option>
          <option>Cultural</option>
          <option>Sports</option>
          <option>Workshop</option>
          <option>Hackathon</option>
        </select>

        <input
          type="text"
          name="organizer"
          placeholder="Organizer"
          value={formData.organizer}
          onChange={handleChange}
          className="w-full p-3 mb-4 rounded bg-slate-800"
        />

        <input
          type="text"
          name="venue"
          placeholder="Venue"
          value={formData.venue}
          onChange={handleChange}
          className="w-full p-3 mb-4 rounded bg-slate-800"
        />

        <input
          type="date"
          name="eventDate"
          value={formData.eventDate}
          onChange={handleChange}
          className="w-full p-3 mb-4 rounded bg-slate-800"
        />

        <input
          type="text"
          name="posterImage"
          placeholder="Poster Image URL"
          value={formData.posterImage}
          onChange={handleChange}
          className="w-full p-3 mb-4 rounded bg-slate-800"
        />

        <input
          type="number"
          name="maxSeats"
          placeholder="Max Seats"
          value={formData.maxSeats}
          onChange={handleChange}
          className="w-full p-3 mb-4 rounded bg-slate-800"
        />

        <button
          type="submit"
          className="bg-purple-600 px-6 py-3 rounded-xl hover:bg-purple-700"
        >
          Create Event
        </button>

      </form>

    </div>
  );
}

export default CreateEvent;