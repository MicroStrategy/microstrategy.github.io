import React from 'react'
import './ExpertButton.css'

function ExpertButton(props) {
    return (
        <button className="expert-button" onClick={function() {window.location = props.link;}}>
            <img src={props.src} alt={props.name} id="expert-img" />
            <h2 class="expert-name">{props.name}</h2>
            <h3 class="expert-desc">{props.desc}</h3>
        </button>
    )
}

export default ExpertButton
