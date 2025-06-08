// src/pages/AddPackagePage/AddPackagePage.jsx
import React, { useState } from 'react';

const AddPackagePage = () => {
  const [formData, setFormData] = useState({
    name: '',
    destination: '',
    duration: '',
    price: '',
    image: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Package added successfully! (Demo)');
    console.log('Form Data Submitted:', formData);
    // Reset form after submission
    setFormData({ name: '', destination: '', duration: '', price: '', image: '' });
  };

  return (
    <div>
      <div className="page-header">
        <h1>Add a New Package</h1>
      </div>
      <form onSubmit={handleSubmit} className="add-package-form">
        {/* Form groups remain the same */}
        <div className="form-group">
          <label htmlFor="name">Package Name</label>
          <input type="text" id="name" name="name" value={formData.name} onChange={handleChange} placeholder="e.g., Parisian Romance" required />
        </div>
        <div className="form-group">
          <label htmlFor="destination">Destination</label>
          <input type="text" id="destination" name="destination" value={formData.destination} onChange={handleChange} placeholder="e.g., France" required />
        </div>
        <div className="form-group">
          <label htmlFor="duration">Duration</label>
          <input type="text" id="duration" name="duration" value={formData.duration} onChange={handleChange} placeholder="e.g., 7 Days" required />
        </div>
        <div className="form-group">
          <label htmlFor="price">Price</label>
          <input type="text" id="price" name="price" value={formData.price} onChange={handleChange} placeholder="e.g., ₹1,50,000" required />
        </div>
        <div className="form-group">
          <label htmlFor="image">Image URL</label>
          <input type="text" id="image" name="image" value={formData.image} onChange={handleChange} placeholder="Paste image URL here" required />
        </div>
        <button type="submit" className="submit-package-button">Add Package</button>
      </form>
    </div>
  );
};

export default AddPackagePage;