import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

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
    <div>
      <h2>Citations de l'auteur :</h2>
      {citations.map(citation => (
        <div key={citation.id}>
          <p>
            <b>Citation :</b> {citation.citation}
          </p>
          <p>
            <b>Explication :</b> {citation.Explication}
          </p>
          <p>
            <b>Auteur :</b> {citation.auteur && citation.auteur.Auteur}
          </p>
        </div>
      ))}
    </div>
  );
}

export default AuteurBio;
