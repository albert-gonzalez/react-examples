import rgbPicker from '../../../reducers/rgbPicker/rgbPicker';
import {
  changeRedColor,
  changeGreenColor,
  changeBlueColor,
  changeAlphaChannel
} from '../../../actions/rgbPicker/rgbPicker';

describe('rgbPicker reducer', () => {
  const instance = 'instance';
  let rgbPickerInstanceReducer;
  beforeEach(() => {
    rgbPickerInstanceReducer = rgbPicker(instance);
  });

  it('should return a default state', () => {
    expect(rgbPickerInstanceReducer(undefined, {})).toEqual({
      red: 0,
      green: 0,
      blue: 0,
      alpha: 1
    });
  });

  describe('change red action', () => {
    it('should return a state with red property changed', () => {
      expect(
        rgbPickerInstanceReducer({}, changeRedColor(instance, 25))
      ).toHaveProperty('red', 25);
    });
  });

  describe('change green action', () => {
    it('should return a state with green property changed', () => {
      expect(
        rgbPickerInstanceReducer({}, changeGreenColor(instance, 10))
      ).toHaveProperty('green', 10);
    });
  });

  describe('change blue action', () => {
    it('should return a state with blue property changed', () => {
      expect(
        rgbPickerInstanceReducer({}, changeBlueColor(instance, 100))
      ).toHaveProperty('blue', 100);
    });
  });

  describe('change alpha channel action', () => {
    it('should return a state with alpha property changed', () => {
      expect(
        rgbPickerInstanceReducer({}, changeAlphaChannel(instance, 0.5))
      ).toHaveProperty('alpha', 0.5);
    });
  });
});
