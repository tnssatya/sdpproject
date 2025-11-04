import React from 'react';
import { useNavigate } from 'react-router-dom';
import './LandingPage.css';

/**
 * LandingPage Component
 * Main landing screen with app title, subtitle, and call-to-action buttons
 */
const LandingPage = () => {
  const navigate = useNavigate();

  return (
    <div className="landing-page">
      <div className="landing-container">
        {/* App Header */}
        <div className="landing-header">
          <div className="app-icon">🇮🇳</div>
          <h1 className="app-title">Samvidhan Gyan</h1>
          <p className="app-subtitle">Demystifying the Indian Constitution</p>
        </div>

        {/* Motivational Tagline */}
        <div className="tagline">
          <p className="tagline-text">
            "Know Your Rights, Understand Your Duties, Embrace Your Constitution"
          </p>
        </div>

        {/* Hero Section */}
        <div className="hero-section">
          <div className="hero-icon">⚖️</div>
          <h2 className="hero-title">Empowering Citizens Through Knowledge</h2>
          <p className="hero-description">
            Learn about the Indian Constitution in a simple, engaging way tailored for your age group.
          </p>
        </div>

        {/* Call to Action Buttons */}
        <div className="cta-buttons">
          <button 
            className="btn btn-primary btn-large"
            onClick={() => navigate('/choose-path')}
            aria-label="Get Started with Samvidhan Gyan"
          >
            <span className="btn-icon">🚀</span>
            Get Started
          </button>
          
          <button 
            className="btn btn-secondary btn-large"
            onClick={() => navigate('/dashboard')}
            aria-label="Go to Dashboard"
          >
            <span className="btn-icon">📊</span>
            Dashboard
          </button>
        </div>

        {/* Feature Highlights */}
        <div className="features">
          <div className="feature-item">
            <span className="feature-icon">🎯</span>
            <span className="feature-text">Personalized Learning</span>
          </div>
          <div className="feature-item">
            <span className="feature-icon">🤖</span>
            <span className="feature-text">AI-Powered Tools</span>
          </div>
          <div className="feature-item">
            <span className="feature-icon">📱</span>
            <span className="feature-text">Mobile Friendly</span>
          </div>
        </div>

        {/* Footer */}
        <footer className="landing-footer">
          <p>Made with ❤️ for Indian Citizens</p>
        </footer>
      </div>
    </div>
  );
};

export default LandingPage;
