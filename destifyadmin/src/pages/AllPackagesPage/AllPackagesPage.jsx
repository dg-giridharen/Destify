// src/pages/AllPackagesPage/AllPackagesPage.jsx
import React, { useState } from 'react';
import { travelPackages } from '../../data.js';

const AllPackagesPage = () => {
  const [packages, setPackages] = useState(travelPackages);

  const handleEdit = (id) => {
    alert(`(Demo) Editing package with ID: ${id}`);
  };

  const handleDelete = (id) => {
    if (window.confirm('Are you sure you want to delete this package?')) {
      setPackages(packages.filter(pkg => pkg.id !== id));
    }
  };

  return (
    <div>
      <div className="page-header">
        <h1>All Travel Packages</h1>
      </div>
      <div className="packages-grid">
        {packages.map(pkg => (
          <div key={pkg.id} className="package-card">
            <img src={pkg.image} alt={pkg.name} className="package-card-image" />
            <div className="package-card-content">
              <div className="package-card-header">
                <h3 className="package-card-name">{pkg.name}</h3>
                <span className="package-card-destination">{pkg.destination}</span>
              </div>
               <p className="package-card-price">{pkg.price}</p>
              <div className="package-card-actions">
                <button className="action-button edit-button" onClick={() => handleEdit(pkg.id)}>Edit</button>
                <button className="action-button delete-button" onClick={() => handleDelete(pkg.id)}>Delete</button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AllPackagesPage;