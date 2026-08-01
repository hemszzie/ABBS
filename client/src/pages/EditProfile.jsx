import { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function EditProfile() {
  const navigate = useNavigate();

  const currentUser = JSON.parse(
    localStorage.getItem("user")
  );

  const [form, setForm] = useState({
    name: "",
    usn: "",
    department: "",
    semester: "",
    linkedin: "",
    registrationNumber: "",
    admissionYear: "",
  });

  const [file,
 setFile] =
 useState(null);

const uploadPhoto = async () => {

  if (!file) {
    alert("Please select an image");
    return;
  }

  const data = new FormData();

  data.append(
    "profileImage",
    file
  );

  try {

    const res =
    await axios.put(
      `http://localhost:5000/api/users/upload-profile/${currentUser._id}`,
      data,
      {
        headers: {
          "Content-Type":
          "multipart/form-data"
        }
      }
    );

    localStorage.setItem(
      "user",
      JSON.stringify(res.data)
    );

    alert("Photo Uploaded");

  } catch (error) {

    console.log(error);

    alert("Upload Failed");

  }
};


  useEffect(() => {
    if (currentUser) {
      setForm({
        name: currentUser.name || "",
        usn: currentUser.usn || "",
        department: currentUser.department || "",
        semester: currentUser.semester || "",
       registrationNumber: currentUser.registrationNumber || "",
        admissionYear: currentUser.admissionYear || "",
        linkedin: currentUser.linkedin || "",
      });
    }
  }, []);

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const payload = {
        ...form,
      };

      const res = await axios.put(
        `http://localhost:5000/api/users/${currentUser._id}`,
        payload
      );

      localStorage.setItem(
        "user",
        JSON.stringify(res.data)
      );

      alert("Profile Updated");

      navigate("/profile");

    } 
    catch (error) {
  console.log(error);
  console.log(error.response?.data);

  alert(
    error.response?.data?.message ||
    "Update Failed"
  );
}
  };

  return (
    <div className="min-h-screen bg-slate-950 text-white p-6">

      <h1 className="text-4xl font-bold mb-8">
        Edit Profile
      </h1>

      <form
        onSubmit={handleSubmit}
        className="space-y-4"
      >

        <input
  type="file"
  accept="image/*"
  onChange={(e) =>
    setFile(
      e.target.files[0]
    )
  }
  className="
    w-full
    p-3
    rounded-xl
    bg-slate-800
    mb-4
  "
/>

<button
  onClick={uploadPhoto}
  className="
    bg-green-600
    px-4
    py-2
    rounded-xl
  "
>
  Upload Photo
</button>
        <input
          name="name"
          placeholder="Name"
          value={form.name}
          onChange={handleChange}
          className="w-full p-3 bg-slate-900 rounded-xl"
        />

        <input
          name="usn"
          placeholder="USN"
          value={form.usn}
          onChange={handleChange}
          className="w-full p-3 bg-slate-900 rounded-xl"
        />

        <input
          name="department"
          placeholder="Department"
          value={form.department}
          onChange={handleChange}
          className="w-full p-3 bg-slate-900 rounded-xl"
        />

        <input
          name="semester"
          placeholder="Semester"
          value={form.semester}
          onChange={handleChange}
          className="w-full p-3 bg-slate-900 rounded-xl"
        />
        
        <input
  name="registrationNumber"
  value={form.registrationNumber}
  onChange={handleChange}
  className="w-full p-3 bg-slate-900 rounded-xl"
    placeholder="Registration Number"
/>

<input
  name="admissionYear"
  value={form.admissionYear}
  onChange={handleChange}
  className="w-full p-3 bg-slate-900 rounded-xl"
  placeholder="Admission Year"
/>

        <input
          name="linkedin"
          placeholder="LinkedIn URL"
          value={form.linkedin}
          onChange={handleChange}
          className="w-full p-3 bg-slate-900 rounded-xl"
        />

        <button
          className="w-full bg-purple-600 py-3 rounded-xl"
        >
          Save Profile
        </button>

      </form>

    </div>
  );
}

export default EditProfile;