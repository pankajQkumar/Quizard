import React from "react";
import { useNavigate } from "react-router-dom";

const Home = ({ user }) => {
  const navigate = useNavigate();

  const handleStartQuiz = () => {
    navigate("/quiz");
  };

  const styles = {
    container: {
      minHeight: "100vh",
      background:
        "radial-gradient(circle at top left, #4f46e5, #8b5cf6, #a78bfa, #c4b5fd)",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      padding: "0 20px",
      fontFamily:
        "'Poppins', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen",
    },
    card: {
      backgroundColor: "rgba(255, 255, 255, 0.9)",
      borderRadius: "25px",
      boxShadow: "0 20px 40px rgba(0, 0, 0, 0.15)",
      padding: "50px 40px",
      maxWidth: "450px",
      width: "100%",
      textAlign: "center",
      animation: "fadeInUp 0.8s ease forwards",
    },
    heading: {
      fontSize: "3.5rem",
      fontWeight: "900",
      color: "#4338ca",
      marginBottom: "20px",
      letterSpacing: "2px",
      userSelect: "none",
    },
    subtitle: {
      fontSize: "1.25rem",
      color: "#6b7280",
      marginBottom: "40px",
    },
    buttonPrimary: {
      backgroundColor: "#4338ca",
      color: "#fff",
      fontSize: "1.25rem",
      padding: "15px 50px",
      borderRadius: "9999px",
      border: "none",
      cursor: "pointer",
      boxShadow: "0 10px 20px rgba(67, 56, 202, 0.4)",
      transition: "transform 0.3s ease, background-color 0.3s ease",
      userSelect: "none",
    },
    buttonPrimaryHover: {
      backgroundColor: "#3730a3",
      transform: "scale(1.05)",
    },
    buttonSecondary: {
      marginTop: "30px",
      background: "none",
      border: "none",
      fontSize: "1rem",
      color: "#4338ca",
      textDecoration: "underline",
      cursor: "pointer",
      userSelect: "none",
      fontWeight: "600",
    },
    "@keyframes fadeInUp": {
      "0%": { opacity: 0, transform: "translateY(20px)" },
      "100%": { opacity: 1, transform: "translateY(0)" },
    },
  };

  // For hover effect on primary button, use React state
  const [hover, setHover] = React.useState(false);

  return (
    <>
      <style>
        {`
          @keyframes fadeInUp {
            0% {opacity: 0; transform: translateY(20px);}
            100% {opacity: 1; transform: translateY(0);}
          }
        `}
      </style>

      <div style={styles.container}>
        <div style={styles.card}>
          <h1 style={styles.heading}>Welcome, {user?.name || "Guest"}!</h1>
          <p style={styles.subtitle}>Get ready to test your knowledge.</p>

          <button
            onClick={handleStartQuiz}
            onMouseEnter={() => setHover(true)}
            onMouseLeave={() => setHover(false)}
            style={{
              ...styles.buttonPrimary,
              ...(hover ? styles.buttonPrimaryHover : {}),
            }}
            aria-label="Start Quiz"
          >
            Start Quiz
          </button>

          <button
            onClick={() => navigate("/leaderboard")}
            style={styles.buttonSecondary}
            aria-label="View Leaderboard"
          >
            View Leaderboard
          </button>
        </div>
      </div>
    </>
  );
};

export default Home;
