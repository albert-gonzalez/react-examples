import {
  enablePaint,
  moveBrush,
  disablePaint,
  changeBrushSize
} from '../../../actions/miniPaint/miniPaint';
import miniPaint from '../../../reducers/miniPaint/miniPaint';

describe('miniPaint reducer', () => {
  const instance = 'instance';
  let miniPaintInstanceReducer;
  beforeEach(() => {
    miniPaintInstanceReducer = miniPaint(instance);
  });

  it('should return a default state', () => {
    expect(miniPaintInstanceReducer(undefined, {})).toEqual({
      painting: false,
      drawnPositions: [],
      brushSize: 1
    });
  });

  describe('enable paint action', () => {
    it('should return a state with the paint property = true and the info of a click position (with moving property = false)', () => {
      const state = miniPaintInstanceReducer(
        undefined,
        enablePaint(instance, { x: 1, y: 2, brushSize: 3, color: 4 })
      );
      expect(state).toHaveProperty('painting', true);
      expect(state).toHaveProperty('drawnPositions', [
        { x: 1, y: 2, brushSize: 3, color: 4, moving: false }
      ]);
    });
  });

  describe('move brush action', () => {
    it('should return a state the info of a click position (with moving property = true) when state.painting is equal to true', () => {
      const state = miniPaintInstanceReducer(
        { painting: true, drawnPositions: [] },
        moveBrush(instance, { x: 1, y: 2, brushSize: 3, color: 4 })
      );
      expect(state).toHaveProperty('painting', true);
      expect(state).toHaveProperty('drawnPositions', [
        { x: 1, y: 2, brushSize: 3, color: 4, moving: true }
      ]);
    });

    it('should return the previous when state.painting is equal to false', () => {
      const state = miniPaintInstanceReducer(
        {},
        moveBrush(instance, { x: 1, y: 2, brushSize: 3, color: 4 })
      );
      expect(state).toEqual({});
    });
  });

  describe('disable paint action', () => {
    it('should return a state with the paint property = false', () => {
      expect(
        miniPaintInstanceReducer({}, disablePaint(instance))
      ).toHaveProperty('painting', false);
    });
  });

  describe('change brush size action', () => {
    it('should return a state with the brushSize property changed to the input value', () => {
      expect(
        miniPaintInstanceReducer(
          {},
          changeBrushSize(instance, { brushSize: 5 })
        )
      ).toHaveProperty('brushSize', 5);
    });
  });
});
