// components/LoveScale.js
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { loveScaleOptions, loveScaleResponses } from '../data/constants';

const LoveScale = () => {
  const navigate = useNavigate();
  const [message, setMessage] = useState('');

  const handleOption = (option) => {
    if (option === "∞ Infinity ∞") {
      navigate('/celebration');
    } else {
      const randomResponse = loveScaleResponses[Math.floor(Math.random() * loveScaleResponses.length)];
      setMessage(randomResponse);
      setTimeout(() => setMessage(''), 2000);
    }
  };

  return (
    <div className="fixed inset-0 bg-gradient-to-br from-purple-900 via-red-900 to-pink-900 
                    flex flex-col items-center justify-center p-4">
      {message && (
        <div className="absolute top-4 left-1/2 transform -translate-x-1/2 
                       bg-black/60 text-rose-300 px-6 py-3 rounded-lg shadow-lg 
                       z-50 backdrop-blur animate-bounce-in">
          {message}
        </div>
      )}

      <div className="max-w-md w-full bg-black/30 backdrop-blur rounded-lg shadow-xl 
                      p-8 border border-rose-500/20 text-center">
        <h1 className="text-4xl font-bold text-rose-300 mb-12 animate-glow">
          How much do you love me?
        </h1>

        <div className="flex flex-col gap-4">
          {loveScaleOptions.map((option, index) => (
            <button
              key={index}
              onClick={() => handleOption(option)}
              className={`px-8 py-4 rounded-lg transition-all transform hover:scale-105
                        ${option === "∞ Infinity ∞"
                          ? 'bg-gradient-to-r from-rose-500 to-purple-500 hover:from-rose-600 hover:to-purple-600 text-white'
                          : 'bg-black/30 text-rose-300 border border-rose-500/20 hover:bg-black/40'
                        } animate-fade-in`}
              style={{ animationDelay: `${index * 100}ms` }}
            >
              {option}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default LoveScale;