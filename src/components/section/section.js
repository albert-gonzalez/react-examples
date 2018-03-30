import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './section.css';

class Section extends Component {
  render() {
    return (
      <div className="section">
        <div className="container">{this.props.children}</div>
      </div>
    );
  }
}

Section.propTypes = {
  children: PropTypes.node.isRequired
};

export default Section;
