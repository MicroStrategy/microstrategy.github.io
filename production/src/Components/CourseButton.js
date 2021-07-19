import React from 'react'
import './CourseButton.css'

function CourseButton(props) {
    return (
        <div className="card course-button" onClick={function() {window.location = props.link;}}>
            <img src={props.src} alt={props.name} id="course-img"/>
            <h3 className="course-name">{props.name}</h3>
            <p className="course-desc">{props.desc}</p>
        </div>
    );
}

export default CourseButton
