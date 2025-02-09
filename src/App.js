import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";


const sections = ["Dashboard", "Practice Exam", "Reports", "Statistics", "Study Material"];
const questions = [
  { id: "B-001-001-001", question: "Authority to make regulations governing radiocommunications is derived from:", options: ["the Standards for the Operation of Radio Stations in the Amateur Radio Service", "the ITU Radio Regulations", "the Radiocommunication Act", "the Radiocommunication Regulations"], correct: 2 },
  { id: "B-001-002-002", question: "An Amateur Radio Operator Certificate is valid for:", options: ["three years", "one year", "life", "five years"], correct: 2 },
  { id: "B-001-003-004", question: "What government document states the offences and penalties for non-compliance of the rules governing radiocommunications?", options: ["The Official Radio Rules of Canada", "The Radiocommunications Regulations", "The Radiocommunications Law Reform", "The Radiocommunication Act"], correct: 3 }
];

const QuizApp = () => {
  const [currentSection, setCurrentSection] = useState("Dashboard");
  const [shuffledQuestions, setShuffledQuestions] = useState([]);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedOption, setSelectedOption] = useState(null);
  const [feedback, setFeedback] = useState(null);
  const version = "v2.4.1";

  useEffect(() => {
    setShuffledQuestions([...questions].sort(() => Math.random() - 0.5));
  }, []);

  const handleAnswer = (index) => {
    const correct = shuffledQuestions[currentQuestionIndex].correct;
    setSelectedOption(index);
    setFeedback(index === correct ? "Correct! 🎉" : "Incorrect ❌");
  };

  return (<>
    <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: 20 }} style={{ display: "flex", minHeight: "100vh", background: "#1E1E2E", color: "#fff", fontFamily: "Arial, sans-serif" }}>
      <aside style={{ width: "250px", background: "#2A2D3A", padding: "20px", boxShadow: "2px 0 5px rgba(0, 0, 0, 0.2)" }}>
        <img src="/logo.png" alt="Ham Radio Study Hub Logo" style={{ width: "200px", marginBottom: "20px" }} />
        {sections.map((section) => (
          <motion.button whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} 
            key={section} 
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            style={{ display: "block", width: "100%", padding: "12px", fontSize: "18px", background: "#4A4F5E", border: "none", borderRadius: "8px", cursor: "pointer", color: "#fff", marginBottom: "10px", transition: "background 0.3s" }}
            onClick={() => setCurrentSection(section)}
          >
            {section}
          </motion.button>
        ))}
      </aside>
      <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: 20 }} 
        animate={{ opacity: 1, x: 0 }}
        exit={{ opacity: 0, x: 20 }}
        style={{ flex: 1, padding: "40px", textAlign: "center" }}
      >
        <h2 style={{ fontSize: "28px", marginBottom: "20px", color: "#FFD700" }}>{currentSection}</h2>
        {currentSection === "Practice Exam" && shuffledQuestions.length > 0 && (
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.3 }}
          >
            <h3>{shuffledQuestions[currentQuestionIndex].question}</h3>
            {shuffledQuestions[currentQuestionIndex].options.map((option, index) => (
              <motion.button 
                key={index} 
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                style={{ display: "block", margin: "10px auto", padding: "12px", width: "100%", fontSize: "18px", background: selectedOption === index ? (index === shuffledQuestions[currentQuestionIndex].correct ? "green" : "red") : "#444", border: "1px solid #666", borderRadius: "5px", cursor: "pointer", color: "#fff" }}
                onClick={() => handleAnswer(index)}>
                {option}
              </motion.button>
            ))}
            {feedback && <p style={{ fontSize: "20px", fontWeight: "bold", marginTop: "10px" }}>{feedback}</p>}
            <button onClick={() => setCurrentQuestionIndex(currentQuestionIndex - 1)} disabled={currentQuestionIndex === 0} style={{ marginRight: "10px", padding: "10px", background: "#777", border: "none", color: "#fff", cursor: "pointer", borderRadius: "5px" }}>Back</button>
            <button onClick={() => { setCurrentQuestionIndex(currentQuestionIndex + 1); setFeedback(null); setSelectedOption(null); }} disabled={currentQuestionIndex >= shuffledQuestions.length - 1} style={{ padding: "10px", background: "#5A5F6F", border: "none", color: "#fff", cursor: "pointer", borderRadius: "5px" }}>Next</button>
          </motion.div>
        )}
        <footer style={{ padding: "15px", textAlign: "center", background: "#222", color: "#aaa", fontSize: "14px", marginTop: "40px", borderTop: "2px solid #FFD700" }}>
          Version: {version}
        </footer>
      </motion.div>


</motion.div></>);

export default QuizApp;
