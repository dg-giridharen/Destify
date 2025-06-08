import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import Navbar from '../../components/Navbar/Navbar.jsx'; 
import Footer from '../../components/Footer/Footer.jsx';
import AuthModal from '../../components/AuthModal/AuthModal.jsx';
import { travelPackages } from '../../data.js';
import './CartPage.css';

const CartPage = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const { id } = useParams();
  const selectedPackage = travelPackages.find(pkg => pkg.id === parseInt(id));

  if (!selectedPackage) {
    return (
      <div>
        <Navbar onLoginClick={() => setIsModalOpen(true)} />
        <div className="container">
          <h1 className="page-title">Package Not Found</h1>
          <p>The travel package you are looking for does not exist.</p>
          <Link to="/destinations">Go back to destinations</Link>
        </div>
        <Footer />
      </div>
    );
  }

  const basePrice = parseFloat(selectedPackage.price.replace(/[^0-9.-]+/g,""));
  const taxAmount = basePrice * 0.18;
  const processingFee = basePrice * 0.02;
  const totalPrice = basePrice + taxAmount + processingFee;

  return (
    <div>
      <Navbar onLoginClick={() => setIsModalOpen(true)} />
      <main className="container">
        <h1 className="page-title">Your Booking Cart</h1>
        <div className="cart-container">
          <div className="price-details">
            <h3>Price Summary</h3>
            <div className="price-table">
              <div className="price-row">
                <span>Package Price</span>
                <span>₹{basePrice.toLocaleString()}</span> {}
              </div>
              <div className="price-row">
                <span>Taxes (18%)</span>
                <span>₹{taxAmount.toLocaleString()}</span> {}
              </div>
              <div className="price-row">
                <span>Processing Fee (2%)</span>
                <span>₹{processingFee.toLocaleString()}</span> {}
              </div>
              <div className="price-row total-row">
                <span>Total Amount</span>
                <span>₹{totalPrice.toLocaleString()}</span> {}
              </div>
            </div>
            <button className="checkout-button">Proceed to Checkout</button>
          </div>

          <div className="package-details">
            <img src={selectedPackage.image} alt={selectedPackage.name} className="package-image-large" />
            <h2>{selectedPackage.name}</h2>
            <p className="package-duration">{selectedPackage.duration}</p>
            <div className="terms-section">
              <h4>Terms & Conditions</h4>
              <p>All bookings are final. Cancellation is subject to a fee. Please ensure your travel documents are valid. Prices are subject to change based on availability. By proceeding, you agree to our full terms of service.</p>
            </div>
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

export default CartPage;
