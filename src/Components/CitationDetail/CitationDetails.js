import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import axios from 'axios';

function CitationDetails() {
  const [citation, setCitation] = useState(null);
  const { id } = useParams();

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await axios.get(`http://127.0.0.1:8000/api/citations/${id}`);
        if (response.status === 200) {
          const fetchedCitation = response.data;
          setCitation(fetchedCitation);
        }
      } catch (error) {
        console.error('Error fetching citation details:', error);
      }
    }

    fetchData();
  }, [id]);

  return (
    <div>
      {citation && (
        <div>
          <h2>Détails de la citation</h2>
          <p>
            <b>Citation : </b>
            {citation.citation}
          </p>
          <p>
            <b>Explication : </b>
            {citation.Explication}
          </p>
          <p>
            <b>Auteur : </b>
            <Link to={`/auteurs/${citation.auteur.id}`}>{citation.auteur.Auteur}</Link>
          </p>
          <p>
            <Link to="/">Revenir à la liste des citations</Link>
          </p>
        </div>
      )}
      {!citation && <p>Chargement des détails de la citation...</p>}
    </div>
  );
}

export default CitationDetails;
