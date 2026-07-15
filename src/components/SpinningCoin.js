import React from "react";

function SpinningCoin({ durationMs = 5000 }) {
  return (
    <div
      className="spinning-coin"
      style={{ animationDuration: `${durationMs}ms` }}
      aria-label="3Hire — Happy & Honest Hiring"
      role="img"
    >
      <div className="spinning-coin__face spinning-coin__face--front">
        <svg viewBox="0 0 100 100" width="68%" height="68%" aria-hidden="true">
          <ellipse cx="34" cy="40" rx="6" ry="8" fill="currentColor" />
          <ellipse cx="66" cy="40" rx="6" ry="8" fill="currentColor" />
          <path
            d="M 22 56 Q 50 86 78 56"
            stroke="currentColor"
            strokeWidth="6"
            strokeLinecap="round"
            fill="none"
          />
        </svg>
      </div>
      <div className="spinning-coin__face spinning-coin__face--back">
        <span className="spinning-coin__tagline">
          Happy<br />&amp; Honest<br />Hiring
        </span>
      </div>
    </div>
  );
}

export default SpinningCoin;
