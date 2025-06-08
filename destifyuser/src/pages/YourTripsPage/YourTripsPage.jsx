import React, { useState } from 'react';
import Navbar from '../../components/Navbar/Navbar.jsx';
import Footer from '../../components/Footer/Footer.jsx';
import AuthModal from '../../components/AuthModal/AuthModal.jsx';
import './YourTripsPage.css';

const YourTripsPage = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <div className="page-wrapper">
      <Navbar onLoginClick={() => setIsModalOpen(true)} />
      <main className="container">
        <h1 className="page-title">Your Trips</h1>
        <p>A list of your booked trips will appear here once you are logged in.</p>
      </main>
      <Footer />
      <AuthModal 
        isOpen={isModalOpen} 
        onClose={() => setIsModalOpen(false)} 
      />
    </div>
  );
};

export default YourTripsPage;
