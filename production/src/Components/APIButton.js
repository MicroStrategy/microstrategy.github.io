import React from 'react';
import "./APIButton.css";

function APIButton(props) {
    return (
        <button className="apiref-button" onClick={function() {window.location = props.color;}}>
            <h2 class="apiref-name">{props.name}</h2>
            <hr style={{borderColor: props.color}}></hr>
        </button>
    )
}

export default APIButton
