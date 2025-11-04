import React, { useState } from 'react';
import AIQuiz from './AIQuiz';
import ChatSahayak from './ChatSahayak';
import './AITools.css';

/**
 * AITools Component
 * Displays AI-powered features: Quiz and Chat
 * Opens modals for each tool
 */
const AITools = ({ pathId }) => {
  const [showQuiz, setShowQuiz] = useState(false);
  const [showChat, setShowChat] = useState(false);

  return (
    <>
      <section className="ai-tools">
        <h2 className="section-title">
          <span className="title-icon">🤖</span>
          AI Powered Tools
        </h2>
        
        <div className="tools-grid">
          {/* AI Quiz Tool */}
          <div className="tool-card quiz-card">
            <div className="tool-icon">🎯</div>
            <h3 className="tool-title">AI Quiz</h3>
            <p className="tool-description">
              Test your knowledge with AI-generated questions tailored to your learning path
            </p>
            <button 
              className="btn btn-primary"
              onClick={() => setShowQuiz(true)}
              aria-label="Start AI Quiz"
            >
              Start Quiz
            </button>
          </div>

          {/* Chat with Sahayak Tool */}
          <div className="tool-card chat-card">
            <div className="tool-icon">💬</div>
            <h3 className="tool-title">Chat with Sahayak</h3>
            <p className="tool-description">
              Ask questions and get instant answers about the Constitution from our AI assistant
            </p>
            <button 
              className="btn btn-primary"
              onClick={() => setShowChat(true)}
              aria-label="Chat with Sahayak"
            >
              Start Chat
            </button>
          </div>
        </div>
      </section>

      {/* AI Quiz Modal */}
      {showQuiz && (
        <AIQuiz 
          pathId={pathId}
          onClose={() => setShowQuiz(false)}
        />
      )}

      {/* Chat Sahayak Modal */}
      {showChat && (
        <ChatSahayak 
          pathId={pathId}
          onClose={() => setShowChat(false)}
        />
      )}
    </>
  );
};

export default AITools;
