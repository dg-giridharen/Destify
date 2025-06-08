import React from 'react';
import { Link } from 'react-router-dom';
import './TravelCard.css';

const TravelCard = ({ travelPackage }) => {
  return (
    <Link to={`/cart/${travelPackage.id}`} className="travel-card-new">
      <div className="card-image-container">
        <img className="travel-card-image" src={travelPackage.image} alt={travelPackage.name} />
        <div className="rating-badge">
          <span className="star-icon">★</span> {travelPackage.rating}
        </div>
      </div>
      <div className="card-content">
        <h3 className="card-title">{travelPackage.name}</h3>
        <div className="card-footer">
          <span className="card-destination">📍 {travelPackage.destination}</span>
          <span className="card-price">{travelPackage.price}</span>
        </div>
      </div>
    </Link>
  );
};

export default TravelCard;