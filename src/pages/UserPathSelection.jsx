import React from 'react';
import { useNavigate } from 'react-router-dom';
import userPathsData from '../data/userPaths.json';
import './UserPathSelection.css';

/**
 * UserPathSelection Component
 * Displays three user path options: Teenager, Youth, Senior Citizen
 * Each path has tailored content for that demographic
 */
const UserPathSelection = () => {
  const navigate = useNavigate();

  const handlePathSelect = (pathId) => {
    navigate(`/path/${pathId}`);
  };

  return (
    <div className="user-path-selection">
      <div className="path-container">
        {/* Header Section */}
        <div className="path-header">
          <button 
            className="btn-back"
            onClick={() => navigate('/')}
            aria-label="Go back to home"
          >
            ← Back
          </button>
          <h1 className="path-title">Choose Your Path</h1>
          <p className="path-subtitle">
            Select the learning path that best suits your age group and interests
          </p>
        </div>

        {/* User Path Cards */}
        <div className="path-cards">
          {userPathsData.map((path) => (
            <div 
              key={path.id}
              className="path-card"
              onClick={() => handlePathSelect(path.id)}
              role="button"
              tabIndex={0}
              onKeyPress={(e) => {
                if (e.key === 'Enter' || e.key === ' ') {
                  handlePathSelect(path.id);
                }
              }}
              aria-label={`Select ${path.name} learning path`}
            >
              {/* Card Icon */}
              <div className="path-card-icon">{path.icon}</div>
              
              {/* Card Header */}
              <div className="path-card-header">
                <h2 className="path-card-title">{path.name}</h2>
                <p className="path-card-description">{path.description}</p>
              </div>

              {/* Card Features List */}
              <div className="path-card-features">
                <h3 className="features-title">What you'll learn:</h3>
                <ul className="features-list">
                  {path.features.map((feature, index) => (
                    <li key={index} className="feature-item">
                      <span className="feature-bullet">✓</span>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Card Action */}
              <div className="path-card-action">
                <span className="action-text">Start Learning →</span>
              </div>
            </div>
          ))}
        </div>

        {/* Info Section */}
        <div className="path-info">
          <div className="info-box">
            <span className="info-icon">💡</span>
            <p className="info-text">
              Don't worry! You can explore all paths and switch between them anytime.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserPathSelection;
