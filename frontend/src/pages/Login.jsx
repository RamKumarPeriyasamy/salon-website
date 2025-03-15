import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { login } from "../services/authService";
import "./Login.css";
import logo from "../assets/logo-removebg-preview.png";
import HomeButton from "../components/Homebutton"; // ✅ Import HomeButton component

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
      navigate("/admin");
    } catch {
      setError("❌ Invalid email or password");
    }
  };

  return (
    <div className="login-container">
      {/* ✅ Home Button at the top left */}
      <HomeButton />

      <img src={logo} alt="Logo" className="logo" />
      <h2>🔐 Admin Login</h2>

      {error && <p className="error">{error}</p>}

      <form onSubmit={handleLogin}>
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <button type="submit">Login</button>
      </form>
    </div>
  );
};

export default Login;
