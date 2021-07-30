import React from 'react';
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
                    <img src='./Images/ms-logo.png' alt="MicroStrategy Logo" id="logo-img" />
                </a>
                <form onSubmit={this.handleSubmit} id="search">
                    <input type='text' placeholder="Search MicroStrategy Community" value={this.state.value} onChange={this.handleChange} id="search-bar" />
                </form>
                <button className="btn-talk-to-expert" onClick={function () { window.location = "https://www.microstrategy.com/en/support?now=expert" }} id="talk-to-expert">
                    Talk to an expert
                </button>
            </div>
        );
    }
}

export default Navbar
