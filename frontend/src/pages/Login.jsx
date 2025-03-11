import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { login } from "../services/authService";
import "./Login.css"; // ✅ Import CSS for styling
import logo from "../assets/logo-removebg-preview.png"; // ✅ Import your logo

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const res = await login({ email, password });
      localStorage.setItem("token", res.token);
      navigate("/admin"); // ✅ Redirect to admin dashboard
    } catch {
      setError("❌ Invalid email or password");
    }
  };

  return (
    <div className="login-container">
      <img src={logo} alt="Company Logo" className="logo" /> {/* ✅ Logo added */}
      <h2>🔐 Admin Login</h2>
      {error && <p className="error">{error}</p>}
      <form onSubmit={handleLogin}>
        <input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} required />
        <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} required />
        <button type="submit">Login</button>
      </form>
    </div>
  );
};

export default Login;
