// components/CelebrationPage.js
import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import confetti from 'canvas-confetti';

const CelebrationPage = () => {
  const navigate = useNavigate();
  const [isStarted, setIsStarted] = useState(false);
  const [showContent, setShowContent] = useState(false);
  const [audio] = useState(new Audio('/celebration-music.mp3'));

  useEffect(() => {
    const handleFirstInteraction = () => {
      audio.play();
      audio.loop = true;
      document.removeEventListener('click', handleFirstInteraction);
    };

    document.addEventListener('click', handleFirstInteraction);

    return () => {
      audio.pause();
      document.removeEventListener('click', handleFirstInteraction);
    };
  }, [audio]);

  const launchConfetti = () => {
    // Left side confetti
    confetti({
      particleCount: 3,
      angle: 60,
      spread: 55,
      origin: { x: 0, y: 0.7 },
      colors: ['#FFB6C1', '#FF69B4', '#FF1493', '#FFC0CB']
    });

    // Right side confetti
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
    audio.play().then(() => {
      audio.volume = 0.6;
      audio.loop = true;
    }).catch(error => {
      console.log("Audio playback failed:", error);
    });

    setTimeout(() => setShowContent(true), 500);

    const duration = 10 * 1000;
    const animationEnd = Date.now() + duration;
    
    (function frame() {
      const timeLeft = animationEnd - Date.now();
      if (timeLeft <= 0) return;
      launchConfetti();
      requestAnimationFrame(frame);
    }());
  };

  useEffect(() => {
    return () => {
      audio.pause();
      audio.currentTime = 0;
    };
  }, [audio]);

  if (!isStarted) {
    return (
      <div className="fixed inset-0 bg-gradient-to-br from-purple-900 via-red-900 to-pink-900 
                      flex items-center justify-center">
        <button
          onClick={startCelebration}
          className="px-8 py-4 bg-gradient-to-r from-rose-500 to-purple-500
                   text-white text-xl rounded-lg transform transition-all 
                   hover:scale-105 hover:from-rose-600 hover:to-purple-600
                   animate-pulse shadow-xl"
        >
          Start Celebration ✨
        </button>
      </div>
    );
  }

  return (
    <div className="fixed inset-0 bg-gradient-to-br from-purple-900 via-red-900 to-pink-900 
                    overflow-hidden">
      {/* Content Container with proper spacing */}
      <div className="h-full flex flex-col items-center justify-between py-8 px-4">
        {/* Title Section */}
        <div className="text-center mt-8">
          <h1 className="text-6xl font-bold text-pink-200 mb-4 animate-glow">
            Happy Anniversary Umang! ❤️
          </h1>
          <h2 className="text-4xl font-bold text-rose-200 animate-float">
            For you, My Beautiful Lady!
          </h2>
        </div>

        {/* Bouquet Section - Centered */}
        <div className="flex-1 flex items-center justify-center my-4">
          <div className="w-[400px] h-[400px] relative">
            <img 
              src="/anniversary-bouquet.png"
              alt="Anniversary Bouquet"
              className="w-full h-full object-contain animate-float"
            />
          </div>
        </div>

        {/* Button Section - Fixed at bottom with proper spacing */}
        <div className="w-full max-w-md mb-8">
          <button
            onClick={() => {
              audio.pause();
              navigate('/memories');
            }}
            className="w-full py-4 bg-gradient-to-r from-rose-500 to-purple-500
                     text-white text-xl rounded-lg transform transition-all 
                     hover:scale-105 hover:from-rose-600 hover:to-purple-600"
          >
            Continue to Our Memories ✨
          </button>
        </div>
      </div>

      {/* Background Decorations */}
      <div className="fixed inset-0 pointer-events-none">
        {/* Confetti particles */}
        {[...Array(50)].map((_, i) => (
          <div
            key={`particle-${i}`}
            className="absolute animate-fall"
            style={{
              left: `${Math.random() * 100}%`,
              top: `-${Math.random() * 20}%`,
              animationDuration: `${Math.random() * 3 + 2}s`,
              animationDelay: `${Math.random() * 2}s`
            }}
          >
            <span className="text-pink-300 opacity-60" style={{ fontSize: `${Math.random() * 8 + 4}px` }}>
              •
            </span>
          </div>
        ))}
        
        {/* Stars */}
        {[...Array(25)].map((_, i) => (
          <span
            key={`star-${i}`}
            className="absolute animate-twinkle"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              fontSize: '14px',
              animationDelay: `${Math.random() * 3}s`,
              color: '#FFD700'
            }}
          >
            ⭐
          </span>
        ))}
        
        {/* Hearts */}
        {[...Array(15)].map((_, i) => (
          <span
            key={`heart-${i}`}
            className="absolute animate-float"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              fontSize: '16px',
              animationDelay: `${Math.random() * 3}s`,
              opacity: 0.6
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

