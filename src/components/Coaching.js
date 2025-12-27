// src/components/Coaching.js
import React, { useState, useEffect } from "react";
import CareerAcceleratorModal from "./CareerAcceleratorModal";
import IndustryPivotModal from "./IndustryPivotModal";
import "./Coaching.css";

function Coaching() {
  const [showCareerAcceleratorModal, setShowCareerAcceleratorModal] = useState(false);
  const [showIndustryPivotModal, setShowIndustryPivotModal] = useState(false);

  useEffect(() => {
    // Add body background when component mounts
    document.body.style.backgroundImage = `linear-gradient(rgba(0, 0, 0, 0.65), rgba(0, 0, 0, 0.7)), url(/images/careergym.jpg)`;
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

  const handleOpenCareerAcceleratorModal = () => {
    setShowCareerAcceleratorModal(true);
  };
  
  const handleCloseCareerAcceleratorModal = () => {
    setShowCareerAcceleratorModal(false);
  };
  
  const handleOpenIndustryPivotModal = () => {
    setShowIndustryPivotModal(true);
  };
  
  const handleCloseIndustryPivotModal = () => {
    setShowIndustryPivotModal(false);
  };

  return (
    <div className="coaching-container">
      {showCareerAcceleratorModal && <CareerAcceleratorModal onClose={handleCloseCareerAcceleratorModal} />}
      {showIndustryPivotModal && <IndustryPivotModal onClose={handleCloseIndustryPivotModal} />}
      
      <h1>CareerGym Coaching Services</h1>
      <p className="coaching-tagline">Personalized support to help you achieve your career goals</p>
      
      <div className="coaching-plans">
        <div className="plan-cards">
          <div className="plan-card">
            <h3>Layoff Support</h3>
            <p className="plan-price">$1999 upfront + 4% annual pay</p>
            <ul>
              <li>For professionals who are laid off</li>
              <li>Get jobs faster with expert guidance</li>
              <li>3 months intensive support</li>
              <li>Resume improvement</li>
              <li>Market repositioning</li>
              <li>Opportunity analysis</li>
              <li>Interview preparation</li>
              <li>Salary negotiation</li>
            </ul>
            <button onClick={handleOpenCareerAcceleratorModal} className="plan-button">
              Get Support
            </button>
          </div>

          <div className="plan-card featured">
            <span className="featured-badge">Most Popular</span>
            <h3>Industry Pivot</h3>
            <p className="plan-price">$2999 upfront + 3% annual pay</p>
            <ul>
              <li>For professionals changing industries</li>
              <li>6 months comprehensive transformation</li>
              <li>Skills translation & industry research</li>
              <li>Network building & personal branding</li>
              <li>Target: Career path switchers</li>
              <li>Extension: $299/month after 6 months</li>
            </ul>
            <button onClick={handleOpenIndustryPivotModal} className="plan-button">
              Start Pivot
            </button>
          </div>

          <div className="plan-card">
            <h3>Executive Coaching</h3>
            <p className="plan-price">$5999/year</p>
            <ul>
              <li>For mid-career professionals climbing higher</li>
              <li>One year minimum commitment</li>
              <li>One session per month (12 sessions)</li>
              <li>Emergent support in critical situations</li>
              <li>Work-life balance optimization</li>
              <li>Leadership & communication skills</li>
              <li>Business acumen & networking</li>
            </ul>
            <a
              href="https://calendly.com/smiqua-zhou/30min"
              target="_blank"
              rel="noopener noreferrer"
              className="plan-button"
            >
              Book Coaching
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Coaching;