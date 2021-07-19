import React from 'react';
import "./APIButton.css";

function APIButton(props) {
    return (
        <div className="card apiref-button" onClick={function() {window.location = props.color;}}>
            <div className="apiref-button-content">
                <h3 className="apiref-name">{props.name}</h3>
                <hr className="apiref-button-hr" align="left" style={{ borderColor: props.color }}/>
            </div>
        </div>
    )
}

export default APIButton
