// src/components/AuthModal/AuthModal.jsx
import React, { useState } from 'react';
import { useAuth } from '../../context/AuthContext';
import './AuthModal.css';

const AuthModal = ({ isOpen, onClose }) => {
  const [authMode, setAuthMode] = useState('login');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [agreeTerms, setAgreeTerms] = useState(false); // New state for terms checkbox
  const { login } = useAuth();

  if (!isOpen) return null;

  const toggleAuthMode = (e) => {
    e.preventDefault();
    setAuthMode(authMode === 'login' ? 'signup' : 'login');
    // Reset form fields and terms agreement when toggling mode
    setEmail('');
    setPassword('');
    setAgreeTerms(false);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Prevent submission if terms are not agreed
    if (!agreeTerms) {
      alert("You must agree to the terms & privacy policy to proceed.");
      return;
    }
    
    if (email) {
      login({ email: email });
      onClose();
    }
    // In a real app, you'd handle actual login/signup logic here
    // For signup, you'd also need to collect the name field and handle registration
  };

  const isLoginMode = authMode === 'login';

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <button className="close-button" onClick={onClose}>&times;</button>
        <h2>{isLoginMode ? 'Log In' : 'Sign Up'}</h2>
        <form className="login-form" onSubmit={handleSubmit}>
          {!isLoginMode && (
            <div className="form-group">
              <label htmlFor="name">Your name</label> {/* Changed label text */}
              <input type="text" id="name" required />
            </div>
          )}
          <div className="form-group">
            <label htmlFor="email">Your email</label> {/* Changed label text */}
            <input type="email" id="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
          </div>
          <div className="form-group">
            <label htmlFor="password">Password</label>
            <input type="password" id="password" value={password} onChange={(e) => setPassword(e.target.value)} required />
          </div>
          <div className="form-group terms-group">
            <input 
              type="checkbox" 
              id="terms" 
              checked={agreeTerms} // Controlled component with state
              onChange={(e) => setAgreeTerms(e.target.checked)} // Update state on change
              required // Make ticking the checkbox required by HTML5 validation
            />
            <label htmlFor="terms">By continuing, I agree to the terms of use & privacy policy.</label> {/* Updated label text */}
          </div>
          <button 
            type="submit" 
            className="submit-button"
            disabled={!agreeTerms} // Disable button if terms are not agreed
          >
            {isLoginMode ? 'Log In' : 'Create account'} {/* Changed text for signup mode */}
          </button>
        </form>
        <p className="auth-toggle-link">
          {isLoginMode ? "Already have an account? " : "Already have an account? "} {/* Updated text for login mode */}
          <a href="#" onClick={toggleAuthMode}>
            {isLoginMode ? "Login here" : "Login here"} {/* Updated text for signup mode */}
          </a>
        </p>
      </div>
    </div>
  );
};

export default AuthModal;