import React from "react";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import * as framerMotion from "framer-motion";
const { motion } = framerMotion;

const Home = () => {
  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
      style={{ textAlign: "center", padding: "40px", fontFamily: "Arial, sans-serif" }}>
      <h1>Ham Radio Study Hub</h1>
      <p>Welcome! Prepare for your Canadian Ham Radio License with practice quizzes and progress tracking.</p>
      <nav>
        <Link to="/quiz" style={{ margin: "10px", fontSize: "18px" }}>Start Quiz</Link>
        <Link to="/reports" style={{ margin: "10px", fontSize: "18px" }}>Reports</Link>
        <Link to="/stats" style={{ margin: "10px", fontSize: "18px" }}>Statistics</Link>
      </nav>
    </motion.div>
  );
};

const Quiz = () => <div style={{ textAlign: "center", padding: "40px" }}><h2>Practice Quiz</h2><p>Coming soon...</p></div>;
const Reports = () => <div style={{ textAlign: "center", padding: "40px" }}><h2>Reports</h2><p>Performance reports will be available soon.</p></div>;
const Stats = () => <div style={{ textAlign: "center", padding: "40px" }}><h2>Statistics</h2><p>Visual statistics will be displayed here.</p></div>;

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/quiz" element={<Quiz />} />
        <Route path="/reports" element={<Reports />} />
        <Route path="/stats" element={<Stats />} />
      </Routes>
    </Router>
  );
};

const version = "v1.0.1";

const Footer = () => (
  <footer style={{ padding: "15px", textAlign: "center", background: "#222", color: "#aaa", fontSize: "14px", marginTop: "40px", borderTop: "2px solid #FFD700" }}>
    Version: {version}
  </footer>
);

export default App;
