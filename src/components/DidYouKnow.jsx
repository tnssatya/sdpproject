import React, { useState, useEffect } from 'react';
import factsData from '../data/facts.json';
import './DidYouKnow.css';

/**
 * DidYouKnow Component
 * Displays rotating facts about the Indian Constitution
 * Facts change every 5 seconds
 */
const DidYouKnow = () => {
  const [currentFactIndex, setCurrentFactIndex] = useState(0);
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setIsVisible(false);
      
      setTimeout(() => {
        setCurrentFactIndex((prevIndex) => 
          (prevIndex + 1) % factsData.length
        );
        setIsVisible(true);
      }, 300);
    }, 8000); // Change fact every 8 seconds

    return () => clearInterval(interval);
  }, []);

  const handleNext = () => {
    setIsVisible(false);
    setTimeout(() => {
      setCurrentFactIndex((prevIndex) => 
        (prevIndex + 1) % factsData.length
      );
      setIsVisible(true);
    }, 300);
  };

  const handlePrevious = () => {
    setIsVisible(false);
    setTimeout(() => {
      setCurrentFactIndex((prevIndex) => 
        prevIndex === 0 ? factsData.length - 1 : prevIndex - 1
      );
      setIsVisible(true);
    }, 300);
  };

  return (
    <section className="did-you-know">
      <h2 className="section-title">
        <span className="title-icon">💡</span>
        Did You Know?
      </h2>
      
      <div className="fact-container">
        <button 
          className="fact-nav fact-nav-prev"
          onClick={handlePrevious}
          aria-label="Previous fact"
        >
          ←
        </button>

        <div className={`fact-box ${isVisible ? 'visible' : 'hidden'}`}>
          <div className="fact-icon">📖</div>
          <p className="fact-text">{factsData[currentFactIndex]}</p>
          <div className="fact-indicator">
            <span className="indicator-text">
              {currentFactIndex + 1} of {factsData.length}
            </span>
          </div>
        </div>

        <button 
          className="fact-nav fact-nav-next"
          onClick={handleNext}
          aria-label="Next fact"
        >
          →
        </button>
      </div>

      <div className="fact-dots">
        {factsData.map((_, index) => (
          <button
            key={index}
            className={`fact-dot ${index === currentFactIndex ? 'active' : ''}`}
            onClick={() => {
              setIsVisible(false);
              setTimeout(() => {
                setCurrentFactIndex(index);
                setIsVisible(true);
              }, 300);
            }}
            aria-label={`Go to fact ${index + 1}`}
          />
        ))}
      </div>
    </section>
  );
};

export default DidYouKnow;
