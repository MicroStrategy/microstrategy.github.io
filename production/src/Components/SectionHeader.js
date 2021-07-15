import React from 'react';
import './SectionHeader.css'

function SectionHeader(props) {
    return (
        <div>
            <h1>{props.name}</h1>
            <h3>{props.desc}</h3>
        </div>
    )
}

export default SectionHeader
