import React, { Component } from 'react';
import PropTypes from 'prop-types';

import './resultBox.css';

class ResultBox extends Component {
  render() {
    return (
      <div
        className={`result-box ${this.props.className}`}
        style={this.props.style}
      >
        {this.props.children}
      </div>
    );
  }
}

ResultBox.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string
};

export default ResultBox;
