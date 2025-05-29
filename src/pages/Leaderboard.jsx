import React from "react";

const sampleLeaderboard = [
  { id: 1, name: "Alice", score: 9 },
  { id: 2, name: "Bob", score: 8 },
  { id: 3, name: "Charlie", score: 7 },
  { id: 4, name: "David", score: 6 },
  { id: 5, name: "Eve", score: 5 },
];

const Leaderboard = () => {
  const styles = {
    container: {
      minHeight: "100vh",
      background: "linear-gradient(135deg, #fef3c7, #fbbf24)", // warm yellow gradient
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      padding: "30px",
      fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
    },
    card: {
      backgroundColor: "#fff",
      borderRadius: "20px",
      boxShadow: "0 20px 40px rgba(0,0,0,0.1)",
      width: "100%",
      maxWidth: "600px",
      padding: "40px 30px",
    },
    title: {
      fontSize: "32px",
      fontWeight: "800",
      color: "#b45309", // amber-700
      marginBottom: "30px",
      textAlign: "center",
      letterSpacing: "2px",
    },
    table: {
      width: "100%",
      borderCollapse: "collapse",
    },
    th: {
      textAlign: "left",
      padding: "15px 20px",
      borderBottom: "3px solid #fbbf24", // amber-400
      color: "#b45309",
      fontWeight: "700",
      fontSize: "18px",
    },
    tr: {
      borderBottom: "1px solid #f3f4f6",
      transition: "background-color 0.3s ease",
      cursor: "default",
    },
    trHover: {
      backgroundColor: "#fef3c7",
    },
    td: {
      padding: "15px 20px",
      fontSize: "16px",
      color: "#92400e",
    },
    rankCell: {
      fontWeight: "700",
      color: "#d97706", // amber-600
    },
    highlightRow: {
      backgroundColor: "#fde68a",
      fontWeight: "700",
      color: "#78350f",
    },
    noData: {
      textAlign: "center",
      color: "#92400e",
      fontSize: "18px",
      padding: "30px",
    },
  };

  return (
    <div style={styles.container}>
      <div style={styles.card}>
        <h1 style={styles.title}>Leaderboard</h1>
        {sampleLeaderboard.length > 0 ? (
          <table style={styles.table}>
            <thead>
              <tr>
                <th style={styles.th}>Rank</th>
                <th style={styles.th}>Name</th>
                <th style={styles.th}>Score</th>
              </tr>
            </thead>
            <tbody>
              {sampleLeaderboard.map((user, index) => (
                <tr
                  key={user.id}
                  style={index === 0 ? styles.highlightRow : styles.tr}
                >
                  <td style={{ ...styles.td, ...styles.rankCell }}>
                    #{index + 1}
                  </td>
                  <td style={styles.td}>{user.name}</td>
                  <td style={styles.td}>{user.score}</td>
                </tr>
              ))}
            </tbody>
          </table>
        ) : (
          <div style={styles.noData}>No leaderboard data available.</div>
        )}
      </div>
    </div>
  );
};

export default Leaderboard;
