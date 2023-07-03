import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { styled } from 'styled-components';


const CardStyle = styled.div`
    margin: 10px;
    padding: 10px;
    border: 1px solid #ccc;
    box- shadow: 0 2px 3px #ccc;
    text-align: center;
    width: 300px;
    height: 300px;
    display: inline - block;
    vertical-align: top;
    background-color: #fff;
    border-radius: 5px;
    overflow: hidden;
    position: relative;
    transition: all 0.3s ease - out;
    cursor: pointer;

    &:hover {
        transform: scale(1.05);
        box-shadow: 0 4px 6px #ccc;

    }
`;

const AllCardsStyle = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    align-content: center;
    margin-top: 40px;
`;

const AuteurStyle = styled.div`

    position: absolute;
    width: 100%;
    bottom: 50px;
    left: 50%;
    transform: translateX(-50%);

    a {
        text-decoration: none;
        color: #3E5341;
        font-size: 1.1rem;
        font-weight: bold;
        text-transform: uppercase;
        letter-spacing: 1px;
    }

    a:hover {
        color: #729a78;
    }

`;

const Citation = styled.p`
margin-top: 70px;
font-style: italic;
font-size: 1.5rem;
font-weight: 100;

&:hover {
color: #729a78;
}

&::before {
content: '«';
font-size: 3rem;
position: absolute;
top: 5px;
left: 10px;
}

&::after {
content: '»';
font-size: 3rem;
position: absolute;
bottom: 10px;
right: 10px;
}
`;

const StyleLink = styled(Link)`
text-decoration: none;
color: #3E5341;
`;

function CitationList() {
    const [citations, setCitations] = useState([]);

    useEffect(() => {
        async function fetchData() {
            try {
                const response = await axios.get('http://127.0.0.1:8000/api/citations');
                if (response.status === 200) {
                    const fetchedCitations = response.data;
                    setCitations(fetchedCitations);
                }
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        }

        fetchData();
    }, []);

    return (
        <AllCardsStyle>
            {citations.map((citation) => (
                    <CardStyle key={citation.id}>
                        <StyleLink to={`/citations/${citation.id}`} >
                        <Citation>
                            {citation.citation}
                        </Citation>
                        </StyleLink>
                        {citation.auteur && citation.auteur.id !== null ? (
                            <AuteurStyle>
                                <Link to={`/auteurs/${citation.auteur.id}`}>{citation.auteur.Auteur}</Link>
                            </AuteurStyle>
                        ) : (
                            <p>Auteur inconnu</p>
                        )}
                    </CardStyle>
            ))}
        </AllCardsStyle>
    );
}

export default CitationList;
