import React, { Component } from 'react';
import Hero from '../../components/hero/hero';
import Button from '../../containers/button/button';
import Section from '../../components/section/section';
import ButtonResultBoxContainer from '../../containers/resultBox/buttonResultBox';

class ButtonPage extends Component {
  render() {
    return (
      <div>
        <Hero>Button examples</Hero>
        <Section>
          <h2 className="title is-4">
            Normal button with onClick action bound
          </h2>
          <div className="columns">
            <div className="column">
              <label className="label">Click the button:</label>
              <Button
                instance="normalButton"
                className="is-warning"
                action={this.props.increaseCounterNormalButton}
              >
                Normal Button
              </Button>
            </div>
            <div className="column">
              <label className="label">Times clicked:</label>
              <ButtonResultBoxContainer instance="normalButton" />
            </div>
          </div>
          <hr />
          <h2 className="title is-4">
            Disable Button and show a loading spinner while async action is
            executing
          </h2>
          <div className="columns">
            <div className="column">
              <label className="label">Click the button:</label>
              <Button
                instance="loadingButton"
                className="is-success"
                action={() =>
                  waitFor2Seconds(this.props.increaseCounterLoadingButton)
                }
              >
                Button with Loading
              </Button>
            </div>
            <div className="column">
              <label className="label">Times clicked:</label>
              <ButtonResultBoxContainer instance="loadingButton" />
            </div>
          </div>
          <hr />
        </Section>
      </div>
    );
  }
}

function waitFor2Seconds(action) {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve(action());
    }, 2000);
  });
}

export default ButtonPage;
