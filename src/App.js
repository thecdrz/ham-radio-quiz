import React from "react";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";



const Home = () => {
  return (
    <>
  
      <header style={{ display: "flex", justifyContent: "center", alignItems: "center", padding: "20px", background: "#4D96FF", color: "#fff", borderRadius: "12px", boxShadow: "0px 4px 10px rgba(0,0,0,0.3)" }}>
        <img src="/logo.png" alt="Ham Radio Study Hub Logo" style={{ height: "60px", marginRight: "15px" }} />
        <h1 style={{ margin: 0 }}>Ham Radio Study Hub</h1>
      </header>

    <div
      style={{ display: "flex", flexDirection: "row", height: "100vh", fontFamily: "Arial, sans-serif", background: "#f4f4f4", color: "#333", transition: "background 0.3s ease-in-out" }}>
      <h1>Ham Radio Study Hub</h1>
      <p>Welcome! Prepare for your Canadian Ham Radio License with practice quizzes and progress tracking.</p>
      <nav style={{ width: "250px", background: "#2A2D3A", padding: "20px", display: "flex", flexDirection: "column", gap: "15px", boxShadow: "2px 0 5px rgba(0,0,0,0.2)", height: "100%", transition: "transform 0.3s ease-in-out" }}>
        <Link to="/quiz" style={{ padding: "12px 20px", fontSize: "18px", textDecoration: "none", background: "#6BCB77", color: "#fff", borderRadius: "8px", fontWeight: "bold", display: "block", textAlign: "center", transition: "0.3s", boxShadow: "0px 4px 10px rgba(0,0,0,0.2)", cursor: "pointer" }} onMouseOver={(e) => e.target.style.background = '#58A55C'} onMouseOut={(e) => e.target.style.background = '#6BCB77'}>Start Quiz</Link>
        <Link to="/reports" style={{ margin: "10px", fontSize: "18px", transition: "0.3s", cursor: "pointer" }} onMouseOver={(e) => e.target.style.color = '#FF6B6B'} onMouseOut={(e) => e.target.style.color = '#fff'}>Reports</Link>
        <Link to="/stats" style={{ margin: "10px", fontSize: "18px" }}>Statistics</Link>
      </nav>
    </div>
  );
};

</>
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

const version = "v1.0.2";

const Footer = () => (
  <footer style={{ padding: "20px", textAlign: "center", background: "#333", color: "#fff", fontSize: "16px", marginTop: "40px", borderTop: "4px solid #FF6B6B", borderRadius: "12px" }}>
    Version: {version}
  </footer>
);

const AppWithFooter = () => (
  <>
    <App />
    <Footer />
  </>
);

export default AppWithFooter;
