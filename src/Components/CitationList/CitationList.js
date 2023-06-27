import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

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
        <div>
            <h1>Citations:</h1>
            {citations.map((citation) => (
                <div key={citation.id}>
                    <p>
                        <b>Citation : </b>
                        {citation.citation}
                    </p>
                    <p>
                        <b>Explication : </b>
                        {citation.Explication}
                    </p>
                    {citation.auteur && citation.auteur.id !== null ? (
                        <p>
                            <b>Auteur : </b>
                            <Link to={`/auteurs/${citation.auteur.id}`}>{citation.auteur.Auteur}</Link>
                        </p>
                    ) : (
                        <p>Auteur inconnu</p>
                    )}
                    <p>
                        <Link to={`/citations/${citation.id}`}>En savoir plus sur la citation</Link>
                    </p>
                </div>
            ))}
        </div>
    );
}

export default CitationList;
