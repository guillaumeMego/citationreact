
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import ReactDOM from 'react-dom';

import CitationList from '../CitationList/CitationList';
import AuteurBio from '../AuteurBio/AuteurBio';
import CitationDetails from '../CitationDetail/CitationDetails';

import './App.module.css';

const h1Style = {
  fontSize: '50px',
  textAlign: 'center',
  textTransform: 'uppercase',
  fontFamily: 'sans-serif',
  fontWeight: 'bold',
  letterSpacing: '2px',
  margin: '0',
  padding: '20px 0',
  borderBottom: '1px solid #ccc',
  color: '#333',
};


function App() {
  return (
    <div className='app'>
      <h1 style={h1Style}>Citations</h1>
      <Router>
        <Routes>
          <Route path="/" element={<CitationList />} />
          <Route path="/auteurs/:id" element={<AuteurBio />} />
          <Route path="/citations/:id" element={<CitationDetails />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
