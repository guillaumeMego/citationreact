import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import Boutton from '../bouton/Boutton';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const CitationDetails = styled.div`
  width: 100%;
  height: 100%;
  border: 1px solid #ccc;
  box-shadow: 0 2px 3px #ccc;

  margin: 10px;
  padding: 10px;
  background-color: #fff;
  border-radius: 5px;
`;

const CitationStyle = styled.p`
width: 80%;
text-align: center;
font-size: 3rem;
font-weight: 100;
margin: 40px auto;
font-style: italic;
`;

const ExplicationStyle = styled.p`
    width: 80%;
    text-align: center;
    font-size: 1.5rem;
    font-weight: 100;
    margin: 40px auto;
    font-style: italic;
`;

const AuteurStyle = styled.div`
    width: 80%;
    text-align: center;
    font-size: 2.5rem;
    text-transform: uppercase;
    font-weight: 100;
    margin: 60px auto;

    a {
      text-decoration: none;
      color: #3E5341;
      font-size: 3rem;
      font-weight: 400;
      text-transform: uppercase;
      letter-spacing: 1px;
    }
    a:hover {
      color: #729a78;   
    }
`;

function AuteurBio() {
  const { id } = useParams();
  const [citations, setCitations] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('https://guillaume.lesacteursduweb.fr/api/citations');
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
        <CitationDetails key={citation.id}>
          <Boutton
            name="Liste des citations"
            link="/"
          />
          <CitationStyle>
            {citation.citation}
          </CitationStyle>
          <ExplicationStyle>
            {citation.Explication}
          </ExplicationStyle>
          <AuteurStyle>
            <Link to={`/auteurs/${citation.auteur.id}`}>{citation.auteur && citation.auteur.Auteur}</Link>
          </AuteurStyle>
        </CitationDetails>
      ))}
    </div>
  );
}

export default AuteurBio;
