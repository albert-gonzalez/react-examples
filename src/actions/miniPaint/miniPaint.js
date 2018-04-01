export const ENABLE_PAINT = 'ENABLE_PAINT';
export const DISABLE_PAINT = 'DISABLE_PAINT';
export const MOVE_BRUSH = 'MOVE_BRUSH';
export const CHANGE_BRUSH_SIZE = 'CHANGE_BRUSH_SIZE';

export function enablePaint(instance, data) {
  return { type: `${instance}_${ENABLE_PAINT}`, data };
}

export function disablePaint(instance, data) {
  return { type: `${instance}_${DISABLE_PAINT}`, data };
}

export function moveBrush(instance, data) {
  return { type: `${instance}_${MOVE_BRUSH}`, data };
}

export function changeBrushSize(instance, data) {
  return { type: `${instance}_${CHANGE_BRUSH_SIZE}`, data };
}
