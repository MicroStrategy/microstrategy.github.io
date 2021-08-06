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
                <button className="email-button"><a href={"mailto: " + this.props.email + "?subject=SDK Help"} className="modal-email">Send Email</a></button>
            );
        }
    }

    linkedIn() {
        if (this.props.linkedin) {
            return (
                <a href={this.props.linkedin} className="modal-linked">Connect via LinkedIn!</a>
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
