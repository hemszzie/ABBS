import { useState } from "react";
import axios from "axios";

function CreateAnnouncement() {
  const [formData, setFormData] = useState({
    title: "",
    content: "",
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
        "http://localhost:5000/api/announcements",
        formData,
        {
          headers: {
            role: "faculty",
          },
        }
      );

      alert("Announcement Created");
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="min-h-screen p-6 bg-slate-950 text-white">
      <h1 className="text-4xl font-bold mb-6">
        Create Announcement
      </h1>

      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="title"
          placeholder="Title"
          onChange={handleChange}
          className="w-full p-3 mb-4 bg-slate-800 rounded"
        />

        <textarea
          name="content"
          placeholder="Content"
          onChange={handleChange}
          className="w-full p-3 mb-4 bg-slate-800 rounded"
        />

        <button
          type="submit"
          className="bg-purple-600 px-5 py-2 rounded"
        >
          Create
        </button>
      </form>
    </div>
  );
}

export default CreateAnnouncement;