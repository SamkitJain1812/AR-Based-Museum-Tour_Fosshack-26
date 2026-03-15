import React from 'react';
import './Museum.css';
import pyramids from './pyramids.jpg';

const EgyptMuseum = () => {
  return (
    <div className="museum-container">
   
      <div className="bg-overlay" style={{ backgroundImage: `url(${pyramids})` }}></div>

      
      <h1 className="main-title">Select the World to Dive Into</h1>

      <div className="carousel-section">
        <button className="nav-btn"> ❮ </button>

        <div className="info-card">
          <h2 className="card-title">Egypt Museum</h2>
          <p className="card-desc">
            Discover ancient pharaoh treasures in immersive AR
          </p>
        </div>

        <button className="nav-btn"> ❯ </button>
      </div>

   
      <button className="explore-btn">Explore in AR</button>
    </div>
  );
};

export default EgyptMuseum;
