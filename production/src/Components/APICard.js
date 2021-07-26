import React from 'react';
import "./APICard.css";

function APICard(props) {
    return (
        <div className="card apiref-button" onClick={function() {window.location = props.link;}}>
            <div className="apiref-button-content">
                <h2 className="apiref-name">{props.name}</h2>
                <hr className="apiref-button-hr" align="left" style={{ borderColor: props.color }}/>
            </div>
        </div>
    )
}

export default APICard
