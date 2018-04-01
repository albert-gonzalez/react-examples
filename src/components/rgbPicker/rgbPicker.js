import React, { Component } from 'react';
import PropTypes from 'prop-types';

import './rgbPicker.css';
import '../inputRange/inputRange.css';

class RgbPicker extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: false
    };
  }

  render() {
    return (
      <div className="rgb-picker">
        <div>
          <label className="label">Red:</label>
          <input
            type="range"
            min="0"
            max="255"
            value={this.props.red}
            onChange={this.props.onRedChange}
          />
          <input
            className="input"
            type="number"
            min="0"
            max="255"
            value={this.props.red}
            onChange={this.props.onRedChange}
          />
        </div>
        <div>
          <label className="label">Green:</label>
          <input
            type="range"
            min="0"
            max="255"
            value={this.props.green}
            onChange={this.props.onGreenChange}
          />
          <input
            className="input"
            type="number"
            min="0"
            max="255"
            value={this.props.green}
            onChange={this.props.onGreenChange}
          />
        </div>
        <div>
          <label className="label">Blue:</label>
          <input
            type="range"
            min="0"
            max="255"
            value={this.props.blue}
            onChange={this.props.onBlueChange}
          />
          <input
            className="input"
            type="number"
            min="0"
            max="255"
            value={this.props.blue}
            onChange={this.props.onBlueChange}
          />
        </div>
        <div>
          <label className="label">Alpha:</label>
          <input
            type="range"
            min="0"
            max="1"
            step="0.01"
            value={this.props.alpha}
            onChange={this.props.onAlphaChange}
          />
          <input
            className="input"
            type="number"
            min="0"
            max="1"
            step="0.01"
            value={this.props.alpha}
            onChange={this.props.onAlphaChange}
          />
        </div>
      </div>
    );
  }
}

RgbPicker.propTypes = {
  red: PropTypes.number.isRequired,
  green: PropTypes.number.isRequired,
  blue: PropTypes.number.isRequired,
  alpha: PropTypes.number.isRequired,
  onRedChange: PropTypes.func.isRequired,
  onBlueChange: PropTypes.func.isRequired,
  onGreenChange: PropTypes.func.isRequired,
  onAlphaChange: PropTypes.func.isRequired
};

export default RgbPicker;
