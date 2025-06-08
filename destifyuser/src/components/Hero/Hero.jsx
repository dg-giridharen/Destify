import React from 'react';
import { Link } from 'react-router-dom'; 
import './Hero.css';
import { trip } from '../../assets/asset.js';

const Hero = () => {
  return (
    <div className="hero-container">
      <div className="hero-image-container">
        <h1 className="main-headline">Wherever You Go, Let's Make It Happen</h1>
        <Link to="/destinations" className="explore-button">
          Explore All
        </Link>
        <img
          src={trip}
          alt="Vintage van by the ocean"
          className="hero-image"
        />
      </div>
    </div>
  );
};

export default Hero;
