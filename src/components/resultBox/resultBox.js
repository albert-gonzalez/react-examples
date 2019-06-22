import React from 'react';
import PropTypes from 'prop-types';

import './resultBox.css';

const ResultBox = ({ className, children, style }) => {
  return (
    <div className={`result-box ${className}`} style={style}>
      {children}
    </div>
  );
};

ResultBox.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string
};

export default ResultBox;
