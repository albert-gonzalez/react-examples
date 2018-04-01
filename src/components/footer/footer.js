import React, { Component } from 'react';
import './footer.css';

class Footer extends Component {
  render() {
    return (
      <footer className="footer">
        <div className="container">
          <div className="content has-text-centered">
            <p>
              <strong>React Examples</strong> by{' '}
              <a href="https://github.com/albert-gonzalez">Albert González</a>.
            </p>
            <p>
              Source Code in{' '}
              <a href="https://github.com/albert-gonzalez/react-examples">
                Github
              </a>
            </p>
          </div>
        </div>
      </footer>
    );
  }
}

export default Footer;
