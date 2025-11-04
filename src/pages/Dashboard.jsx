import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Dashboard.css';

/**
 * Dashboard Component
 * Shows user progress, recent activity, and quick access to features
 */
const Dashboard = () => {
  const navigate = useNavigate();

  return (
    <div className="dashboard">
      <div className="dashboard-container">
        <header className="dashboard-header">
          <button 
            className="btn-back"
            onClick={() => navigate('/')}
            aria-label="Back to home"
          >
            ← Back
          </button>
          <h1 className="dashboard-title">Dashboard</h1>
        </header>

        <div className="dashboard-content">
          <div className="dashboard-card">
            <h2>📊 Your Learning Progress</h2>
            <p>Track your journey through the Constitution</p>
            <div className="progress-stats">
              <div className="stat-item">
                <span className="stat-value">0</span>
                <span className="stat-label">Topics Completed</span>
              </div>
              <div className="stat-item">
                <span className="stat-value">0</span>
                <span className="stat-label">Quizzes Taken</span>
              </div>
              <div className="stat-item">
                <span className="stat-value">0</span>
                <span className="stat-label">Days Streak</span>
              </div>
            </div>
          </div>

          <div className="quick-actions">
            <h2>Quick Actions</h2>
            <button 
              className="action-btn"
              onClick={() => navigate('/choose-path')}
            >
              🎯 Continue Learning
            </button>
            <button className="action-btn">
              🏆 View Achievements
            </button>
            <button className="action-btn">
              📈 Progress Report
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
