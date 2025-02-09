import React from "react";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import { motion } from "framer-motion";
import Quiz from "./Quiz";
import Reports from "./Reports";
import Stats from "./Stats";

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

export default App;
