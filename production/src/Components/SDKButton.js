import React from "react";
import "./SDKButton.css";

function SDKButton(props) {
    return (
        <button className="sdk-button" onClick={function() {window.location = props.link;}}>
            <h2 class="sdk-name">{props.name}</h2>
            <hr style={{ borderColor: props.color }}></hr>
            <p class="sdk-desc">{props.desc}</p>
        </button>
    );
}

export default SDKButton;