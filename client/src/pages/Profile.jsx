import { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

function Profile() {

  const currentUser =
    JSON.parse(localStorage.getItem("user"));
const [profile, setProfile] =
  useState(null);

useEffect(() => {

  if (currentUser) {

    axios
      .get(
        `http://localhost:5000/api/users/${currentUser._id}`
      )
      .then((res) => {
        setProfile(res.data);
      })
      .catch((err) => {
        console.log(err);
      });

  }

}, [currentUser]);

if (!profile) {
  return <h1>Loading...</h1>;
}

  return (
    <div className="bg-slate-900 p-6 rounded-2xl">

  <div className="flex items-center gap-5 mb-6">

  <img
    src={
  profile?.user?.profileImage
    ? `http://localhost:5000${profile.user.profileImage}`
    : profile?.profileImage
    ? `http://localhost:5000${profile.profileImage}`
    : `https://ui-avatars.com/api/?name=${
        profile?.user?.name || profile?.name
      }`
}
    alt="Profile"
    className="
      w-28
      h-28
      rounded-full
      object-cover
      border-4
      border-purple-500
    "
  />

  <div>

    <h1 className="text-3xl font-bold">
      {profile?.user?.name || profile?.name}
    </h1>

    <p className="text-gray-400">
      {profile?.user?.email || profile?.email}
    </p>

    <p className="text-purple-400 mt-2">
      🎓 {profile?.user?.role || profile?.role}
    </p>

  </div>

</div>

  <div className="grid md:grid-cols-2 gap-4 mt-6">

    <div className="bg-slate-800 p-3 rounded-xl">
      🆔 USN: {profile?.user?.usn || "Not Added"}
    </div>

    <div className="bg-slate-800 p-3 rounded-xl">
      📄 Reg No: {profile?.user?.registrationNumber || "Not Added"}
    </div>

    <div className="bg-slate-800 p-3 rounded-xl">
      🎓 Department: {profile?.user?.department || "Not Added"}
    </div>

    <div className="bg-slate-800 p-3 rounded-xl">
      📚 Semester: {profile?.user?.semester || "Not Added"}
    </div>

    <div className="bg-slate-800 p-3 rounded-xl">
      📅 Admission Year: {profile?.user?.admissionYear || "Not Added"}
    </div>

    <div className="bg-slate-800 p-3 rounded-xl">
      🏫 College: {profile?.user?.college || "ABBS"}
    </div>

  </div>

  {profile?.user?.linkedin && (
    <a
      href={profile.user.linkedin}
      target="_blank"
      rel="noreferrer"
      className="inline-block mt-5 bg-blue-600 px-4 py-2 rounded-xl"
    >
      LinkedIn Profile
    </a>
  )}

  <Link
    to="/edit-profile"
    className="inline-block mt-5 ml-3 bg-purple-600 px-4 py-2 rounded-xl"
  >
    ✏️ Edit Profile
  </Link>

<button
  onClick={() => {
    localStorage.clear();
    window.location.href = "/";
  }}
  className="
    inline-flex
    items-center
    gap-2
    mt-5
    ml-3
    bg-red-600
    hover:bg-red-700
    px-5
    py-3
    rounded-xl
    font-semibold
    cursor-pointer
    transition-all
    duration-200
    hover:scale-105
  "
>
  🚪 Logout
</button>
</div>
  )
}

export default Profile;