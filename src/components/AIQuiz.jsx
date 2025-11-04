import React, { useState } from 'react';
import './AIQuiz.css';

/**
 * AIQuiz Component
 * Modal displaying an AI-powered quiz
 * Mock implementation with sample questions
 */
const AIQuiz = ({ pathId, onClose }) => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [score, setScore] = useState(0);
  const [showResult, setShowResult] = useState(false);

  // Sample quiz questions (can be expanded based on pathId)
  const questions = [
    {
      question: "How many Fundamental Rights are guaranteed by the Indian Constitution?",
      options: ["Five", "Six", "Seven", "Eight"],
      correct: 1
    },
    {
      question: "Who is known as the 'Father of the Indian Constitution'?",
      options: ["Jawaharlal Nehru", "Mahatma Gandhi", "Dr. B.R. Ambedkar", "Sardar Patel"],
      correct: 2
    },
    {
      question: "When did the Constitution of India come into force?",
      options: ["August 15, 1947", "January 26, 1950", "November 26, 1949", "December 31, 1949"],
      correct: 1
    },
    {
      question: "What is the minimum voting age in India?",
      options: ["16 years", "18 years", "21 years", "25 years"],
      correct: 1
    },
    {
      question: "Which Article of the Constitution deals with the Right to Education?",
      options: ["Article 19", "Article 21", "Article 21A", "Article 32"],
      correct: 2
    }
  ];

  const handleAnswerSelect = (index) => {
    setSelectedAnswer(index);
  };

  const handleNextQuestion = () => {
    if (selectedAnswer === questions[currentQuestion].correct) {
      setScore(score + 1);
    }

    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
      setSelectedAnswer(null);
    } else {
      setShowResult(true);
    }
  };

  const handleRestart = () => {
    setCurrentQuestion(0);
    setSelectedAnswer(null);
    setScore(0);
    setShowResult(false);
  };

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content quiz-modal" onClick={(e) => e.stopPropagation()}>
        {/* Modal Header */}
        <div className="modal-header">
          <h2 className="modal-title">
            <span className="modal-icon">🎯</span>
            AI Quiz
          </h2>
          <button 
            className="btn-close"
            onClick={onClose}
            aria-label="Close quiz"
          >
            ✕
          </button>
        </div>

        {/* Modal Body */}
        <div className="modal-body">
          {!showResult ? (
            <>
              {/* Progress Bar */}
              <div className="quiz-progress">
                <div className="progress-bar">
                  <div 
                    className="progress-fill"
                    style={{ width: `${((currentQuestion + 1) / questions.length) * 100}%` }}
                  ></div>
                </div>
                <p className="progress-text">
                  Question {currentQuestion + 1} of {questions.length}
                </p>
              </div>

              {/* Question */}
              <div className="quiz-question">
                <h3>{questions[currentQuestion].question}</h3>
              </div>

              {/* Options */}
              <div className="quiz-options">
                {questions[currentQuestion].options.map((option, index) => (
                  <button
                    key={index}
                    className={`option-btn ${selectedAnswer === index ? 'selected' : ''}`}
                    onClick={() => handleAnswerSelect(index)}
                  >
                    <span className="option-letter">
                      {String.fromCharCode(65 + index)}
                    </span>
                    <span className="option-text">{option}</span>
                  </button>
                ))}
              </div>

              {/* Next Button */}
              <button
                className="btn btn-primary btn-full"
                onClick={handleNextQuestion}
                disabled={selectedAnswer === null}
              >
                {currentQuestion < questions.length - 1 ? 'Next Question' : 'Show Results'}
              </button>
            </>
          ) : (
            /* Results */
            <div className="quiz-results">
              <div className="result-icon">
                {score >= questions.length * 0.7 ? '🎉' : score >= questions.length * 0.5 ? '👍' : '📚'}
              </div>
              <h3 className="result-title">Quiz Complete!</h3>
              <div className="result-score">
                <span className="score-value">{score}</span>
                <span className="score-total">/ {questions.length}</span>
              </div>
              <p className="result-message">
                {score >= questions.length * 0.7 
                  ? 'Excellent! You have a great understanding of the Constitution!' 
                  : score >= questions.length * 0.5 
                  ? 'Good job! Keep learning to improve your knowledge.' 
                  : 'Keep practicing! Review the topics to strengthen your understanding.'}
              </p>
              <div className="result-actions">
                <button 
                  className="btn btn-primary"
                  onClick={handleRestart}
                >
                  Retry Quiz
                </button>
                <button 
                  className="btn btn-secondary"
                  onClick={onClose}
                >
                  Close
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default AIQuiz;
