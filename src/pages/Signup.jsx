import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Signup = () => {
  const navigate = useNavigate();
  const [form, setForm] = useState({ name: "", email: "", password: "" });
  const [hover, setHover] = useState(false);
  const [focus, setFocus] = useState({ name: false, email: false, password: false });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSignup = async (e) => {
    e.preventDefault();
    try {
      await axios.post("http://localhost:5000/api/auth/signup", form);
      alert("Signup successful! Please login.");
      navigate("/login");
    } catch (err) {
      alert(err.response?.data?.error || "Signup failed");
    }
  };

  const styles = {
    container: {
      minHeight: "100vh",
      background:
        "linear-gradient(135deg, #a7f3d0, #d9f99d, #bef264)", // bright fresh green gradient
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      padding: "15px",
      fontFamily:
        "'Poppins', 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
    },
    card: {
      background: "#fff",
      padding: "45px 35px",
      borderRadius: "20px",
      boxShadow:
        "0 18px 40px rgba(22, 163, 74, 0.25)",
      width: "100%",
      maxWidth: "420px",
      boxSizing: "border-box",
      transition: "transform 0.3s ease",
    },
    title: {
      fontSize: "2.5rem",
      fontWeight: "900",
      color: "#15803d", // green-700
      marginBottom: "28px",
      textAlign: "center",
      userSelect: "none",
    },
    input: {
      width: "100%",
      padding: "14px 18px",
      marginBottom: "20px",
      borderRadius: "14px",
      border: "2px solid #d1fae5", // light green border
      fontSize: "16px",
      outline: "none",
      boxShadow: "inset 0 2px 6px #d9f99d",
      transition: "border-color 0.3s ease, box-shadow 0.3s ease",
      boxSizing: "border-box",
    },
    inputFocus: {
      borderColor: "#15803d", // green-700
      boxShadow: "0 0 10px #4ade80",
    },
    button: {
      width: "100%",
      padding: "16px 0",
      backgroundColor: hover ? "#166534" : "#15803d", // green-800 and green-700
      color: "#fff",
      border: "none",
      borderRadius: "16px",
      fontSize: "18px",
      fontWeight: "700",
      cursor: "pointer",
      boxShadow: hover
        ? "0 12px 30px rgba(22, 163, 74, 0.6)"
        : "0 8px 20px rgba(21, 128, 61, 0.5)",
      transition: "all 0.3s ease",
      userSelect: "none",
    },
    footer: {
      marginTop: "20px",
      fontSize: "14px",
      color: "#4b5563", // gray-700
      textAlign: "center",
      userSelect: "none",
    },
  };

  return (
    <div style={styles.container}>
      <div style={styles.card}>
        <h2 style={styles.title}>Create an Account</h2>
        <form onSubmit={handleSignup} noValidate>
          <input
            type="text"
            name="name"
            placeholder="Full Name"
            value={form.name}
            onChange={handleChange}
            required
            style={{
              ...styles.input,
              ...(focus.name ? styles.inputFocus : {}),
            }}
            onFocus={() => setFocus((f) => ({ ...f, name: true }))}
            onBlur={() => setFocus((f) => ({ ...f, name: false }))}
            autoComplete="name"
            aria-label="Full Name"
          />

          <input
            type="email"
            name="email"
            placeholder="Email"
            value={form.email}
            onChange={handleChange}
            required
            style={{
              ...styles.input,
              ...(focus.email ? styles.inputFocus : {}),
            }}
            onFocus={() => setFocus((f) => ({ ...f, email: true }))}
            onBlur={() => setFocus((f) => ({ ...f, email: false }))}
            autoComplete="email"
            aria-label="Email"
          />

          <input
            type="password"
            name="password"
            placeholder="Password"
            value={form.password}
            onChange={handleChange}
            required
            style={{
              ...styles.input,
              ...(focus.password ? styles.inputFocus : {}),
            }}
            onFocus={() => setFocus((f) => ({ ...f, password: true }))}
            onBlur={() => setFocus((f) => ({ ...f, password: false }))}
            autoComplete="new-password"
            aria-label="Password"
          />

          <button
            type="submit"
            style={styles.button}
            onMouseEnter={() => setHover(true)}
            onMouseLeave={() => setHover(false)}
            aria-label="Sign Up"
          >
            Sign Up
          </button>
        </form>
      </div>
    </div>
  );
};

export default Signup;
