// components/DatingApp.js
import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Heart, X} from 'lucide-react';
import { 
  profiles, 
  funnyRejectMessages, 
  funnyWrongLikeMessages 
} from '../data/constants';


const DatingApp = () => {
  const navigate = useNavigate();
  const [step, setStep] = useState('intro');
  const [currentProfileIndex, setCurrentProfileIndex] = useState(0);
  const [message, setMessage] = useState('');
  const [isProfileVisible, setIsProfileVisible] = useState(true);
  

  
  const handleStart = () => {
    setStep('dating');
  };

  const showMessage = (text, duration = 2000) => {
    setMessage(text);
    setTimeout(() => setMessage(''), duration);
  };

  const getRandomMessage = (messages) => {
    return messages[Math.floor(Math.random() * messages.length)];
  };

  const handleReject = () => {
    const currentProfile = profiles[currentProfileIndex];
    
    if (currentProfile.isMainProfile) {
      showMessage(getRandomMessage(funnyRejectMessages));
    } else {
      setIsProfileVisible(false);
      setTimeout(() => {
        setCurrentProfileIndex(prev => (prev + 1) % profiles.length);
        setIsProfileVisible(true);
      }, 500);
    }
  };

  const handleLike = () => {
    const currentProfile = profiles[currentProfileIndex];
    
    if (currentProfile.isMainProfile) {
      setStep('success');
    } else {
      showMessage(getRandomMessage(funnyWrongLikeMessages));
    }
  };

  if (step === 'intro') {
    return (
      <div className="fixed inset-0 bg-gradient-to-br from-purple-900 via-red-900 to-pink-900 
                      flex items-center justify-center p-4">
        
        <div className="max-w-md w-full bg-black/30 backdrop-blur rounded-lg shadow-xl 
                      p-8 border border-rose-500/20 animate-fade-in">
          <h1 className="text-4xl font-bold text-rose-300 mb-4 animate-glow">
            Hi Umang! 👋
          </h1>
          <p className="text-rose-100 mb-6 leading-relaxed">
            I am LOVE AI, and I help people find their perfect match! With my super powers, 
            I know everything about you and have found some interesting profiles that might
            be perfect for you! 💕
          </p>
          <button
            onClick={handleStart}
            className="w-full bg-gradient-to-r from-rose-500 to-purple-500 
                     hover:from-rose-600 hover:to-purple-600 text-white font-bold 
                     py-3 px-4 rounded-lg transition-all transform hover:scale-105"
          >
            Let's Find Your Match! &rarr;
          </button>
        </div>
      </div>
    );
  }
  if (step === 'success') {
    return (
      <div className="fixed inset-0 bg-gradient-to-br from-purple-900 via-red-900 to-pink-900">
        <div className="max-w-md mx-auto h-screen flex flex-col items-center justify-center p-8">
          <div className="w-full bg-black/40 backdrop-blur-sm rounded-xl p-8 shadow-2xl">
            {/* Top Emojis */}
            <div className="flex justify-center gap-2 mb-6">
              <span className="text-3xl">👧</span> 
              <span className="text-3xl">❤️</span>
              <span className="text-3xl">👦</span>
            </div>
  
            {/* Perfect Match Title */}
            <h1 className="text-4xl font-bold text-pink-300 text-center mb-6">
              Perfect Match!
            </h1>
  
            {/* Congratulations Text */}
            <p className="text-gray-200 text-center mb-4">
              Congratulations! You've matched with the perfect person - the one you've been with
              for the last 2 wonderful years!
            </p>
  
            {/* Anniversary Text */}
            <p className="text-pink-300 text-center mb-6">
              Happy Anniversary, Umang! ❤️
            </p>
  
            {/* Quote Box */}
            <div className="bg-black/40 rounded-xl p-6 mb-6">
              <p className="text-gray-200 text-center italic">
                "Here's to many more years of love and happiness together! 🎉"
              </p>
            </div>
  
            {/* Bottom Emojis */}
            <div className="flex justify-center gap-8 mb-8">
              <span className="text-2xl animate-float">🌹</span>
              <span className="text-2xl animate-float-delay-1">💝</span>
              <span className="text-2xl animate-float-delay-2">✨</span>
            </div>
  
            {/* Next Button */}
            <button
              onClick={() => navigate('/tanishq-question')}
              className="w-full bg-gradient-to-r from-rose-500 to-purple-500 
                       text-white py-3 px-6 rounded-lg text-lg
                       hover:from-rose-600 hover:to-purple-600
                       transition-all duration-300 flex items-center justify-center gap-2"
            >
              Let's Meet Tanishq →
            </button>
          </div>
        </div>
      </div>
    );
  }
  const currentProfile = profiles[currentProfileIndex];

  return (
    <div className="fixed inset-0 bg-gradient-to-br from-purple-900 via-red-900 to-pink-900 
                    flex items-center justify-center p-4">
      
      <div className={`max-w-md w-full bg-black/30 backdrop-blur rounded-lg shadow-xl 
                      overflow-hidden border border-rose-500/20 transition-all duration-500 
                      ${isProfileVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-95'}`}>
        {message && (
          <div className="absolute top-4 left-1/2 transform -translate-x-1/2 
                        bg-black/60 text-rose-300 px-6 py-3 rounded-lg shadow-lg 
                        z-10 backdrop-blur animate-bounce-in text-center max-w-sm w-full mx-auto">
            {message}
          </div>
        )}

        <div className="h-96 bg-gradient-to-b from-black/20 to-black/40">
          <img 
            src={currentProfile.image} 
            alt={currentProfile.name}
            className="w-full h-full object-cover"
          />
        </div>

        <div className="p-6">
          <h2 className="text-2xl font-bold text-rose-300">
            {currentProfile.name}, {currentProfile.age}
          </h2>
          
          <p className="text-rose-100 mt-2">
            {currentProfile.bio}
          </p>
          
          <div className="flex flex-wrap gap-2 mt-4">
            {currentProfile.interests.map((interest, index) => (
              <span 
                key={index} 
                className="px-3 py-1 bg-rose-500/20 text-rose-300 
                         rounded-full text-sm border border-rose-500/30"
              >
                {interest}
              </span>
            ))}
          </div>

          <div className="flex justify-center gap-4 mt-6">
            <button
              onClick={handleReject}
              className="bg-black/30 hover:bg-red-900/50 text-red-400 
                       hover:text-red-300 border border-red-500/50 rounded-full 
                       p-4 transition-all transform hover:scale-110"
              aria-label="Reject"
            >
              <X size={24} />
            </button>
            
            <button
              onClick={handleLike}
              className="bg-black/30 hover:bg-green-900/50 text-green-400 
                       hover:text-green-300 border border-green-500/50 rounded-full 
                       p-4 transition-all transform hover:scale-110"
              aria-label="Like"
            >
              <Heart size={24} />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DatingApp;