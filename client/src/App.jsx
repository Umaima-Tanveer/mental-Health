import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LoginPage from './pages/LoginPage';
import ConsentPage from './pages/ConsentPage';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/consent" element={<ConsentPage />} />
      </Routes>
    </Router>
  );
}

export default App;
