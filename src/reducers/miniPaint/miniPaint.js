import {
  ENABLE_PAINT,
  DISABLE_PAINT,
  MOVE_BRUSH,
  CHANGE_BRUSH_SIZE
} from '../../actions/miniPaint/miniPaint';

export default function miniPaint(instance) {
  return (
    state = { painting: false, drawnPositions: [], brushSize: 1 },
    action
  ) => {
    switch (action.type) {
      case `${instance}_${ENABLE_PAINT}`:
        return {
          ...state,
          painting: true,
          drawnPositions: [
            ...state.drawnPositions,
            {
              x: action.data.x,
              y: action.data.y,
              color: action.data.color,
              moving: false,
              brushSize: action.data.brushSize
            }
          ]
        };
      case `${instance}_${MOVE_BRUSH}`:
        if (state.painting) {
          return {
            ...state,
            drawnPositions: [
              ...state.drawnPositions,
              {
                x: action.data.x,
                y: action.data.y,
                color: action.data.color,
                moving: true,
                brushSize: action.data.brushSize
              }
            ]
          };
        } else {
          return state;
        }
      case `${instance}_${DISABLE_PAINT}`:
        return { ...state, painting: false };
      case `${instance}_${CHANGE_BRUSH_SIZE}`:
        return { ...state, brushSize: parseInt(action.data.brushSize, 10) };
      default:
        return state;
    }
  };
}
