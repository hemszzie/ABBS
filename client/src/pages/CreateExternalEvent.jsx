import { useState } from "react";
import axios from "axios";

function CreateExternalEvent() {

  const [formData, setFormData] = useState({
    college: "",
    title: "",
    description: "",
    posterImage: "",
    brochurePdf: "",
    registrationLink: "",
    venue: "",
    eventDate: "",
    teamSize: "",
    category: "Hackathon"
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {

      const data = new FormData();

Object.keys(formData).forEach((key) => {
  data.append(key, formData[key]);
});

await axios.post(
  "http://localhost:5000/api/external-events",
  data,
  {
    headers: {
      role: "faculty",
      "Content-Type":
        "multipart/form-data"
    }
  }
);

      alert("External Event Created!");

      setFormData({
        college: "",
        title: "",
        description: "",
        posterImage: "",
        brochurePdf: "",
        registrationLink: "",
        venue: "",
        eventDate: "",
        teamSize: "",
        category: "Hackathon"
      });

    } catch (error) {

      console.log(error);

      alert("Failed to Create Event");
    }
  };

  return (
    <div className="min-h-screen bg-slate-950 text-white p-6">

      <h1 className="text-4xl font-bold mb-8">
        Create External Event
      </h1>

      <form
        onSubmit={handleSubmit}
        className="bg-slate-900 p-6 rounded-2xl max-w-4xl mx-auto"
      >

        <input
          type="text"
          name="college"
          placeholder="College Name"
          value={formData.college}
          onChange={handleChange}
          className="w-full p-3 mb-4 rounded bg-slate-800"
          required
        />

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
          placeholder="Description"
          value={formData.description}
          onChange={handleChange}
          rows="4"
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
          type="number"
          name="teamSize"
          placeholder="Team Size"
          value={formData.teamSize}
          onChange={handleChange}
          className="w-full p-3 mb-4 rounded bg-slate-800"
        />

        <select
          name="category"
          value={formData.category}
          onChange={handleChange}
          className="w-full p-3 mb-4 rounded bg-slate-800"
        >
          <option>Hackathon</option>
          <option>Workshop</option>
          <option>Competition</option>
          <option>Seminar</option>
          <option>Conference</option>
        </select>

        <input
          type="text"
          name="registrationLink"
          placeholder="Registration Link"
          value={formData.registrationLink}
          onChange={handleChange}
          className="w-full p-3 mb-4 rounded bg-slate-800"
        />


        <input
  type="file"
  accept=".pdf"
  onChange={(e) =>
    setFormData({
      ...formData,
      brochurePdf: e.target.files[0]
    })
  }
  className="w-full p-3 mb-4 rounded bg-slate-800"
/>

        <input
          type="text"
          name="posterImage"
          placeholder="Poster Image URL"
          value={formData.posterImage}
          onChange={handleChange}
          className="w-full p-3 mb-6 rounded bg-slate-800"
        />

        <button
          type="submit"
          className="bg-purple-600 px-6 py-3 rounded-xl hover:bg-purple-700"
        >
          Create External Event
        </button>

      </form>

    </div>
  );
}

export default CreateExternalEvent;