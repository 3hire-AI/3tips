// src/components/Home.js
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./Home.css";

function Home() {
  const [currentSlide, setCurrentSlide] = useState(0);
  
  // Slideshow content - welcome messages to display one by one
  const slides = [
    "Welcome to HiringBar & CareerGym! 🍻💪",
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
        <h1>{slides[0]}</h1>
        <div className="slideshow-container">
          <p key={currentSlide} className="slide-text">
            {currentSlide === 0 ? "" : slides[currentSlide]}
          </p>
        </div>
        <div className="hero-buttons">
          <Link to="/deep-match" className="btn btn-hiring">Start HiringBar</Link>
          <Link to="/coaching" className="btn btn-coaching">Start CareerGym</Link>
        </div>
      </div>
    </div>
  );
}

export default Home;