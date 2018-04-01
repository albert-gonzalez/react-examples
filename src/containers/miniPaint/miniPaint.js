import { connect } from 'react-redux';
import MiniPaint from '../../components/miniPaint/miniPaint';
import {
  enablePaint,
  disablePaint,
  moveBrush,
  changeBrushSize
} from '../../actions/miniPaint/miniPaint';

const mapStateToProps = (state, props) => {
  const miniPaintState = state[props.instance];
  const rgbPickerState = state[`rgbPicker_${props.instance}`];

  return {
    painting: miniPaintState.painting,
    drawnPositions: miniPaintState.drawnPositions,
    color: `rgba(${rgbPickerState.red},${rgbPickerState.green},${
      rgbPickerState.blue
    },${rgbPickerState.alpha})`,
    brushSize: miniPaintState.brushSize
  };
};

const mapDispatchToProps = (dispatch, props) => {
  return {
    onMouseDown: (event, color, brushSize) =>
      event.button === 0 &&
      dispatch(
        enablePaint(props.instance, {
          x: event.pageX,
          y: event.pageY,
          color,
          brushSize
        })
      ),
    onMouseUp: event => dispatch(disablePaint(props.instance)),
    onMouseMove: (event, color, brushSize) => {
      dispatch(
        moveBrush(props.instance, {
          x: event.pageX,
          y: event.pageY,
          color,
          brushSize
        })
      );
    },
    onTouchStart: (event, color, brushSize) => {
      dispatch(
        enablePaint(props.instance, {
          x: event.touches[0].pageX,
          y: event.touches[0].pageY,
          color,
          brushSize
        })
      );
    },
    onTouchMove: (event, color, brushSize) => {
      dispatch(
        moveBrush(props.instance, {
          x: event.touches[0].pageX,
          y: event.touches[0].pageY,
          color,
          brushSize
        })
      );
    },
    onBrushSizeChange: event =>
      dispatch(
        changeBrushSize(props.instance, { brushSize: event.target.value })
      )
  };
};

const MiniPaintContainer = connect(mapStateToProps, mapDispatchToProps)(
  MiniPaint
);

export default MiniPaintContainer;
