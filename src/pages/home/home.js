import React, { Component } from 'react';
import Hero from '../../components/hero/hero';
import Section from '../../components/section/section';
import MenuList from '../../components/menuList/menuList';

class HomePage extends Component {
  render() {
    return (
      <div>
        <Hero>React Examples</Hero>
        <Section>
          <p>
            This Page is intented to show some React Example which I made. I
            used React + Redux + React Router for the JS part and Bulma.io for
            the SCSS part. I hope these examples can be useful for you!
          </p>
          <hr />
          <h2 className="subtitle">Select a component from the list below</h2>
          <MenuList menu={this.props.menu} />
        </Section>
      </div>
    );
  }
}

export default HomePage;
