import React from "react";

export default function App() {
  return (
    <div>
      {/* Navbar */}
      <nav style={{ backgroundColor: "#16a34a", color: "white", padding: "1rem 2rem", boxShadow: "0 2px 5px rgba(0,0,0,0.1)" }}>
        <h1 style={{ fontSize: "1.5rem" }}>QueryQuill:- A Smart Help Platform</h1>
      </nav>

      {/* Hero Section */}
      <header style={{ backgroundColor: "white", padding: "5rem 2rem", textAlign: "center", boxShadow: "0 2px 5px rgba(0,0,0,0.1)" }}>
        <h1 style={{ fontSize: "3rem", color: "#166534", marginBottom: "1rem" }}>
          Welcome to Smart Help Platform
        </h1>
        <p style={{ fontSize: "1.2rem", maxWidth: "600px", margin: "0 auto", color: "#374151" }}>
          Connect with AI-powered services for farming, healthcare, education, and more.
        </p>
      </header>

      {/* Services Section */}
      <section style={{ padding: "4rem 2rem", background: "linear-gradient(to right, #dcfce7, #dbeafe)", textAlign: "center" }}>
        <h2 style={{ fontSize: "2rem", marginBottom: "2rem", color: "#1f2937" }}>Our Services</h2>
        <div style={{ display: "grid", gridTemplateColumns: "1fr", gap: "2rem", maxWidth: "1200px", margin: "0 auto" }}>
          <div style={{ background: "white", padding: "2rem", borderRadius: "1rem", boxShadow: "0 2px 5px rgba(0,0,0,0.1)" }}>
            <div style={{ fontSize: "2.5rem", marginBottom: "1rem" }}>🌾</div>
            <h3>Farming Support</h3>
            <p>Get AI-based guidance for crops, soil, and weather.</p>
          </div>
          <div style={{ background: "white", padding: "2rem", borderRadius: "1rem", boxShadow: "0 2px 5px rgba(0,0,0,0.1)" }}>
            <div style={{ fontSize: "2.5rem", marginBottom: "1rem" }}>🩺</div>
            <h3>Healthcare Assistance</h3>
            <p>AI-driven healthcare insights and nearby hospital info.</p>
          </div>
          <div style={{ background: "white", padding: "2rem", borderRadius: "1rem", boxShadow: "0 2px 5px rgba(0,0,0,0.1)" }}>
            <div style={{ fontSize: "2.5rem", marginBottom: "1rem" }}>📚</div>
            <h3>Education & Schemes</h3>
            <p>Learn about educational resources and government schemes.</p>
          </div>
        </div>
      </section>

      {/* Chatbot Section */}
      <section style={{ padding: "4rem 2rem", textAlign: "center" }}>
        <h2 style={{ fontSize: "2rem", marginBottom: "1rem", color: "#1f2937" }}>Chat with our AI</h2>
        <div style={{ background: "white", padding: "2rem", borderRadius: "1rem", boxShadow: "0 2px 5px rgba(0,0,0,0.1)", maxWidth: "500px", margin: "0 auto" }}>
          🤖 Chatbot will appear here.
        </div>
      </section>

      {/* Footer */}
      <footer style={{ backgroundColor: "#16a34a", color: "white", padding: "1rem 2rem", textAlign: "center" }}>
        © 2026 Smart Help Platform
      </footer>
    </div>
  );
}