import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate();
  const isLoggedIn = !!localStorage.getItem("token");
  const [hoveredLink, setHoveredLink] = useState(null);
  const [hoveredBtn, setHoveredBtn] = useState(null);

  const handleLogout = () => {
    localStorage.removeItem("token");
    navigate("/login");
  };

  const styles = {
    nav: {
      backgroundColor: "#fff",
      boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
      padding: "14px 30px",
      position: "sticky",
      top: 0,
      zIndex: 1000,
      userSelect: "none",
    },
    container: {
      maxWidth: "1200px",
      margin: "0 auto",
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      flexWrap: "wrap",
      gap: "12px",
    },
    logo: {
      fontSize: "28px",
      fontWeight: "900",
      color: "#4f46e5",
      textDecoration: "none",
      letterSpacing: "2px",
      userSelect: "none",
      transition: "transform 0.3s ease",
      cursor: "pointer",
    },
    logoHover: {
      transform: "scale(1.1)",
    },
    linksContainer: {
      display: "flex",
      alignItems: "center",
      gap: "24px",
      flexWrap: "wrap",
    },
    link: {
      position: "relative",
      color: "#374151",
      fontWeight: "600",
      textDecoration: "none",
      fontSize: "17px",
      paddingBottom: "4px",
      cursor: "pointer",
      transition: "color 0.3s ease",
    },
    linkHover: {
      color: "#4f46e5",
    },
    underline: {
      content: '""',
      position: "absolute",
      width: "0%",
      height: "3px",
      bottom: 0,
      left: 0,
      backgroundColor: "#4f46e5",
      borderRadius: "2px",
      transition: "width 0.3s ease",
    },
    underlineActive: {
      width: "100%",
    },
    button: {
      padding: "9px 20px",
      borderRadius: "10px",
      fontWeight: "700",
      cursor: "pointer",
      transition: "all 0.3s ease",
      border: "none",
      fontSize: "15px",
      userSelect: "none",
    },
    logoutBtn: {
      backgroundColor: "#ef4444",
      color: "#fff",
      boxShadow: "0 8px 15px rgba(239, 68, 68, 0.3)",
    },
    logoutHover: {
      backgroundColor: "#dc2626",
      boxShadow: "0 12px 30px rgba(220, 38, 38, 0.5)",
    },
    loginBtn: {
      backgroundColor: "#6366f1",
      color: "#fff",
      boxShadow: "0 8px 15px rgba(99, 102, 241, 0.3)",
      border: "none",
    },
    loginHover: {
      backgroundColor: "#4f46e5",
      boxShadow: "0 12px 30px rgba(79, 70, 229, 0.5)",
    },
    signupBtn: {
      backgroundColor: "transparent",
      color: "#6366f1",
      border: "2px solid #6366f1",
      fontWeight: "700",
      boxShadow: "none",
    },
    signupHover: {
      backgroundColor: "#f0f5ff",
      boxShadow: "0 0 10px rgba(99, 102, 241, 0.3)",
    },

    // Responsive
    mobileMenuBtn: {
      display: "none",
      fontSize: "28px",
      cursor: "pointer",
      userSelect: "none",
      color: "#4f46e5",
      background: "none",
      border: "none",
    },
    mobileMenuOpen: {
      display: "flex",
      flexDirection: "column",
      gap: "20px",
      width: "100%",
      marginTop: "10px",
    },
  };

  // Responsive: toggle menu
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav style={styles.nav}>
      <div style={styles.container}>
        <Link
          to="/"
          style={{
            ...styles.logo,
            ...(hoveredLink === "logo" ? styles.logoHover : {}),
          }}
          onMouseEnter={() => setHoveredLink("logo")}
          onMouseLeave={() => setHoveredLink(null)}
        >
          Quizard Clone
        </Link>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          style={styles.mobileMenuBtn}
          aria-label="Toggle menu"
          className="mobile-menu-btn"
        >
          ☰
        </button>

        {/* Links */}
        <div
          style={{
            ...styles.linksContainer,
            ...(menuOpen ? styles.mobileMenuOpen : {}),
          }}
          className="links-container"
        >
          {["Home", "Quiz", "Leaderboard"].map((text) => (
            <Link
              key={text}
              to={text === "Home" ? "/" : `/${text.toLowerCase()}`}
              style={{
                ...styles.link,
                color:
                  hoveredLink === text.toLowerCase()
                    ? styles.linkHover.color
                    : styles.link.color,
              }}
              onMouseEnter={() => setHoveredLink(text.toLowerCase())}
              onMouseLeave={() => setHoveredLink(null)}
            >
              {text}
              <span
                style={{
                  ...styles.underline,
                  ...(hoveredLink === text.toLowerCase()
                    ? styles.underlineActive
                    : {}),
                }}
              />
            </Link>
          ))}

          {isLoggedIn ? (
            <button
              onClick={handleLogout}
              style={{
                ...styles.button,
                ...styles.logoutBtn,
                ...(hoveredBtn === "logout" ? styles.logoutHover : {}),
              }}
              onMouseEnter={() => setHoveredBtn("logout")}
              onMouseLeave={() => setHoveredBtn(null)}
              aria-label="Logout"
            >
              Logout
            </button>
          ) : (
            <>
              <Link
                to="/login"
                style={{
                  ...styles.button,
                  ...styles.loginBtn,
                  ...(hoveredBtn === "login" ? styles.loginHover : {}),
                  textDecoration: "none",
                  display: "inline-block",
                }}
                onMouseEnter={() => setHoveredBtn("login")}
                onMouseLeave={() => setHoveredBtn(null)}
              >
                Login
              </Link>
              <Link
                to="/signup"
                style={{
                  ...styles.button,
                  ...styles.signupBtn,
                  ...(hoveredBtn === "signup" ? styles.signupHover : {}),
                  textDecoration: "none",
                  display: "inline-block",
                  marginLeft: "12px",
                }}
                onMouseEnter={() => setHoveredBtn("signup")}
                onMouseLeave={() => setHoveredBtn(null)}
              >
                Signup
              </Link>
            </>
          )}
        </div>
      </div>

      {/* Inline CSS for media query to show mobile menu button */}
      <style>{`
        @media (max-width: 768px) {
          .mobile-menu-btn {
            display: block !important;
          }
          .links-container {
            flex-direction: column !important;
            gap: 12px !important;
          }
        }
      `}</style>
    </nav>
  );
};

export default Navbar;
