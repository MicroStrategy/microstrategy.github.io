import React from 'react'
import './MoreButton.css'

function MoreButton(props) {
    return (
        <button className="card" id="more" onClick={function() {window.location = props.link}}>
            {props.name}
        </button>
    )
}

export default MoreButton
