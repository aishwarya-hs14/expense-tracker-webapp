import { useState } from "react";
import API from "../api";
import "../styles/form.css";

export default function Register() {
  const [user, setUser] = useState({ username: "", email: "", password: "" });
  const [msg, setMsg] = useState("");

  const handleChange = (e) => setUser({ ...user, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await API.post("/auth/register", user);
      setMsg(res.data);
    } catch {
      setMsg("Email already registered");
    }
  };

  return (
    <div className="form-container">
      <form onSubmit={handleSubmit}>
        <h2>Register</h2>
        <input name="username" placeholder="Username" onChange={handleChange} required />
        <input name="email" type="email" placeholder="Email" onChange={handleChange} required />
        <input name="password" type="password" placeholder="Password" onChange={handleChange} required />
        <button type="submit">Register</button>
        {msg && <p>{msg}</p>}
        <p>
          Already have an account? <a href="/">Login</a>
        </p>
      </form>
    </div>
  );
}
