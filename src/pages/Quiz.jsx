import React, { useState, useEffect } from "react";

const sampleQuestions = [
  {
    id: 1,
    question: "What is the capital of India?",
    options: ["Mumbai", "Delhi", "Chennai", "Kolkata"],
    answer: "Delhi",
  },
  {
    id: 2,
    question: "Which language runs in a web browser?",
    options: ["Java", "C", "Python", "JavaScript"],
    answer: "JavaScript",
  },
  {
    id: 3,
    question: "What does CSS stand for?",
    options: [
      "Central Style Sheets",
      "Cascading Style Sheets",
      "Cascading Simple Sheets",
      "Cars SUVs Sailboats",
    ],
    answer: "Cascading Style Sheets",
  },
  // Add more questions as needed
];

const Quiz = () => {
  const [currentQ, setCurrentQ] = useState(0);
  const [selectedOption, setSelectedOption] = useState(null);
  const [score, setScore] = useState(0);
  const [showResult, setShowResult] = useState(false);

  const question = sampleQuestions[currentQ];

  const styles = {
    container: {
      minHeight: "100vh",
      background: "linear-gradient(135deg, #e0f2fe, #bae6fd)", // light blue gradient
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      padding: "20px",
      fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
    },
    card: {
      backgroundColor: "#fff",
      padding: "30px 40px",
      borderRadius: "18px",
      boxShadow: "0 15px 30px rgba(0,0,0,0.1)",
      maxWidth: "600px",
      width: "100%",
    },
    questionText: {
      fontSize: "24px",
      fontWeight: "700",
      color: "#1e40af", // blue-800
      marginBottom: "25px",
    },
    optionButton: {
      width: "100%",
      padding: "14px 20px",
      marginBottom: "15px",
      borderRadius: "12px",
      border: "2px solid #3b82f6", // blue-500
      backgroundColor: "#e0f2fe",
      color: "#1e40af",
      fontSize: "18px",
      fontWeight: "600",
      cursor: "pointer",
      transition: "all 0.3s ease",
      outline: "none",
      textAlign: "left",
    },
    optionSelected: {
      backgroundColor: "#3b82f6",
      color: "#fff",
      borderColor: "#2563eb",
    },
    buttonContainer: {
      marginTop: "30px",
      display: "flex",
      justifyContent: "space-between",
    },
    btn: {
      padding: "12px 25px",
      fontSize: "16px",
      fontWeight: "600",
      borderRadius: "10px",
      border: "none",
      cursor: "pointer",
      transition: "background-color 0.3s ease",
      boxShadow: "0 4px 10px rgba(59, 130, 246, 0.4)",
    },
    btnNext: {
      backgroundColor: "#3b82f6",
      color: "#fff",
    },
    btnNextHover: {
      backgroundColor: "#2563eb",
    },
    btnRestart: {
      backgroundColor: "#10b981",
      color: "#fff",
      boxShadow: "0 4px 10px rgba(16, 185, 129, 0.4)",
    },
    scoreText: {
      fontSize: "28px",
      fontWeight: "700",
      color: "#059669", // green-600
      textAlign: "center",
      marginBottom: "20px",
    },
  };

  const [btnHover, setBtnHover] = useState(false);
  const [btnRestartHover, setBtnRestartHover] = useState(false);

  const handleOptionClick = (option) => {
    setSelectedOption(option);
  };

  const handleNext = () => {
    if (selectedOption === question.answer) {
      setScore(score + 1);
    }
    setSelectedOption(null);

    if (currentQ + 1 < sampleQuestions.length) {
      setCurrentQ(currentQ + 1);
    } else {
      setShowResult(true);
    }
  };

  const handleRestart = () => {
    setCurrentQ(0);
    setScore(0);
    setSelectedOption(null);
    setShowResult(false);
  };

  return (
    <div style={styles.container}>
      <div style={styles.card}>
        {!showResult ? (
          <>
            <div style={styles.questionText}>
              Q{currentQ + 1}. {question.question}
            </div>
            {question.options.map((option, i) => (
              <button
                key={i}
                onClick={() => handleOptionClick(option)}
                style={{
                  ...styles.optionButton,
                  ...(selectedOption === option ? styles.optionSelected : {}),
                }}
              >
                {option}
              </button>
            ))}
            <div style={styles.buttonContainer}>
              <button
                onClick={handleNext}
                disabled={!selectedOption}
                style={{
                  ...styles.btn,
                  ...styles.btnNext,
                  opacity: !selectedOption ? 0.5 : 1,
                  cursor: !selectedOption ? "not-allowed" : "pointer",
                  backgroundColor: btnHover ? styles.btnNextHover.backgroundColor : styles.btnNext.backgroundColor,
                }}
                onMouseEnter={() => setBtnHover(true)}
                onMouseLeave={() => setBtnHover(false)}
              >
                {currentQ + 1 === sampleQuestions.length ? "Finish" : "Next"}
              </button>
            </div>
          </>
        ) : (
          <>
            <div style={styles.scoreText}>Your Score: {score} / {sampleQuestions.length}</div>
            <button
              onClick={handleRestart}
              style={{
                ...styles.btn,
                ...styles.btnRestart,
                backgroundColor: btnRestartHover ? "#059669" : styles.btnRestart.backgroundColor,
              }}
              onMouseEnter={() => setBtnRestartHover(true)}
              onMouseLeave={() => setBtnRestartHover(false)}
            >
              Restart Quiz
            </button>
          </>
        )}
      </div>
    </div>
  );
};

export default Quiz;
