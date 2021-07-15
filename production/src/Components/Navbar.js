import React, { useState } from 'react';
import './Navbar.css';

class Navbar extends React.Component {
    constructor(props) {
        super(props);
        this.state = { value: '' };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        this.setState({ value: event.target.value });
    }

    handleSubmit(event) {
        window.open("https://community.microstrategy.com/s/global-search/%40uri?language=en_US#q=" + this.state.value)
        event.preventDefault();
    }

    render() {
        return (
            <div className="navbar">
                <a href="https://www.microstrategy.com" id="logo">
                    <img src='./ms-logo.png' alt="MicroStrategy Logo" id="logo-img" />
                </a>
                <form onSubmit={this.handleSubmit} id="search">
                    <input type='text' placeholder="Search MicroStrategy Community" value={this.state.value} onChange={this.handleChange} id="search-bar" />
                    {/* <input type='submit' value="search" id="submit-button"/> */}
                </form>
                <button onClick={function () { window.location = "https://www.microstrategy.com/en/support?now=expert" }} id="talk-to-expert">
                    Talk to an expert
                </button>
            </div>
        );
    }
}

// function Navbar() {
//     return (
//             <div className="navbar">
//                 <div className="navbar-container">
//                     <a href="https://www.microstrategy.com">
//                         <img src="ms-logo.png" alt="MicroStrategy Logo" name="navbar-logo" />
//                     </a>
//                     <form id="search" target="__blank">
//                     </form>
//                     <button onClick={function() {window.location = "https://www.microstrategy.com/en/support?now=expert"}} className="button">
//                             Talk to an expert
//                         </button>
//                 </div>
//             </div>
//     )
// }

export default Navbar
