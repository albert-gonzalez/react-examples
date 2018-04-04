import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './modal.css';

class Modal extends Component {
  render() {
    return (
      <div className={`modal ${this.props.shown ? 'is-active' : ''}`}>
        <div className="modal-background" onClick={this.props.hideModal} />
        <div className="modal-content">
          <div className="box">
            {printHeaderIfNeeded(this.props)}
            <section className="content">{this.props.body}</section>
          </div>
        </div>
      </div>
    );
  }
}

function printHeaderIfNeeded(props) {
  if (!props.title) {
    return;
  }

  return (
    <header>
      <p className="title">{props.title}</p>
    </header>
  );
}

Modal.propTypes = {
  title: PropTypes.string,
  body: PropTypes.node,
  hideModal: PropTypes.func.isRequired
};

export default Modal;
