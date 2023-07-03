import React from 'react';
import './Boutton.css';


function Boutton(props) {
  



    return (
        <div className="button">
            <a href={props.link} onClick={props.onClick}>{props.name}</a>
        </div>
    );
}

export default Boutton;
