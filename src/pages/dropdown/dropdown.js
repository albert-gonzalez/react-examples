import React from 'react';
import Hero from '../../components/hero/hero';
import Section from '../../components/section/section';
import Dropdown from '../../components/dropdown/dropdown';
import { Link } from 'react-router-dom';

const DropdownPage = () => {
  return (
    <div>
      <Hero>
        Dropdown example
        <span className="emoji" role="img" aria-label="brush">
          🔻
        </span>
      </Hero>
      <Section>
        <h2 className="title is-4">Dropdown with some actions:</h2>
        <Dropdown buttonText="Click me!">
          <Link to="/react-examples/" className="dropdown-item">
            Click to go to Home Page
          </Link>
          <div className="dropdown-item" onClick={() => alert('Alert!')}>
            Click to show Alert
          </div>
          <div className="dropdown-item">Click to do nothing</div>
        </Dropdown>
        <hr />
      </Section>
    </div>
  );
};
export default DropdownPage;
