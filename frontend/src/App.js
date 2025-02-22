// frontend/src/App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Editor from './pages/Editor';

const App = () => {
  return (
    <Router>
      <nav style={{ padding: '1rem' }}>
        <Link to="/">Home</Link>
        <Link to="/editor" style={{ marginLeft: '1rem' }}>Editor</Link>
      </nav>
      <Routes>
        <Route path="/editor" element={<Editor />} />
        <Route path="/" element={<div><h1>Welcome to PyNodeAI</h1></div>} />
      </Routes>
    </Router>
  );
};

export default App;
