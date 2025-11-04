import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import topicDetailsData from '../data/topicDetails.json';
import './TopicDetail.css';

/**
 * TopicDetail Component
 * Displays detailed information about a specific awareness topic
 */
const TopicDetail = () => {
  const { pathId, topicId } = useParams();
  const navigate = useNavigate();
  const [topicData, setTopicData] = useState(null);

  useEffect(() => {
    // Get topic details
    const details = topicDetailsData[topicId];
    setTopicData(details);
  }, [topicId]);

  if (!topicData) {
    return (
      <div className="loading-container">
        <div className="loading-spinner"></div>
        <p>Loading topic...</p>
      </div>
    );
  }

  return (
    <div className="topic-detail">
      {/* Header */}
      <header className="topic-header">
        <button 
          className="btn-back"
          onClick={() => navigate(`/path/${pathId}`)}
          aria-label="Back to topics"
        >
          ← Back to Topics
        </button>
      </header>

      <div className="topic-container">
        {/* Title Section */}
        <div className="topic-title-section">
          <div className="topic-title-icon">{topicData.icon}</div>
          <h1 className="topic-main-title">{topicData.title}</h1>
        </div>

        {/* Introduction */}
        <div className="topic-introduction">
          <p>{topicData.introduction}</p>
        </div>

        {/* Content Sections */}
        <div className="topic-sections">
          {topicData.sections.map((section, index) => (
            <div key={index} className="content-section">
              <h2 className="section-heading">
                <span className="section-number">{index + 1}</span>
                {section.heading}
              </h2>
              <p className="section-content">{section.content}</p>
            </div>
          ))}
        </div>

        {/* Key Points */}
        <div className="key-points">
          <h2 className="key-points-title">
            <span className="key-icon">🔑</span>
            Key Points to Remember
          </h2>
          <ul className="key-points-list">
            {topicData.keyPoints.map((point, index) => (
              <li key={index} className="key-point-item">
                <span className="point-marker">✓</span>
                {point}
              </li>
            ))}
          </ul>
        </div>

        {/* Action Buttons */}
        <div className="topic-actions">
          <button 
            className="btn btn-primary"
            onClick={() => navigate(`/path/${pathId}`)}
          >
            Explore More Topics
          </button>
          <button 
            className="btn btn-secondary"
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          >
            ↑ Back to Top
          </button>
        </div>
      </div>
    </div>
  );
};

export default TopicDetail;
