import React, { useState, useEffect } from 'react';
import Navbar from '../../components/Navbar/Navbar.jsx';
import Footer from '../../components/Footer/Footer.jsx';
import TravelCard from '../../components/TravelCard/TravelCard.jsx';
import AuthModal from '../../components/AuthModal/AuthModal.jsx';
import { travelPackages } from '../../data.js';
import './DestinationPage.css';

const DestinationsPage = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedDestination, setSelectedDestination] = useState('All');
  const [filteredPackages, setFilteredPackages] = useState(travelPackages);

  useEffect(() => {
    if (selectedDestination === 'All') {
      setFilteredPackages(travelPackages);
    } else {
      setFilteredPackages(
        travelPackages.filter(pkg => pkg.destination === selectedDestination)
      );
    }
  }, [selectedDestination]);

  const uniqueDestinations = ['All', ...new Set(travelPackages.map(pkg => pkg.destination))];

  return (
    <div>
      <Navbar onLoginClick={() => setIsModalOpen(true)} />
      <main className="container">
        <h1 className="page-title">Our Destinations</h1>
        <div className="filter-container">
          <select
            className="destination-select"
            onChange={(e) => setSelectedDestination(e.target.value)}
            value={selectedDestination}
          >
            {uniqueDestinations.map((destination) => (
              <option key={destination} value={destination}>
                {destination}
              </option>
            ))}
          </select>
        </div>
        {}
        <div className="destination-packages-grid">
          {filteredPackages.length > 0 ? (
            filteredPackages.map((pkg) => (
              <TravelCard key={pkg.id} travelPackage={pkg} />
            ))
          ) : (
            <p className="not-found-message">No packages found for this destination.</p>
          )}
        </div>
      </main>
      <Footer />
      <AuthModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />
    </div>
  );
};

export default DestinationsPage;
