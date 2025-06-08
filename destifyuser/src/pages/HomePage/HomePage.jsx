import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

import Navbar from '../../components/Navbar/Navbar.jsx';
import Hero from '../../components/Hero/Hero.jsx';
import Footer from '../../components/Footer/Footer.jsx';
import TravelCard from '../../components/TravelCard/TravelCard.jsx';
import AuthModal from '../../components/AuthModal/AuthModal.jsx';
import { travelPackages } from '../../data.js';
import './HomePage.css';

const HomePage = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const sliderSettings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    responsive: [
      { breakpoint: 1024, settings: { slidesToShow: 2 } },
      { breakpoint: 600, settings: { slidesToShow: 1 } }
    ]
  };

  return (
    <div className="home-page">
      <Navbar onLoginClick={() => setIsModalOpen(true)} />
      
      <Hero />

      <main className="container">
        <h2 className="section-title">Featured Destinations</h2>
        <div className="carousel-container">
          <Slider {...sliderSettings}>
            {travelPackages.map((pkg) => (
              <div key={pkg.id}>
                <Link to={`/cart/${pkg.id}`} style={{ textDecoration: 'none', color: 'inherit' }}>
                  <TravelCard travelPackage={pkg} />
                </Link>
              </div>
            ))}
          </Slider>
        </div>
      </main>
      
      <Footer />
      <AuthModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </div>
  );
};

export default HomePage;