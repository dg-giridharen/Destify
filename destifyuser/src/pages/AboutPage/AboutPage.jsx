import React, { useState } from 'react';
import Navbar from '../../components/Navbar/Navbar.jsx';
import Footer from '../../components/Footer/Footer.jsx';
import AuthModal from '../../components/AuthModal/AuthModal.jsx';
import TeamMemberCard from '../../components/TeamMemberCard/TeamMemberCard.jsx';
import './AboutPage.css';
import { team } from '../../assets/asset.js';
const AboutPage = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const teamMembers = [
    { name: 'Jane Doe', title: 'Founder & CEO', image: 'src/assets/team.png' },
    { name: 'John Smith', title: 'Head of Tours', image: 'src/assets/team.png' },
    { name: 'Emily White', title: 'Lead Travel Agent', image: 'src/assets/team.png' },
    { name: 'Michael Brown', title: 'Marketing Director', image: 'src/assets/team.png'}
  ];

  return (
    <div>
      <Navbar onLoginClick={() => setIsModalOpen(true)} />
      <main className="container">
        <div className="about-header">
          <h1 className="page-title">About Destify</h1>
          <p className="about-tagline">Crafting unforgettable journeys, one destination at a time.</p>
        </div>

        <div className="about-content">
          <div className="about-section">
            <h3>Our Mission</h3>
            <p>At Destify, our mission is to make travel accessible, enjoyable, and enriching for everyone. We believe that travel is more than just seeing new places; it's about experiencing new cultures, creating lifelong memories, and broadening one's perspective. We are committed to providing perfectly curated travel packages that cater to every type of adventurer.</p>
          </div>
          <div className="about-section">
            <h3>Our Story</h3>
            <p>Founded in 2024 by a group of passionate travelers, Destify was born from a desire to share the magic of exploration with the world. We were tired of generic, one-size-fits-all vacation packages and knew there was a better way. By combining local expertise with a dedication to customer satisfaction, we set out to build a travel company that puts your dream vacation first.</p>
          </div>
        </div>

        <div className="team-section">
          <h2 className="section-title">Meet Our Team</h2>
          <div className="team-members">
            {teamMembers.map(member => (
              <TeamMemberCard key={member.name} name={member.name} title={member.title} image={member.image} />
            ))}
          </div>
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

export default AboutPage;