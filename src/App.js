// App.js
import React, { useState, useEffect  } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation} from 'react-router-dom';
import DatingApp from './components/DatingApp';
import TanishqQuestion from './components/TanishqQuestion';
import LoveScale from './components/LoveScale';
import CelebrationPage from './components/CelebrationPage';
import MemoriesPage from './components/MemoriesPage';

const MusicController = () => {
  const location = useLocation();
  const [backgroundMusic] = useState(new Audio('audio/background-music.mp3'));
  const [celebrationMusic] = useState(new Audio('audio/celebration-music.mp3'));

  useEffect(() => {
    // Play background music from start till love scale
    if (location.pathname === '/' || 
        location.pathname === '/tanishq-question' || 
        location.pathname === '/love-scale') {
      backgroundMusic.play();
      backgroundMusic.loop = true;
      celebrationMusic.pause();
      celebrationMusic.currentTime = 0;
    } 
    // Play celebration music after love scale
    else {
      celebrationMusic.play();
      celebrationMusic.loop = true;
      backgroundMusic.pause();
      backgroundMusic.currentTime = 0;
    }

    return () => {
      backgroundMusic.pause();
      celebrationMusic.pause();
    };
  }, [location, backgroundMusic, celebrationMusic]);

  return null;
};


function App() {
  return (
    <Router>
       <MusicController />
       <div className="fixed inset-0 overflow-hidden">
      <Routes>
        <Route path="/" element={<DatingApp />} />
        <Route path="/tanishq-question" element={<TanishqQuestion />} />
        <Route path="/love-scale" element={<LoveScale />} />
        <Route path="/celebration" element={<CelebrationPage />} />
        <Route path="/memories" element={<MemoriesPage />} />
      </Routes>
      </div>
    </Router>
  );
}

export default App;