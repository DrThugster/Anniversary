// components/TanishqQuestion.js
import React, { useState, useRef, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { tanishqNoMessages } from '../data/constants';

const TanishqQuestion = () => {
  const navigate = useNavigate();
  const containerRef = useRef(null);
  const [noButtonPosition, setNoButtonPosition] = useState({ x: 0, y: 0 });
  const [message, setMessage] = useState('');
  const [isInitialPosition, setIsInitialPosition] = useState(true);

  const moveNoButton = () => {
    const container = containerRef.current.getBoundingClientRect();
    const buttonWidth = 120; // Approximate button width
    const buttonHeight = 50; // Approximate button height
    
    // Calculate safe boundaries (80% of container size)
    const maxX = container.width * 0.8 - buttonWidth;
    const maxY = container.height * 0.8 - buttonHeight;
    const minX = container.width * 0.1;
    const minY = container.height * 0.2;

    const newX = Math.max(Math.random() * (maxX - minX) + minX, 0); 
    const newY = Math.max(Math.random() * (maxY - minY) + minY, 0);

    setIsInitialPosition(false);
    setNoButtonPosition({ x: newX, y: newY });
    
    // Show random message
    const randomMessage = tanishqNoMessages[Math.floor(Math.random() * tanishqNoMessages.length)];
    setMessage(randomMessage);
    setTimeout(() => setMessage(''), 2000);
  };

  return (
    <div ref={containerRef} className="fixed inset-0 bg-gradient-to-br from-purple-900 via-red-900 to-pink-900 
                    flex flex-col items-center justify-center">
      {/* Content Container */}
      <div className="w-full max-w-md mx-auto px-4">
        {/* Message Popup */}
        {message && (
          <div className="fixed top-4 left-1/2 transform -translate-x-1/2 
                         bg-black/60 text-rose-300 px-6 py-3 rounded-lg z-50">
            {message}
          </div>
        )}

        {/* Main Content */}
        <div className="bg-black/40 backdrop-blur-sm rounded-xl p-8 shadow-2xl">
          {/* Image */}
          <div className="w-32 h-32 mx-auto mb-12">
            <img 
              src="/profile/tanishq.jpg"
              alt="Tanishq"
              className="w-full h-full rounded-full border-2 border-rose-500/50"
            />
          </div>

          {/* Question */}
          <h1 className="text-5xl font-bold text-pink-300 text-center mb-12">
            Do you love me?
          </h1>

          {/* Buttons Container */}
          <div className="flex justify-center gap-4 relative">
            <button
              onClick={() => navigate('/love-scale')}
              className="px-8 py-3 bg-gradient-to-r from-rose-500 to-purple-500 
                       text-white rounded-lg hover:from-rose-600 hover:to-purple-600
                       transition-all duration-300"
            >
              Yes, I do! ❤️
            </button>

            <button
              onClick={moveNoButton} onmouseover={moveNoButton}
              style={
                isInitialPosition 
                  ? {} 
                  : {
                      position: 'absolute',
                      left: `${noButtonPosition.x}px`,
                      top: `${noButtonPosition.y}px`
                    }
              }
              className="px-8 py-3 bg-gray-900 text-rose-300 rounded-lg 
                       transition-all duration-300"
            >
              No 💔
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TanishqQuestion;