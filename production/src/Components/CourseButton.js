import React from 'react'
import './CourseButton.css'

function CourseButton(props) {
    return (
        <button className="course-button" onClick={function() {window.location = props.link;}}>
        <img src={props.src} alt={props.name} id="course-img"/>
        <h2 class="course-name">{props.name}</h2>
        <p class="course-desc">{props.desc}</p>

        </button>
    );
}

export default CourseButton
