import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './button.css';

class Button extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: false
    };
  }

  render() {
    return (
      <button
        className={`button ${this.props.className} ${
          this.props.disabled ? 'is-loading' : ''
        }`}
        onClick={this.props.onClick()}
        disabled={this.props.disabled}
      >
        {this.props.children}
      </button>
    );
  }
}

Button.propTypes = {
  disabled: PropTypes.bool.isRequired,
  children: PropTypes.node.isRequired,
  onClick: PropTypes.func.isRequired
};

export default Button;
