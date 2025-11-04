import React, { useState, useRef, useEffect } from 'react';
import './ChatSahayak.css';

/**
 * ChatSahayak Component
 * Modal with AI chat assistant for Constitution-related queries
 * Mock implementation with predefined responses
 */
const ChatSahayak = ({ pathId, onClose }) => {
  const [messages, setMessages] = useState([
    {
      type: 'bot',
      text: 'Namaste! 🙏 I am Sahayak, your AI assistant for learning about the Indian Constitution. How can I help you today?',
      time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
    }
  ]);
  const [inputText, setInputText] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  // Mock AI responses based on keywords
  const getResponse = (userMessage) => {
    const msg = userMessage.toLowerCase();
    
    if (msg.includes('fundamental right')) {
      return 'The Indian Constitution guarantees six Fundamental Rights: Right to Equality, Right to Freedom, Right against Exploitation, Right to Freedom of Religion, Cultural and Educational Rights, and Right to Constitutional Remedies. Which one would you like to know more about?';
    } else if (msg.includes('preamble')) {
      return 'The Preamble is the introductory statement of the Constitution that declares India as a SOVEREIGN, SOCIALIST, SECULAR, DEMOCRATIC REPUBLIC. It also outlines the objectives: JUSTICE, LIBERTY, EQUALITY, and FRATERNITY.';
    } else if (msg.includes('ambedkar')) {
      return 'Dr. B.R. Ambedkar is known as the "Father of the Indian Constitution." He was the Chairman of the Drafting Committee and played a crucial role in framing the Constitution of India.';
    } else if (msg.includes('vote') || msg.includes('voting')) {
      return 'The voting age in India is 18 years. This was reduced from 21 years by the 61st Amendment Act in 1989. Every citizen above 18 has the right to vote in elections.';
    } else if (msg.includes('article 21')) {
      return 'Article 21 is one of the most important fundamental rights. It states that "No person shall be deprived of his life or personal liberty except according to procedure established by law." This includes the Right to Life with dignity.';
    } else if (msg.includes('hello') || msg.includes('hi') || msg.includes('hey')) {
      return 'Hello! I\'m here to help you learn about the Indian Constitution. Feel free to ask me anything!';
    } else if (msg.includes('thank')) {
      return 'You\'re welcome! I\'m always here to help you understand the Constitution better. Keep learning! 📚';
    } else {
      return 'That\'s an interesting question! The Indian Constitution is vast and covers many topics. Could you be more specific? You can ask me about Fundamental Rights, Preamble, amendments, important articles, or any constitutional concept.';
    }
  };

  const handleSendMessage = () => {
    if (inputText.trim() === '') return;

    // Add user message
    const userMessage = {
      type: 'user',
      text: inputText,
      time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
    };
    setMessages([...messages, userMessage]);
    setInputText('');
    setIsTyping(true);

    // Simulate AI response delay
    setTimeout(() => {
      const botResponse = {
        type: 'bot',
        text: getResponse(inputText),
        time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
      };
      setMessages(prev => [...prev, botResponse]);
      setIsTyping(false);
    }, 1000 + Math.random() * 1000);
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };

  const quickQuestions = [
    'What are Fundamental Rights?',
    'Explain the Preamble',
    'Who is Dr. Ambedkar?',
    'What is Article 21?'
  ];

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content chat-modal" onClick={(e) => e.stopPropagation()}>
        {/* Modal Header */}
        <div className="modal-header chat-header">
          <div className="chat-avatar">🤖</div>
          <div className="chat-info">
            <h2 className="modal-title">Sahayak</h2>
            <p className="chat-status">
              <span className="status-dot"></span>
              Online
            </p>
          </div>
          <button 
            className="btn-close"
            onClick={onClose}
            aria-label="Close chat"
          >
            ✕
          </button>
        </div>

        {/* Modal Body */}
        <div className="modal-body chat-body">
          {/* Messages Container */}
          <div className="messages-container">
            {messages.map((message, index) => (
              <div 
                key={index}
                className={`message ${message.type === 'user' ? 'message-user' : 'message-bot'}`}
              >
                {message.type === 'bot' && (
                  <div className="message-avatar">🤖</div>
                )}
                <div className="message-content">
                  <p className="message-text">{message.text}</p>
                  <span className="message-time">{message.time}</span>
                </div>
              </div>
            ))}
            
            {isTyping && (
              <div className="message message-bot">
                <div className="message-avatar">🤖</div>
                <div className="message-content typing-indicator">
                  <span></span>
                  <span></span>
                  <span></span>
                </div>
              </div>
            )}
            
            <div ref={messagesEndRef} />
          </div>

          {/* Quick Questions */}
          {messages.length === 1 && (
            <div className="quick-questions">
              <p className="quick-title">Quick questions:</p>
              <div className="quick-buttons">
                {quickQuestions.map((question, index) => (
                  <button
                    key={index}
                    className="quick-btn"
                    onClick={() => setInputText(question)}
                  >
                    {question}
                  </button>
                ))}
              </div>
            </div>
          )}
        </div>

        {/* Modal Footer */}
        <div className="modal-footer chat-footer">
          <div className="chat-input-container">
            <input
              type="text"
              className="chat-input"
              placeholder="Ask me anything about the Constitution..."
              value={inputText}
              onChange={(e) => setInputText(e.target.value)}
              onKeyPress={handleKeyPress}
              aria-label="Type your message"
            />
            <button 
              className="btn-send"
              onClick={handleSendMessage}
              disabled={inputText.trim() === ''}
              aria-label="Send message"
            >
              ➤
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChatSahayak;
