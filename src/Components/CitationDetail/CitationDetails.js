import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import Boutton from '../bouton/Boutton';
import { Link } from 'react-router-dom';

import './CitationDetails.css'

function AuteurBio() {
  const { id } = useParams();
  const [citations, setCitations] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('http://127.0.0.1:8000/api/citations');
        if (response.status === 200) {
          const fetchedCitations = response.data;
          const result = fetchedCitations.filter(citation => citation && citation.id === Number(id));
          setCitations(result);
        }
      } catch (error) {
        console.error('Error fetching citation details:', error);
      }
    };

    fetchData();
  }, [id]);

  return (
    <div >
      
      {citations.map(citation => (
        <div key={citation.id} className='citationDetails'>
          <Boutton
        name="Liste des citations"
        color="black"
        link="/"
      />
          <p className='citationD'>
            {citation.citation}
          </p>
          <p className='explicationE'>
              {citation.Explication}
          </p>
          <p className='auteurA'>
          <Link to={`/auteurs/${citation.auteur.id}`}>{citation.auteur && citation.auteur.Auteur}</Link>
          </p>
        </div>
      ))}
    </div>
  );
}

export default AuteurBio;
