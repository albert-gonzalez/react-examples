import React, { Component } from 'react';
import Hero from '../../components/hero/hero';
import Section from '../../components/section/section';
import RgbPickerContainer from '../../containers/rgbPicker/rgbPicker';
import RgbPickerResultBox from '../../containers/resultBox/rgbPickerResultBox';

class RgbPickerPage extends Component {
  render() {
    return (
      <div>
        <Hero>
          RGB Picker example
          <span className="emoji" role="img" aria-label="palette">
            🎨
          </span>
        </Hero>
        <Section>
          <div className="columns">
            <div className="column">
              <label className="label">Select a value from the sliders:</label>
              <RgbPickerContainer instance="rgbPicker" />
            </div>
            <div className="column">
              <label className="label">Color Result:</label>
              <RgbPickerResultBox
                className="full-width full-height"
                instance="rgbPicker"
              />
            </div>
          </div>
          <hr />
        </Section>
      </div>
    );
  }
}
export default RgbPickerPage;
