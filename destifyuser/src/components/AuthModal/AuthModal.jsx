import React, { useState } from 'react';
import { useAuth } from '../../context/AuthContext';
import './AuthModal.css';

const AuthModal = ({ isOpen, onClose }) => {
  const [authMode, setAuthMode] = useState('login');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [agreeTerms, setAgreeTerms] = useState(false);
  const { login } = useAuth();

  if (!isOpen) return null;

  const toggleAuthMode = (e) => {
    e.preventDefault();
    setAuthMode(authMode === 'login' ? 'signup' : 'login');
    setEmail('');
    setPassword('');
    setAgreeTerms(false);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!agreeTerms) {
      alert("You must agree to the terms & privacy policy to proceed.");
      return;
    }
    
    if (email) {
      login({ email: email });
      onClose();
    }
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
              <label htmlFor="name">Your name</label>
              <input type="text" id="name" required />
            </div>
          )}
          <div className="form-group">
            <label htmlFor="email">Your email</label>
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
              checked={agreeTerms}
              onChange={(e) => setAgreeTerms(e.target.checked)}
              required
            />
            <label htmlFor="terms">By continuing, I agree to the terms of use & privacy policy.</label>
          </div>
          <button 
            type="submit" 
            className="submit-button"
            disabled={!agreeTerms}
          >
            {isLoginMode ? 'Log In' : 'Create account'}
          </button>
        </form>
        <p className="auth-toggle-link">
          {isLoginMode ? "Already have an account? " : "Already have an account? "}
          <a href="#" onClick={toggleAuthMode}>
            {isLoginMode ? "Login here" : "Login here"}
          </a>
        </p>
      </div>
    </div>
  );
};

export default AuthModal;
