import React, { useState, useEffect } from 'react';
import axios from 'axios';

function Api() {
    const [citations, setCitations] = useState([]);
    const [selectedAuteurId, setSelectedAuteurId] = useState(null);
    const [selectedAuteurCitations, setSelectedAuteurCitations] = useState([]);

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

    const handleAuteurClick = (auteur) => {
        if (auteur && auteur.id !== null) {
            const auteurCitations = citations.filter((citation) => citation.auteur && citation.auteur.id === auteur.id);
            setSelectedAuteurId(auteur.id);
            setSelectedAuteurCitations(auteurCitations);
        }
    };

    return (
        <div className="Api">
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
                            <a href="#" onClick={() => handleAuteurClick(citation.auteur)}>
                                {citation.auteur.Auteur}
                            </a>
                        </p>
                    ) : (
                        <p>Auteur inconnu</p>
                    )}
                </div>
            ))}
            {selectedAuteurId && (
                <div>
                    <h2>Citations de l'auteur :</h2>
                    <ul>
                        {selectedAuteurCitations.map((citation) => (
                            <li key={citation.id}>{citation.citation}</li>
                        ))}
                    </ul>
                </div>
            )}
        </div>
    );
}

export default Api;
