import React from 'react';
import { styled } from 'styled-components';

const ButtonStyle = styled.button`
        border: 1px solid #ccc;
        box-shadow: 0 3px 3px #ccc;
        text-align: center;
        width: fit-content;
        padding: 10px;
        border-radius: 5px;
        cursor: pointer;
        background-color:#729a78 ;
        &:hover{
            box-shadow: 0 3px 15px #ccc;
            color: #fff;
        }
    `;

    const AStyle = styled.a`
        text-decoration: none;
        color: #fff;
        font-size: 1.4rem;
        letter-spacing: 1px;
    `;

function Boutton(props) {

    return (
        <ButtonStyle>
            <AStyle href={props.link} onClick={props.onClick}>{props.name}</AStyle>
        </ButtonStyle>
    );
}

export default Boutton;
