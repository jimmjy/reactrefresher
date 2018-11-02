import React from 'react';
import ReactDOM from 'react-dom';
import Modal from 'react-modal';
Modal.setAppElement('#app');

const OptionModal = (props) => (
    <Modal
        isOpen={!!props.selectedOption}
        contentLabel="Selected Option"
        onRequestClose={props.handleCloseModal}
    >
        <h3>Random Selection</h3>
        {props.selectedOption && <p>{props.selectedOption}</p>}
        <button onClick={props.handleCloseModal}>Okay</button>
    </Modal>
);

export default OptionModal;