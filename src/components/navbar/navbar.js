import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

import './navbar.css';

const NavItem = ({ href, name }) => {
  return (
    <Link className="navbar-item" to={href}>
      {name}
    </Link>
  );
};

const NavBar = ({ items, brand }) => {
  const [isActive, setIsActive] = useState(false);

  return (
    <div
      className="navbar is-dark has-shadow is-fixed-top"
      role="navigation"
      aria-label="main navigation"
    >
      <div className="navbar-brand">
        <Link
          className="navbar-item"
          to={brand.href}
          onClick={() => setIsActive(false)}
        >
          {brand.children}
        </Link>
        <div className="navbar-burger" onClick={() => setIsActive(!isActive)}>
          <span />
          <span />
          <span />
        </div>
      </div>
      <div
        className={`navbar-menu ${isActive ? 'is-active' : ''}`}
        onClick={() => setIsActive(false)}
      >
        <div className="navbar-start">{renderItems(items)}</div>
      </div>
    </div>
  );
};

function renderItems(items) {
  let linkKey = 1;
  return items.map(item => (
    <NavItem key={linkKey++} href={item.href} name={item.name} />
  ));
}

NavBar.propTypes = {
  items: PropTypes.array.isRequired,
  brand: PropTypes.object
};

export default NavBar;
