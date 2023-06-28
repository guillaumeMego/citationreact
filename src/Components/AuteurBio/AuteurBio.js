import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Boutton from '../bouton/Boutton';
import { Link } from 'react-router-dom';



function AuteurBio() {
  const { id } = useParams();
  const [auteur, setAuteur] = useState(null);
  const [citations, setCitations] = useState([]);

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await fetch(`http://127.0.0.1:8000/api/citations`);
        const data = await response.json();
        const filteredCitations = data.filter(citation => citation.auteur && citation.auteur.id === Number(id));
        setCitations(filteredCitations);

        const auteurData = filteredCitations.length > 0 ? filteredCitations[0].auteur : null;
        setAuteur(auteurData);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    }

    fetchData();
  }, [id]);

  if (!auteur) {
    return <div>Loading...</div>;
  }

  return (
    <div className='container'>
      <Boutton
        name="Liste des citations"
        color="black"
        link="/"
      />
      <h2>{auteur.Auteur}</h2>
      
      <p>{auteur.Bio}</p>

      <h3>Citations de l'auteur :</h3>
      {citations.map(citation => (
        <div key={citation.id}>
          <ul>
          <Link to={`/citations/${citation.id}`}>{citation.citation}</Link>
          </ul>
        </div>
      ))}
    </div>
  );
}

export default AuteurBio;
