import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

function Register() {
  const [form, setForm] = useState({ name: "", email: "", password: "" });
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((s) => ({ ...s, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post(
  "http://localhost:5000/api/auth/register",
  form
);
      alert("Registration successful");
      navigate("/login");
    } catch (error) {
      const msg = error?.response?.data?.message || error.message || "Registration failed";
      alert(msg);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-slate-950 text-white">
      <form onSubmit={handleSubmit} className="bg-slate-900 p-8 rounded-2xl w-full max-w-md">
        <h2 className="text-3xl font-bold mb-6 text-center">Register</h2>

        <input type="text" name="name" placeholder="Full Name" className="w-full p-3 rounded-xl bg-slate-800 mb-4" onChange={handleChange} value={form.name} />

        <input type="email" name="email" placeholder="College Email" className="w-full p-3 rounded-xl bg-slate-800 mb-4" onChange={handleChange} value={form.email} />

        <input type="password" name="password" placeholder="Password" className="w-full p-3 rounded-xl bg-slate-800 mb-4" onChange={handleChange} value={form.password} />

        <button className="w-full bg-gradient-to-r from-blue-600 to-indigo-700 py-3 rounded-xl hover:scale-105 transition">Register</button>
      </form>
    </div>
  );
}

export default Register;