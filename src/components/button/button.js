import React from 'react';
import PropTypes from 'prop-types';
import './button.css';

const Button = ({ onClick, disabled, children, className }) => {
  return (
    <div className="control">
      <button
        className={`button ${className} ${disabled ? 'is-loading' : ''}`}
        onClick={onClick()}
        disabled={disabled}
      >
        {children}
      </button>
    </div>
  );
};

Button.propTypes = {
  disabled: PropTypes.bool.isRequired,
  children: PropTypes.node.isRequired,
  onClick: PropTypes.func.isRequired
};

export default Button;
