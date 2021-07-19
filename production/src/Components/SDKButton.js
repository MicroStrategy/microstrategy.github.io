import React from "react";
import "./SDKButton.css";

function SDKButton(props) {
    return (
        <div className="card sdk-button">
            <div className="sdk-button-content" onClick={() => { window.location = props.link }}>
                <h3 className="sdk-name">{props.name}</h3>
                <hr className="sdk-button-hr" align="left" style={{ borderColor: props.color }}/>
                <p className="sdk-desc">{props.desc}</p>
            </div>
        </div>
    );
}

export default SDKButton;