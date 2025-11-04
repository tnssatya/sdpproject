import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import userPathsData from '../data/userPaths.json';
import topicsData from '../data/topics.json';
import membersData from '../data/members.json';
import DidYouKnow from '../components/DidYouKnow';
import AITools from '../components/AITools';
import './UserPathSection.css';

/**
 * UserPathSection Component
 * Main section for each user path showing:
 * - Insightful message with YouTube embed
 * - Member images banner
 * - Awareness topics cards
 * - AI Tools section
 * - Did You Know section
 */
const UserPathSection = () => {
  const { pathId } = useParams();
  const navigate = useNavigate();
  const [currentPath, setCurrentPath] = useState(null);
  const [topics, setTopics] = useState([]);

  useEffect(() => {
    // Find the current path data
    const path = userPathsData.find(p => p.id === pathId);
    setCurrentPath(path);

    // Get topics for this path
    const pathTopics = topicsData[pathId] || [];
    setTopics(pathTopics);
  }, [pathId]);

  if (!currentPath) {
    return <div className="loading">Loading...</div>;
  }

  const handleTopicClick = (topicId) => {
    navigate(`/path/${pathId}/topic/${topicId}`);
  };

  return (
    <div className="user-path-section">
      {/* Header Navigation */}
      <header className="section-header">
        <button 
          className="btn-back"
          onClick={() => navigate('/choose-path')}
          aria-label="Back to path selection"
        >
          ← Back
        </button>
        <div className="header-info">
          <span className="header-icon">{currentPath.icon}</span>
          <h1 className="header-title">{currentPath.name} Path</h1>
        </div>
        <button 
          className="btn-home"
          onClick={() => navigate('/')}
          aria-label="Go to home"
        >
          🏠
        </button>
      </header>

      <div className="section-container">
        {/* Insightful Message Section */}
        <section className="insightful-message">
          <h2 className="section-title">
            <span className="title-icon">💡</span>
            An Insightful Message
          </h2>
          
          {/* YouTube Video Embed */}
          <div className="video-container">
            <div className="video-wrapper">
              <iframe
                src="https://www.youtube.com/embed/dQw4w9WgXcQ"
                title="Constitution of India - Educational Video"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                aria-label="Educational video about Indian Constitution"
              ></iframe>
            </div>
          </div>

          {/* Members Banner */}
          <div className="members-banner">
            <h3 className="banner-title">Constitutional Leaders</h3>
            <div className="members-grid">
              {membersData.map(member => (
                <div key={member.id} className="member-card">
                  <img 
                    src={member.image} 
                    alt={member.name}
                    className="member-image"
                  />
                  <p className="member-name">{member.name}</p>
                  <p className="member-role">{member.role}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Awareness Topics Section */}
        <section className="awareness-topics">
          <h2 className="section-title">
            <span className="title-icon">📚</span>
            Awareness Topics
          </h2>
          
          <div className="topics-grid">
            {topics.map(topic => (
              <div 
                key={topic.id}
                className="topic-card"
                style={{ borderLeftColor: topic.color }}
                onClick={() => handleTopicClick(topic.id)}
                role="button"
                tabIndex={0}
                onKeyPress={(e) => {
                  if (e.key === 'Enter' || e.key === ' ') {
                    handleTopicClick(topic.id);
                  }
                }}
                aria-label={`Learn about ${topic.title}`}
              >
                <div className="topic-icon">{topic.icon}</div>
                <div className="topic-content">
                  <h3 className="topic-title">{topic.title}</h3>
                  <p className="topic-description">{topic.description}</p>
                </div>
                <span className="topic-arrow">→</span>
              </div>
            ))}
          </div>
        </section>

        {/* AI Powered Tools Section */}
        <AITools pathId={pathId} />

        {/* Did You Know Section */}
        <DidYouKnow />
      </div>
    </div>
  );
};

export default UserPathSection;
