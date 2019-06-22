import React from 'react';
import PropTypes from 'prop-types';
import './modal.css';

const Modal = ({ shown, body, hideModal, title }) => {
  return (
    <div className={`modal ${shown ? 'is-active' : ''}`}>
      <div className="modal-background" onClick={hideModal} />
      <div className="modal-content">
        <div className="box">
          {printHeaderIfNeeded({ title })}
          <section className="content">{body}</section>
        </div>
      </div>
    </div>
  );
};

function printHeaderIfNeeded({ title }) {
  if (!title) {
    return;
  }

  return (
    <header>
      <p className="title">{title}</p>
    </header>
  );
}

Modal.propTypes = {
  title: PropTypes.string,
  body: PropTypes.node,
  hideModal: PropTypes.func.isRequired
};

export default Modal;
