// src/components/CoachingModal.js
import React from "react";
import "./CoachingModal.css";

function CoachingModal({ onClose }) {
  return (
    <div className="coaching-modal-overlay">
      <div className="coaching-modal">
        <div className="coaching-modal-header">
          <h2>Executive Coaching Program</h2>
          <button className="close-button" onClick={onClose}>&times;</button>
        </div>

        <div className="coaching-content">
          <p>Designed for mid-career professionals ready to climb higher while achieving work-life balance. This structured coaching program includes one year commitment with monthly sessions and emergent support during critical career and life situations.</p>

          <div className="coaching-features">
            <h3>What's Included:</h3>
            <ul>
              <li>12 monthly coaching sessions (one per month)</li>
              <li>Emergent support in critical situations</li>
              <li>Leadership development</li>
              <li>Communication skills enhancement</li>
              <li>Business acumen training</li>
              <li>Strategic networking guidance</li>
              <li>Work-life balance strategies</li>
            </ul>
          </div>

          <div className="coaching-cta">
            <p className="investment-note">Investment: $5999/year (One year minimum commitment)</p>
            <a
              href="https://calendly.com/smiqua-zhou/30min"
              target="_blank"
              rel="noopener noreferrer"
              className="calendly-button"
            >
              Book a Consulting Session
            </a>
          </div>

          <p className="coaching-details">
            <strong>Note:</strong> After booking, please email us at <a href="mailto:3@threehire.com" className="email-link">3@threehire.com</a> with your name and the service you need.
          </p>
        </div>
      </div>
    </div>
  );
}

export default CoachingModal;