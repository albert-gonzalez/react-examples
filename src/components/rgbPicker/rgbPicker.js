import React from 'react';
import PropTypes from 'prop-types';

import './rgbPicker.css';
import '../inputRange/inputRange.css';

const RgbPicker = ({
  red,
  onRedChange,
  green,
  onGreenChange,
  blue,
  onBlueChange,
  alpha,
  onAlphaChange
}) => {
  return (
    <div className="rgb-picker">
      <div className="field">
        <label className="label">Red:</label>
        <div className="control">
          <input
            type="range"
            min="0"
            max="255"
            value={red}
            onChange={onRedChange}
          />
        </div>
        <div className="control">
          <input
            className="input"
            type="number"
            min="0"
            max="255"
            value={red}
            onChange={onRedChange}
          />
        </div>
      </div>
      <div className="field">
        <label className="label">Green:</label>
        <div className="control">
          <input
            type="range"
            min="0"
            max="255"
            value={green}
            onChange={onGreenChange}
          />
        </div>
        <div className="control">
          <input
            className="input"
            type="number"
            min="0"
            max="255"
            value={green}
            onChange={onGreenChange}
          />
        </div>
      </div>
      <div className="field">
        <label className="label">Blue:</label>
        <div className="control">
          <input
            type="range"
            min="0"
            max="255"
            value={blue}
            onChange={onBlueChange}
          />
        </div>
        <div className="control">
          <input
            className="input"
            type="number"
            min="0"
            max="255"
            value={blue}
            onChange={onBlueChange}
          />
        </div>
      </div>
      <div className="field">
        <label className="label">Alpha:</label>
        <div className="control">
          <input
            type="range"
            min="0"
            max="1"
            step="0.01"
            value={alpha}
            onChange={onAlphaChange}
          />
        </div>
        <div className="control">
          <input
            className="input"
            type="number"
            min="0"
            max="1"
            step="0.01"
            value={alpha}
            onChange={onAlphaChange}
          />
        </div>
      </div>
    </div>
  );
};

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
