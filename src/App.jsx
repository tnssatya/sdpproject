import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LandingPage from './pages/LandingPage';
import UserPathSelection from './pages/UserPathSelection';
import UserPathSection from './pages/UserPathSection';
import Dashboard from './pages/Dashboard';
import TopicDetail from './components/TopicDetail';
import './App.css';

/**
 * Main App Component
 * Sets up routing for all pages and components
 */
function App() {
  return (
    <Router>
      <div className="app">
        <Routes>
          {/* Landing Page */}
          <Route path="/" element={<LandingPage />} />
          
          {/* User Path Selection */}
          <Route path="/choose-path" element={<UserPathSelection />} />
          
          {/* Dashboard */}
          <Route path="/dashboard" element={<Dashboard />} />
          
          {/* User Path Section */}
          <Route path="/path/:pathId" element={<UserPathSection />} />
          
          {/* Topic Detail Page */}
          <Route path="/path/:pathId/topic/:topicId" element={<TopicDetail />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
