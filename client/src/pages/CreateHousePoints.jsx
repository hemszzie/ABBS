import { useState } from "react";
import axios from "axios";

function CreateHousePoints() {
  const [formData, setFormData] = useState({
    houseName: "",
    points: "",
    reason: "",
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
        "http://localhost:5000/api/houses/update-points",
        formData,
        {
          headers: {
            role: "faculty",
          },
        }
      );

      alert("Points Updated Successfully!");

      setFormData({
        houseName: "",
        points: "",
        reason: "",
      });

    } catch (error) {
      console.log("Status:", error.response?.status);
      console.log("Data:", error.response?.data);
      console.log(error);

      alert(
        error.response?.data?.message ||
        "Update Failed"
      );
    }
  };

  return (
    <div className="min-h-screen bg-slate-950 text-white p-6">

      <h1 className="text-4xl font-bold mb-8">
        Update House Points
      </h1>

      <form
        onSubmit={handleSubmit}
        className="bg-slate-900 p-6 rounded-2xl max-w-3xl mx-auto"
      >

        <select
          name="houseName"
          value={formData.houseName}
          onChange={handleChange}
          className="w-full p-3 mb-4 rounded bg-slate-800"
          required
        >
          <option value="">
            Select House
          </option>

          <option value="AER">
            AER - Academic Excellence and Leadership
          </option>

          <option value="TERRA">
            TERRA - Strength and Teamwork
          </option>

          <option value="IGNIS">
            IGNIS - Energy and Passion
          </option>

          <option value="LUMEN">
            LUMEN - Knowledge and Creativity
          </option>
        </select>

        <input
          type="number"
          name="points"
          placeholder="Points"
          value={formData.points}
          onChange={handleChange}
          className="w-full p-3 mb-4 rounded bg-slate-800"
          required
        />

        <textarea
          name="reason"
          placeholder="Reason"
          value={formData.reason}
          onChange={handleChange}
          className="w-full p-3 mb-4 rounded bg-slate-800"
          rows="4"
        />

        <button
          type="submit"
          className="bg-purple-600 px-6 py-3 rounded-xl hover:bg-purple-700"
        >
          Update Points
        </button>

      </form>

    </div>
  );
}

export default CreateHousePoints;