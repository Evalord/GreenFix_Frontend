import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import LoginRegister from './Auth/LoginRegister';
import '../styles/globals.css';
import './Home.css'; // Import the CSS file
import { AuthProvider } from '../Components/Authentification/AuthContext';
import { UserProvider } from '../contexts/user-context';

export default function Home() {
  const [showLoginRegister, setShowLoginRegister] = useState(false);

  const authValue = {
    isAuthenticated: false,
    login: () => setShowLoginRegister(true),
    logout: () => setShowLoginRegister(false),
  };

  const userValue = {
    name: 'John Doe',
    role: 'Admin',
    password: 'password123',
  };

  return (
    <AuthProvider value={authValue}>
      <UserProvider value={userValue}>
        <div className="container">
          <div className="header">
            <h1 className="title">GreenFix</h1>
            <h2 className="subtitle">Sustainable Waste Management</h2>
            <p className="description">
              An efficient business model for the waste recycling market in Cameroon, promoting social and economic sustainability by facilitating the collection, processing, and distribution of recyclable materials.
            </p>
            <div className="cta-buttons">
              <button
                onClick={() => setShowLoginRegister(true)}
                className="button primary-button"
              >
                Get Started
              </button>
              <Link to="/about" className="link secondary-link">
                Learn More →
              </Link>
            </div>
          </div>

          {showLoginRegister && (
            <div className="modal-overlay">
              <div className="modal">
                <LoginRegister />
                <button
                  onClick={() => setShowLoginRegister(false)}
                  className="button close-button"
                >
                  Close
                </button>
              </div>
            </div>
          )}
        </div>
      </UserProvider>
    </AuthProvider>
  );
}