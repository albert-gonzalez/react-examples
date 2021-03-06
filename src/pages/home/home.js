import React from 'react';
import Hero from '../../components/hero/hero';
import Section from '../../components/section/section';
import MenuList from '../../components/menuList/menuList';

const HomePage = ({ menu }) => {
  return (
    <div>
      <Hero>React Examples</Hero>
      <Section>
        <div className="content">
          <p>
            This Page is intended to show some React Example which I made. I
            used React + Redux + React Router for the JS part and Bulma.io for
            the SCSS part. I hope these examples can be useful for you!
          </p>
          <p>
            Check out the source code in{' '}
            <a href="https://github.com/albert-gonzalez/react-examples">
              Github
            </a>
          </p>
          <hr />
          <h2 className="subtitle">Select a component from the list below</h2>
          <MenuList menu={menu} className="with-bullets" />
        </div>
      </Section>
    </div>
  );
};
export default HomePage;
