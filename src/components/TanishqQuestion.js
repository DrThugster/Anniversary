import React, { useState, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { tanishqNoMessages } from '../data/constants';

const TanishqQuestion = () => {
  const navigate = useNavigate();
  const frameRef = useRef(null);
  const [noButtonPosition, setNoButtonPosition] = useState({ x: 0, y: 0 });
  const [message, setMessage] = useState('');
  const [isInitialPosition, setIsInitialPosition] = useState(true);


  const moveNoButton = () => {
    if (!frameRef.current) return;

    const frame = frameRef.current.getBoundingClientRect();
    const buttonWidth = 120; // Approximate button width
    const buttonHeight = 50; // Approximate button height
    
    // Calculate boundaries within the pseudo frame
    // Frame is twice the size of the content box on each side
    const maxX = frame.width - buttonWidth;
    const maxY = frame.height - buttonHeight;
    
    const newX = Math.random() * maxX;
    const newY = Math.random() * maxY;
    
    setIsInitialPosition(false);
    setNoButtonPosition({ x: newX, y: newY });
    
    // Show random message
    const randomMessage = tanishqNoMessages[Math.floor(Math.random() * tanishqNoMessages.length)];
    setMessage(randomMessage);
    setTimeout(() => setMessage(''), 2000);
  };

  return (
    <div className="fixed inset-0 bg-gradient-to-br from-purple-900 via-red-900 to-pink-900 
                    flex items-center justify-center overflow-hidden">
      {/* Message Popup */}
      {message && (
        <div className="fixed top-4 left-1/2 transform -translate-x-1/2 
                       bg-black/60 text-rose-300 px-6 py-3 rounded-lg z-50">
          {message}
        </div>
      )}

      {/* Pseudo Frame - 2x the size of the content box */}
      <div 
        ref={frameRef}
        className="relative w-[400px] h-[500px] flex items-center justify-center"
      >
        {/* Main Content Box */}
        <div className="w-full max-w-md bg-black/40 backdrop-blur-sm rounded-xl p-8 shadow-2xl">
          {/* Image */}
          <div className="w-32 h-32 mx-auto mb-12">
            <img 
              src="/profile/tanishq.jpg"
              alt="Profile"
              className="w-full h-full rounded-full border-2 border-rose-500/50"
            />
          </div>

          {/* Question */}
          <h1 className="text-5xl font-bold text-pink-300 text-center mb-12">
            Do you love me?
          </h1>

          {/* Buttons Container */}
          <div className="flex justify-center gap-4">
            <button
              onClick={() => navigate('/love-scale')}
              className="px-8 py-3 bg-gradient-to-r from-rose-500 to-purple-500 
                       text-white rounded-lg hover:from-rose-600 hover:to-purple-600
                       transition-all duration-300"
            >
              Yes, I do! ❤️
            </button>

            <button
              onMouseEnter={moveNoButton}
              onClick={moveNoButton}
              style={
                isInitialPosition 
                  ? {} 
                  : {
                      position: 'absolute',
                      left: `${noButtonPosition.x}px`,
                      top: `${noButtonPosition.y}px`,
                      transform: 'translate(0, 0)', // Reset any existing transforms
                      zIndex: 20,
                    }
              }
              className="px-8 py-3 bg-gray-900 text-rose-300 rounded-lg 
                       transition-all duration-300 hover:bg-gray-800"
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