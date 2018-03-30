import React, { Component } from 'react';
import PropTypes from 'prop-types';

class ResultBox extends Component {
  render() {
    return <div>{this.props.children}</div>;
  }
}

ResultBox.propTypes = {
  children: PropTypes.node.isRequired
};

export default ResultBox;
