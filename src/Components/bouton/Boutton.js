import React from 'react';
import './Boutton.css';


function Boutton(props) {
  

    const styleBoutton = {
        backgroundColor: props.color,
        color: 'white',
        padding: '10px',
        border: 'none',
        borderRadius: '5px',
        textDecoration: 'none',
        cursor: 'pointer',
        fontSize: '20px',
        margin: '50px',

    }

    return (
        <div className="Boutton">
            <a href={props.link} style={styleBoutton} onClick={props.onClick}>{props.name}</a>
        </div>
    );
}

export default Boutton;
