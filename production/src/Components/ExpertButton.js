import React from 'react'
import './ExpertButton.css'

function ExpertButton(props) {
    return (
        <div className="card expert-button" onClick={function() {window.location = props.link;}}>
            <div className="expert-button-content">
                <img src={props.src} alt={props.name} id="expert-img" />
                <h2 class="expert-name">{props.name}</h2>
                <h4 class="expert-desc">{props.desc}</h4>
            </div>
        </div>

    )
}

export default ExpertButton
