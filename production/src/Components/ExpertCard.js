import React from 'react'
import ReactModal from 'react-modal'
import './ExpertCard.css'

ReactModal.setAppElement('#root');

class ExpertCard extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            showModal: false
        };

        this.handleOpenModal = this.handleOpenModal.bind(this);
        this.handleCloseModal = this.handleCloseModal.bind(this);
    }

    handleOpenModal() {
        this.setState({ showModal: true });
    }

    handleCloseModal() {
        this.setState({ showModal: false });
    }

    email() {
        if (this.props.email) {
            return  (
                // OTHER VERSION - BUTTON WITH EMAIL UNDERNEATH
                // <div>
                //     <button className="red-button"><a href={"mailto: " + this.props.email + "?subject=SDK Help"} className="send-email">Send Email</a></button>
                //     <p className = "modal-email">{this.props.email}</p>
                // </div>

                <p className="modal-contact">Have a question about our products? Contact our expert: <a href={"mailto: " + this.props.email + "?subject=SDK Help"} className="modal-link red-text">{this.props.email}</a></p>
            );
        }
    }

    linkedIn() {
        if (this.props.linkedin) {
            return (
                <p className="modal-contact">Or, connect via <a href={this.props.linkedin} className="modal-link red-text">LinkedIn</a>!</p>
            );
        }
    }

    render() {
        return (
            <div>
                <div className="card expert-button" onClick={this.handleOpenModal}>
                    <div className="expert-button-content">
                        <img src={this.props.src} alt={this.props.name} className="expert-img" />
                        <h2 className="expert-name">{this.props.name}</h2>
                        <h4 className="expert-desc">{this.props.desc}</h4>
                    </div>
                </div>
                <ReactModal isOpen={this.state.showModal} contentLabel="Expert Information" className="modal" onRequestClose={this.handleCloseModal}>
                    <button onClick={this.handleCloseModal} id="close-modal">&times;</button>
                    <div className="modal-text">
                        <img src={this.props.src} alt={this.props.name} class="modal-img" />
                        <h2 className="modal-name">{this.props.name}</h2>
                        <h4 className="modal-desc">{this.props.desc}</h4>
                        <p className="modal-bio">{this.props.bio}</p>
                        {this.email()}
                        {this.linkedIn()}
                    </div>
                </ReactModal>
            </div>
        )
    }
}

export default ExpertCard
