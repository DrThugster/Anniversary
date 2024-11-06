// components/CurrentPage.js
import React from 'react';
// import './CurrentPage.css';

const currentMoments = [
  // Add your current moments here
];

const CurrentPage = () => {
  return (
    <div className="current-container">
      <h1 className="current-title">Look At Us Now! 💑</h1>
      <div className="current-grid">
        {currentMoments.map((moment) => (
          <div key={moment.id} className="moment-card">
            {/* Similar structure to MemoriesPage */}
          </div>
        ))}
      </div>
    </div>
  );
};

export default CurrentPage;