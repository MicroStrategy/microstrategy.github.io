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
                        <h1>Contact our Expert!</h1>
                        <img src={this.props.src} alt={this.props.name} class="expert-img" />
                        <h2 class="expert-name">{this.props.name}</h2>
                        <h4 class="expert-desc">{this.props.desc}</h4>
                        <div class="extra-info">
                            <p class="expert-email">Email: {this.props.email}</p>
                            <p class="expert-linked">LinkedIn: <a href={this.props.linked}>{this.props.linked}</a></p>
                        </div>
                    </div>
                </ReactModal>
            </div>
        )
    }
}

export default ExpertCard
