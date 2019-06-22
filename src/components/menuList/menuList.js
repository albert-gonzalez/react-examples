import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

import './menuList.css';

const MenuList = ({ className, menu, onItemClick }) => {
  return (
    <aside className="menu">
      <ul className={`menu-list ${className || ''}`}>
        {renderItems({ menu, onItemClick })}
      </ul>
    </aside>
  );
};

function renderItems({ menu, onItemClick }) {
  const items = menu;

  let linkKey = 1;
  return items.map(item => (
    <li key={linkKey++} onClick={onItemClick}>
      {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
      {item.href ? <Link to={item.href}>{item.name}</Link> : <a>{item.name}</a>}
    </li>
  ));
}

MenuList.propTypes = {
  menu: PropTypes.array.isRequired
};

export default MenuList;
