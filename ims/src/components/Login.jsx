// src/components/Login.js
import { useState } from "react";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../FirebaseConfig.jsx";
import Alert from "./alert.jsx";
import "../styles/styles.css";

const allowedEmails = ["admin@gmail.com","admin@123"];

export default function Login({ onLogin }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [alert, setAlert] = useState(null);

  const handleLogin = async (e) => {
    e.preventDefault();

    if (!allowedEmails.includes(email)) {
      setAlert({ type: "error", message: "Access denied: Unauthorized email." });
      return;
    }

    try {
      await signInWithEmailAndPassword(auth, email, password);
      setAlert({ type: "success", message: "Login successful!" });

      // Save to localStorage
      localStorage.setItem("isLoggedIn", "true");
      setTimeout(() => {
        setAlert(null);
        onLogin(); // Notify parent (App.js)
      }, 1000);
    } catch (err) {
      setAlert({ type: "error", message: "Invalid credentials." });
    }
  };

  return (
    <div style={{ maxWidth: "400px", margin: "80px auto", padding: "30px", background: "white", borderRadius: "8px", boxShadow: "0 2px 8px rgba(0,0,0,0.1)" }}>
      <h2 style={{ marginBottom: "20px" }}>Login</h2>
      {alert && <Alert type={alert.type} message={alert.message} />}
      <form onSubmit={handleLogin}>
        <div style={{ marginBottom: "15px" }}>
          <label>Email</label><br />
          <input
            type="text"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            style={{ width: "96%", padding: "6px", borderRadius: "2px", border: "1px solid #ccc" }}
          />
        </div>
        <div style={{ marginBottom: "15px" }}>
          <label>Password</label><br />
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            style={{ width: "96%", padding: "6px", borderRadius: "2px", border: "1px solid #ccc" }}
          />
        </div>
        <button type="submit" className="btn btn-edit" style={{ width: "100%" }}>
          Login
        </button>
      </form>
    </div>
  );
}
