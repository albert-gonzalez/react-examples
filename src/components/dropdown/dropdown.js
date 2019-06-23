import React, { useState, useEffect, useRef } from 'react';
import './dropdown.css';

const Dropdown = ({ buttonText, children }) => {
  const [isActive, setIsActive] = useState(false);
  const dropdownButton = useRef();

  useEffect(() => {
    const onClickOutCallback = event => {
      if (!dropdownButton.current.contains(event.target)) {
        setIsActive(false);
      }
    };

    document.addEventListener('click', onClickOutCallback);

    return () => document.removeEventListener('click', onClickOutCallback);
  });

  return (
    <div
      className={`dropdown ${isActive ? 'is-active' : ''}`}
      onClick={() => setIsActive(!isActive)}
    >
      <div className="dropdown-trigger">
        <button
          ref={dropdownButton}
          className="button"
          aria-haspopup="true"
          aria-controls="dropdown-menu"
        >
          <span>{buttonText}</span>
          <span className="icon is-small">
            <i className="fas fa-angle-down" aria-hidden="true"></i>
          </span>
        </button>
      </div>
      <div className="dropdown-menu" id="dropdown-menu" role="menu">
        <div className="dropdown-content">{children}</div>
      </div>
    </div>
  );
};

export default Dropdown;
