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
                <p class="expert-email"><b>Email: </b> {this.props.email}</p>
            );
        }
    }

    linkedIn() {
        if (this.props.linkedin) {
            return (
                <p class="expert-linked"><b>LinkedIn: </b><a href={this.props.linkedin}>{this.props.linkedin}</a></p>
            );
        }
    }

    render() {
        return (
            <div>
                <div className="card expert-button" onClick={this.handleOpenModal}>
                    <div className="expert-button-content">
                        <img src={this.props.src} alt={this.props.name} class="expert-img" />
                        <h2 class="expert-name">{this.props.name}</h2>
                        <h4 class="expert-desc">{this.props.desc}</h4>
                    </div>
                </div>
                <ReactModal isOpen={this.state.showModal} contentLabel="Expert Information" className="modal" onRequestClose={this.handleCloseModal}>
                    <button onClick={this.handleCloseModal} id="close-modal">&times;</button>
                    <div className="modaltext">
                        {/* <h1>Contact Our Expert!</h1> */}
                        <img src={this.props.src} alt={this.props.name} class="expert-img" />
                        <h2 class="expert-name">{this.props.name}</h2>
                        <h4 class="expert-desc">{this.props.desc}</h4>
                        <div class="extra-info">
                            {this.email()}
                            {this.linkedIn()}
                        </div>
                    </div>
                </ReactModal>
            </div>
        )
    }
}

export default ExpertCard
