import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './hero.css';

class Hero extends Component {
  render() {
    return (
      <section className="hero is-info">
        <div className="hero-body">
          <div className="container">
            <h1 className="title">{this.props.children}</h1>
          </div>
        </div>
      </section>
    );
  }
}

Hero.propTypes = {
  children: PropTypes.node.isRequired
};

export default Hero;
