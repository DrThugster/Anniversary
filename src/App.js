// App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import DatingApp from './components/DatingApp';
import TanishqQuestion from './components/TanishqQuestion';
import LoveScale from './components/LoveScale';
import CelebrationPage from './components/CelebrationPage';
import MemoriesPage from './components/MemoriesPage';
import CurrentPage from './components/CurrentPage';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<DatingApp />} />
        <Route path="/tanishq-question" element={<TanishqQuestion />} />
        <Route path="/love-scale" element={<LoveScale />} />
        <Route path="/celebration" element={<CelebrationPage />} />
        <Route path="/memories" element={<MemoriesPage />} />
        <Route path="/current" element={<CurrentPage />} />

      </Routes>
    </Router>
  );
}

export default App;