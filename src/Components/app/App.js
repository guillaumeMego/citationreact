
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import CitationList from '../CitationList/CitationList';
import AuteurBio from '../AuteurBio/AuteurBio';
import CitationDetails from '../CitationDetail/CitationDetails';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<CitationList />} />
        <Route path="/auteurs/:id" element={<AuteurBio />} />
        <Route path="/citations/:id" element={<CitationDetails />} />
      </Routes>
    </Router>
  );
}

export default App;
