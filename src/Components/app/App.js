import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import styled from 'styled-components';

import CitationList from '../CitationList/CitationList';
import AuteurBio from '../AuteurBio/AuteurBio';
import CitationDetails from '../CitationDetail/CitationDetails';
import './App.module.css';

function App() {


  const h1Style = {
    fontSize: '100px',
    textAlign: 'center',
    textTransform: 'uppercase',
    fontWeight: 'bold',
    letterSpacing: '2px',
    margin: '0',
    padding: '15px 0',
    borderBottom: '1px solid #ccc',
  };

  return (
    <div className='app'>

      <h1 style={h1Style}>" Citations "</h1>
      <div className="banniere"></div>
      <div className="container">
      <div>
       
        </div>
        <Router>
          <Routes>
            <Route path="/" element={<CitationList />} />
            <Route path="/auteurs/:id" element={<AuteurBio />} />
            <Route path="/citations/:id" element={<CitationDetails />} />
          </Routes>
        </Router>
      </div>
    </div>
  );
}

export default App;
