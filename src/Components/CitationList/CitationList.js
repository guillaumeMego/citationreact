import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

import './CitationList.css';


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
            <div className="allcards">
            {citations.map((citation) => (
                <Link to={`/citations/${citation.id}`} className='cards'>
                <div key={citation.id} className='card'>
                    <p className='citation'>
                        {citation.citation}
                    </p>
                    {/* <p className='plus'>
                        <Link to={`/citations/${citation.id}`}>En savoir plus sur la citation</Link>
                    </p> */}
                    {citation.auteur && citation.auteur.id !== null ? (
                        <p className='auteur'>
                            <Link to={`/auteurs/${citation.auteur.id}`}>{citation.auteur.Auteur}</Link>
                        </p>
                    ) : (
                        <p>Auteur inconnu</p>
                    )}
                </div>
                </Link>
            ))}
            </div>
        </div>
    );
}

export default CitationList;
