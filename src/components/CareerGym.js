// src/components/CareerGym.js
import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { getUserEntry } from "../api/dynamo";
import "./CareerGym.css";
import careergymBg from "../images/careergym.jpg";

function CareerGym() {
  const [userId, setUserId] = useState("");
  const [code, setCode] = useState("");
  const [entry, setEntry] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const location = useLocation();

  // Check for URL parameters, then saved credentials on first load
  useEffect(() => {
    // Parse query parameters from the URL
    const searchParams = new URLSearchParams(location.search);
    const urlId = searchParams.get("id");
    const urlCode = searchParams.get("code");
    
    // If URL has parameters, use them
    if (urlId && urlCode) {
      setUserId(urlId);
      setCode(urlCode);
      fetchEntry(urlId, urlCode);
    } else {
      // Otherwise check for saved credentials
      const savedUserId = localStorage.getItem("careerGymUserId");
      const savedCode = localStorage.getItem("careerGymCode");
      
      if (savedUserId && savedCode) {
        setUserId(savedUserId);
        setCode(savedCode);
        fetchEntry(savedUserId, savedCode);
      }
    }
  }, [location.search]);

  const fetchEntry = async (id, accessCode) => {
    setLoading(true);
    setError(null);
    try {
      const result = await getUserEntry(id, accessCode);
      setEntry(result);
      // Save successful credentials to localStorage
      localStorage.setItem("careerGymUserId", id);
      localStorage.setItem("careerGymCode", accessCode);
    } catch (error) {
      console.error("Error fetching entry:", error);
      setError(error.message);
    } finally {
      setLoading(false);
    }
  };

  const handleFetch = async (e) => {
    e.preventDefault();
    fetchEntry(userId, code);
  };
  
  const handleLogout = () => {
    setEntry(null);
    setUserId("");
    setCode("");
    localStorage.removeItem("careerGymUserId");
    localStorage.removeItem("careerGymCode");
  };

  useEffect(() => {
    // Add body background when component mounts
    document.body.style.backgroundImage = `linear-gradient(rgba(0, 0, 0, 0.65), rgba(0, 0, 0, 0.7)), url(${careergymBg})`;
    document.body.style.backgroundSize = 'cover';
    document.body.style.backgroundPosition = 'center';
    document.body.style.backgroundAttachment = 'fixed';
    
    // Reset background when component unmounts
    return () => {
      document.body.style.backgroundImage = '';
      document.body.style.backgroundSize = '';
      document.body.style.backgroundPosition = '';
      document.body.style.backgroundAttachment = '';
    };
  }, []);

  return (
    <div className="careergym-container">
      {entry ? (
        <>
          <h1>Your Assessment Report</h1>
          <div className="report-content">
            <div className="report-header">
              <div>
                <h3>{entry.name}</h3>
                <p className="email">{entry.email}</p>
                <p className="timestamp">Report Date: {new Date(entry.timestamp).toLocaleDateString()}</p>
              </div>
              <button onClick={handleLogout} className="logout-button">Logout</button>
            </div>
            
            <div className="assessment-section">
              <h4>Strengths</h4>
              <div className="assessment-content">{entry.strengths}</div>
            </div>
            
            <div className="assessment-section">
              <h4>Areas for Improvement</h4>
              <div className="assessment-content">{entry.weaknesses}</div>
            </div>
          </div>
        </>
      ) : (
        <>
          <h1>CareerGym</h1>
          <p className="careergym-tagline">
          Where candidates train, strengthen, and level up their careers, just like a gym for professional growth.
          </p>
          
          {error && <div className="error-message">{error}</div>}
          <form className="careergym-form" onSubmit={handleFetch}>
            <div className="form-group">
              <label>User ID</label>
              <input
                type="text"
                placeholder="Enter your user ID"
                value={userId}
                onChange={(e) => setUserId(e.target.value)}
                required
              />
            </div>
            <div className="form-group">
              <label>Access Code</label>
              <input
                type="text"
                placeholder="Enter your access code"
                value={code}
                onChange={(e) => setCode(e.target.value)}
                required
              />
            </div>
            <button type="submit" disabled={loading}>
              {loading ? "Loading..." : "Access My Report"}
            </button>
          </form>
        </>
      )}
    </div>
  );
}

export default CareerGym;