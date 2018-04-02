import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

import './menuList.css';

class MenuList extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isActive: false
    };
  }
  render() {
    return (
      <aside className="menu">
        <ul className={`menu-list ${this.props.className || ''}`}>
          {renderItems(this.props)}
        </ul>
      </aside>
    );
  }
}

function renderItems(props) {
  const items = props.menu;
  const onItemClick = props.onItemClick;

  let linkKey = 1;
  return items.map(item => (
    <li key={linkKey++} onClick={onItemClick}>
      {item.href ? <Link to={item.href}>{item.name}</Link> : <a>{item.name}</a>}
    </li>
  ));
}

MenuList.propTypes = {
  menu: PropTypes.array.isRequired
};

export default MenuList;
