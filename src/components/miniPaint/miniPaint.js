import React, { useEffect, useRef } from 'react';
import PropTypes from 'prop-types';
import RgbPickerContainer from '../../containers/rgbPicker/rgbPicker';

import './miniPaint.css';
import '../inputRange/inputRange.css';

const MiniPaint = ({
  color,
  brushSize,
  drawnPositions,
  onMouseDown,
  onTouchStart,
  onTouchMove,
  onMouseMove,
  onMouseUp,
  instance,
  onBrushSizeChange
}) => {
  const canvas = useRef();

  useEffect(() => {
    const resizeCallback = () =>
      updateCanvas({ drawnPositions }, canvas.current);
    window.addEventListener('resize', resizeCallback);

    updateCanvas({ drawnPositions }, canvas.current);

    return () => window.removeEventListener('resize', resizeCallback);
  }, [drawnPositions]);

  return (
    <div className="mini-paint columns">
      <div className="column">
        <label className="label">Canvas:</label>
        <canvas
          width="400"
          height="400"
          ref={canvas}
          className="canvas"
          onMouseDown={event => onMouseDown(event, color, brushSize)}
          onTouchStart={event => onTouchStart(event, color, brushSize)}
          onMouseUp={onMouseUp}
          onMouseOut={onMouseUp}
          onTouchMove={event => {
            onTouchMove(event, color, brushSize);
          }}
          onMouseMove={event => onMouseMove(event, color, brushSize)}
        />
      </div>
      <div className="column">
        <label className="label">Color:</label>
        <RgbPickerContainer instance={`rgbPicker_${instance}`} />
        <hr />
        <label className="label">Brush Size:</label>
        <input
          type="range"
          min="1"
          max="10"
          value={brushSize}
          onChange={onBrushSizeChange}
        />
        <input
          className="input"
          type="number"
          min="1"
          max="10"
          value={brushSize}
          onChange={onBrushSizeChange}
        />
      </div>
    </div>
  );
};

function updateCanvas(props, canvas) {
  const context = canvas.getContext('2d');
  const rect = canvas.getBoundingClientRect();
  canvas.width = canvas.offsetWidth;
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
