import React from 'react';
import PropTypes from 'prop-types';
import './section.css';

const Section = ({ children }) => {
  return (
    <div className="section">
      <div className="container">{children}</div>
    </div>
  );
};

Section.propTypes = {
  children: PropTypes.node.isRequired
};

export default Section;
