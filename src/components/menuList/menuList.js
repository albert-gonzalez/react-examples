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
        <ul className="menu-list with-bullets">
          {renderItems(this.props.menu)}
        </ul>
      </aside>
    );
  }
}

function renderItems(items) {
  let linkKey = 1;
  return items.map(item => (
    <li key={linkKey++}>
      <Link to={item.href}>{item.name}</Link>
    </li>
  ));
}

MenuList.propTypes = {
  menu: PropTypes.array.isRequired
};

export default MenuList;
