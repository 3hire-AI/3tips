// src/components/Home.js
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import SpinningCoin from "./SpinningCoin";
import "./Home.css";

function Home() {
  const [currentSlide, setCurrentSlide] = useState(0);
  
  // Supporting messages shown beneath the Happy & Honest Hiring mark.
  const slides = [
    "Where hiring feels less like an interview and more like a great conversation over drinks.",
    "Where candidates don't just search for jobs—they train, grow, and level up their careers.",
    "We're not your typical recruiting firm.",
    "We blend AI-powered deep matching, expert coaching, and a human touch.",
    "We make hiring and job-seeking effortless, fun, and rewarding.",
    "Grab a seat at the HiringBar or break a sweat at the CareerGym—your next big move starts here!"
  ];

  useEffect(() => {
    // Add 'home-page' class to body when this component mounts
    document.body.classList.add('home-page');
    
    // Apply background directly to ensure it works
    document.body.style.backgroundImage = `url(/images/ocean-waves.jpg)`;
    document.body.style.backgroundSize = 'cover';
    document.body.style.backgroundPosition = 'center';
    document.body.style.backgroundAttachment = 'fixed';
    
    // Slideshow timer - advance to next slide every 4 seconds
    const slideTimer = setInterval(() => {
      setCurrentSlide((prevSlide) => (prevSlide + 1) % slides.length);
    }, 4000);
    
    // Remove the class and background when the component unmounts
    return () => {
      document.body.classList.remove('home-page');
      document.body.style.backgroundImage = '';
      document.body.style.backgroundSize = '';
      document.body.style.backgroundPosition = '';
      document.body.style.backgroundAttachment = '';
      clearInterval(slideTimer);
    };
  }, [slides.length]);

  return (
    <div className="home-hero">
      <div className="hero-content">
        <h1 className="visually-hidden">3Hire — Happy &amp; Honest Hiring</h1>
        <div className="home-brand">
          <SpinningCoin />
        </div>
        <div className="slideshow-container">
          <p key={currentSlide} className="slide-text">
            {slides[currentSlide]}
          </p>
        </div>
        <div className="hero-buttons">
          <a
            href="https://candidates.3hire.ai/login"
            className="btn btn-hiring"
            target="_blank"
            rel="noopener noreferrer"
          >
            Recruiting
          </a>
          <Link to="/coaching" className="btn btn-coaching">Coaching</Link>
          <a
            href="https://pgi.3hire.ai"
            className="btn btn-assessment"
            target="_blank"
            rel="noopener noreferrer"
          >
            Assessment
          </a>
        </div>
      </div>
    </div>
  );
}

export default Home;
