import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './components/HomePage';
import LoginPage from './components/LoginPage';
import Dashboard from './components/Dashboard';
import LeadInsights from './components/LeadInsights';
import BusinessPlanGenerator from './components/BusinessPlanGenerator';
import PerformanceTracking from './components/PerformanceTracking';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gray-100">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/lead-insights" element={<LeadInsights />} />
          <Route path="/business-plan" element={<BusinessPlanGenerator />} />
          <Route path="/performance" element={<PerformanceTracking />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;