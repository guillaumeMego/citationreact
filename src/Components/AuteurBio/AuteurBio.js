import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Boutton from '../bouton/Boutton';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const AuteurStyle = styled.div`
  width: 100%;
  height: 100%;
  border: 1px solid #ccc;
  box-shadow: 0 2px 3px #ccc;
  margin: 10px;
  padding: 10px;
  background-color: #fff;
  border-radius: 5px;
`;

const AuteurTitle = styled.h2`
  width: 80%;
  text-align: center;
  font-size: 3rem;
  text-transform: uppercase;
  font-weight: 100;
  margin: 0 auto;
`;

const ExplicationStyle = styled.p`
    width: 80%;
    text-align: center;
    font-size: 1.5rem;
    font-weight: 100;
    margin: 30px auto;
    font-style: italic;
`;  

const TitleCitation = styled.h3`
  margin-left: 30px;
  font-size: 2.5rem;
  font-weight: 100;
  letter-spacing: 1px;  
`;

const CitationAuteur = styled.ul `
  width: 80%;
  font-size: 1.5rem;
  font-weight: 100;
  margin: 10px auto;

  a {
    text-decoration: none;
      color: #3E5341;
      font-size: 1.4rem;
      letter-spacing: 1px;
  }
  a:hover {
    color: #729a78;
  }
`;

function AuteurBio() {
  const { id } = useParams();
  const [auteur, setAuteur] = useState(null);
  const [citations, setCitations] = useState([]);

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await fetch(`https://guillaume.lesacteursduweb.fr/api/citations`);
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
    return <div>Chargement...</div>;
  }

  return (
    <AuteurStyle>
      <Boutton
        name="Liste des citations"
        link="/"
      />
      <AuteurTitle>{auteur.Auteur}</AuteurTitle>
      
      <ExplicationStyle>{auteur.Bio}</ExplicationStyle>

      <TitleCitation>Autres citations :</TitleCitation>
      {citations.map(citation => (
        <div key={citation.id}>
          <CitationAuteur>
            <li>
              <Link to={`/citations/${citation.id}`}>{citation.citation}</Link>
            </li>
          </CitationAuteur>
        </div>
      ))}
    </AuteurStyle>
  );
}

export default AuteurBio;
