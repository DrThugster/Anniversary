// components/CelebrationPage.js
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import confetti from 'canvas-confetti';

const CelebrationPage = () => {
  const navigate = useNavigate();
  const [isStarted, setIsStarted] = useState(false);

  const launchConfetti = () => {
    confetti({
      particleCount: 3,
      angle: 60,
      spread: 55,
      origin: { x: 0, y: 0.7 },
      colors: ['#FFB6C1', '#FF69B4', '#FF1493', '#FFC0CB']
    });

    confetti({
      particleCount: 3,
      angle: 120,
      spread: 55,
      origin: { x: 1, y: 0.7 },
      colors: ['#FFB6C1', '#FF69B4', '#FF1493', '#FFC0CB']
    });
  };

  const startCelebration = () => {
    setIsStarted(true);
    const duration = 10 * 1000;
    const animationEnd = Date.now() + duration;
    
    (function frame() {
      const timeLeft = animationEnd - Date.now();
      if (timeLeft <= 0) return;
      launchConfetti();
      requestAnimationFrame(frame);
    }());
  };

 if (!isStarted) {
  return (
    <div className="celebration-container">
      {/* Auto-playing GIF added above the start button */}
      <div className="celebration-gif-container">
        <img
          src="/celebration.gif" // Replace with your actual GIF path
          alt="Celebration Gif"
          className="celebration-gif"
        />
      </div>
      <button
        onClick={startCelebration}
        className="start-button"
      >
        Let's Celebrate ✨
      </button>

      {/* Background Decorations */}
      <div className="decorations">
        {[...Array(25)].map((_, i) => (
          <span
            key={`star-${i}`}
            className="decoration star"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`
            }}
          >
            ⭐
          </span>
        ))}
        
        {[...Array(15)].map((_, i) => (
          <span
            key={`heart-${i}`}
            className="decoration heart"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`
            }}
          >
            ❤️
          </span>
        ))}

    </div>
    </div>
  );
}


  return (
    <div className="celebration-container">
      <div className="celebration-content">
        {/* Title Section */}
        <div className="title-section">
          <h1 className="main-title">
            Happy Anniversary Umang! ❤️
          </h1>
          <h2 className="sub-title">
            For you, My Beautiful Lady!
          </h2>
        </div>

        {/* Bouquet Section */}
        <div className="bouquet-section">
          <img 
            src="/anniversary-bouquet.png"
            alt="Anniversary Bouquet"
            className="bouquet-image"
          />
        </div>

        {/* Button Section */}
        <div className="button-section">
          <button
            onClick={() => navigate('/memories')}
            className="continue-button"
          >
            Continue to Our Memories ✨
          </button>
        </div>
      </div>

      {/* Background Decorations */}
      <div className="decorations">
        {[...Array(25)].map((_, i) => (
          <span
            key={`star-${i}`}
            className="decoration star"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`
            }}
          >
            ⭐
          </span>
        ))}
        
        {[...Array(15)].map((_, i) => (
          <span
            key={`heart-${i}`}
            className="decoration heart"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`
            }}
          >
            ❤️
          </span>
        ))}
      </div>
    </div>
  );
};

export default CelebrationPage;