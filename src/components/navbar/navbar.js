import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

import './navbar.css';

class NavItem extends Component {
  render() {
    return (
      <Link className="navbar-item" to={this.props.href}>
        {this.props.name}
      </Link>
    );
  }
}

class NavBar extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isActive: false
    };
  }
  render() {
    return (
      <div
        className="navbar is-dark has-shadow is-fixed-top"
        role="navigation"
        aria-label="main navigation"
      >
        <div className="navbar-brand">
          <Link
            className="navbar-item"
            to={this.props.brand.href}
            onClick={() => this.setState({ isActive: false })}
          >
            {this.props.brand.children}
          </Link>
          <div
            className="navbar-burger"
            onClick={() => this.setState({ isActive: !this.state.isActive })}
          >
            <span />
            <span />
            <span />
          </div>
        </div>
        <div
          className={`navbar-menu ${this.state.isActive ? 'is-active' : ''}`}
          onClick={() => this.setState({ isActive: false })}
        >
          <div className="navbar-start">{renderItems(this.props.items)}</div>
        </div>
      </div>
    );
  }
}

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
