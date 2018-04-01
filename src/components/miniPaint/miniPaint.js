import React, { Component } from 'react';
import PropTypes from 'prop-types';
import RgbPickerContainer from '../../containers/rgbPicker/rgbPicker';

import './miniPaint.css';
import '../inputRange/inputRange.css';

class MiniPaint extends Component {
  render() {
    return (
      <div className="mini-paint columns">
        <div className="column">
          <label className="label">Canvas:</label>
          <canvas
            width="400"
            height="400"
            ref="canvas"
            className="canvas"
            onMouseDown={event =>
              this.props.onMouseDown(
                event,
                this.props.color,
                this.props.brushSize
              )
            }
            onTouchStart={event =>
              this.props.onTouchStart(
                event,
                this.props.color,
                this.props.brushSize
              )
            }
            onMouseUp={this.props.onMouseUp}
            onMouseOut={this.props.onMouseUp}
            onTouchMove={event => {
              this.props.onTouchMove(
                event,
                this.props.color,
                this.props.brushSize
              );
            }}
            onMouseMove={event =>
              this.props.onMouseMove(
                event,
                this.props.color,
                this.props.brushSize
              )
            }
          />
        </div>
        <div className="column">
          <label className="label">Color:</label>
          <RgbPickerContainer instance={`rgbPicker_${this.props.instance}`} />
          <hr />
          <label className="label">Brush Size:</label>
          <input
            type="range"
            min="1"
            max="10"
            value={this.props.brushSize}
            onChange={this.props.onBrushSizeChange}
          />
          <input
            className="input"
            type="number"
            min="1"
            max="10"
            value={this.props.brushSize}
            onChange={this.props.onBrushSizeChange}
          />
        </div>
      </div>
    );
  }

  componentDidMount() {
    updateCanvas(this.props, this.refs.canvas);
    window.addEventListener('resize', () =>
      updateCanvas(this.props, this.refs.canvas)
    );
  }

  componentDidUpdate() {
    updateCanvas(this.props, this.refs.canvas);
  }
}

function updateCanvas(props, canvas) {
  const context = canvas.getContext('2d');
  const rect = canvas.getBoundingClientRect();
  const scaleX = canvas.width / rect.width;
  const scaleY = canvas.height / rect.height;

  context.clearRect(0, 0, context.canvas.width, context.canvas.height);

  context.lineJoin = 'round';

  props.drawnPositions.forEach((position, index, positions) => {
    context.strokeStyle = position.color;
    context.lineWidth = position.brushSize;
    context.beginPath();

    if (position.moving) {
      context.moveTo(
        (positions[index - 1].x - rect.left - window.scrollX) * scaleX,
        (positions[index - 1].y - rect.top - window.scrollY) * scaleY
      );
    } else {
      context.moveTo(
        (position.x - rect.left - window.scrollX - 1) * scaleX,
        (position.y - rect.top - window.scrollY) * scaleY
      );
    }
    context.lineTo(
      (position.x - rect.left - window.scrollX) * scaleX,
      (position.y - rect.top - window.scrollY) * scaleY
    );
    context.closePath();
    context.stroke();
  });
}

MiniPaint.propTypes = {
  color: PropTypes.string.isRequired,
  brushSize: PropTypes.number.isRequired,
  onMouseDown: PropTypes.func.isRequired,
  onMouseUp: PropTypes.func.isRequired,
  onMouseMove: PropTypes.func.isRequired,
  onTouchStart: PropTypes.func.isRequired,
  onTouchMove: PropTypes.func.isRequired,
  onBrushSizeChange: PropTypes.func.isRequired
};

export default MiniPaint;
