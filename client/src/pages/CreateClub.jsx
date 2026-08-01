import { useState } from "react";
import axios from "axios";

function CreateClub() {
  const [formData, setFormData] = useState({
    name: "",
    description: "",
    logo: "",
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
        "http://localhost:5000/api/clubs",
        formData,
        {
          headers: {
            role: "faculty",
          },
        }
      );

      alert("Club Created Successfully!");

      setFormData({
        name: "",
        description: "",
        logo: "",
      });
    } catch (error) {
      console.log(error);
      alert("Failed to Create Club");
    }
  };

  return (
    <div className="min-h-screen bg-slate-950 text-white p-6">
      <h1 className="text-4xl font-bold mb-8">
        Create Club
      </h1>

      <form
        onSubmit={handleSubmit}
        className="bg-slate-900 p-6 rounded-2xl max-w-3xl mx-auto"
      >
        <input
          type="text"
          name="name"
          placeholder="Club Name"
          value={formData.name}
          onChange={handleChange}
          className="w-full p-3 mb-4 rounded bg-slate-800"
          required
        />

        <textarea
          name="description"
          placeholder="Club Description"
          value={formData.description}
          onChange={handleChange}
          className="w-full p-3 mb-4 rounded bg-slate-800"
          rows="5"
          required
        />

        <input
          type="text"
          name="logo"
          placeholder="Club Logo URL"
          value={formData.logo}
          onChange={handleChange}
          className="w-full p-3 mb-4 rounded bg-slate-800"
        />

        <button
          type="submit"
          className="bg-purple-600 px-6 py-3 rounded-xl hover:bg-purple-700"
        >
          Create Club
        </button>
      </form>
    </div>
  );
}

export default CreateClub;