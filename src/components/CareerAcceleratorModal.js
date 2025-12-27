// src/components/CareerAcceleratorModal.js
import React from "react";
import "./CareerAcceleratorModal.css";

function CareerAcceleratorModal({ onClose }) {
  return (
    <div className="career-accelerator-modal-overlay">
      <div className="career-accelerator-modal">
        <div className="career-accelerator-modal-header">
          <h2>Layoff Support Program</h2>
          <button className="close-button" onClick={onClose}>&times;</button>
        </div>

        <div className="career-accelerator-content">
          <p>Get back on your feet faster. Our 3-month intensive Layoff Support Program is designed to help laid-off professionals secure their next role quickly and confidently.</p>

          <div className="payment-option">
            <h3>Program Details</h3>
            <p className="payment-id">$1999 upfront + 4% of annual base pay for first year</p>
            <div className="qr-container">
              <img
                src="/images/Accelerator.jpg"
                alt="Layoff Support payment QR code"
                className="qr-code"
              />
              <p>Scan QR code to get started</p>
            </div>
          </div>

          <div className="program-features">
            <h3>What's Included:</h3>
            <ul>
              <li>Resume improvement & optimization</li>
              <li>Market repositioning strategy</li>
              <li>Opportunity analysis & targeting</li>
              <li>Interview preparation & practice</li>
              <li>Salary negotiation training</li>
              <li>3 months of intensive support</li>
            </ul>
          </div>
          
          <p className="accelerator-note">
            <strong>Important:</strong> After payment, please email us directly with your name and the service you need at <a href="mailto:3@threehire.com" className="email-link">3@threehire.com</a>.
          </p>
        </div>
      </div>
    </div>
  );
}

export default CareerAcceleratorModal;