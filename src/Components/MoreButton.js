import React from 'react'
import './MoreButton.css'

function MoreButton(props) {
    return (
        <button className="card" id="more" onClick={function() {window.location = props.link}}>
            {props.name} &#8594;
        </button>
    )
}

export default MoreButton
