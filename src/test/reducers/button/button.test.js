import button from '../../../reducers/button/button';
import {
  disableButton,
  enableButton,
  increaseCounter
} from '../../../actions/button/button';

describe('button reducer', () => {
  const instance = 'instance';
  let buttonInstanceReducer;
  beforeEach(() => {
    buttonInstanceReducer = button(instance);
  });

  it('should return a default state', () => {
    expect(buttonInstanceReducer(undefined, {})).toEqual({
      disabled: false,
      count: 0
    });
  });

  describe('disable button action', () => {
    it('should return a state with disabled = true', () => {
      expect(buttonInstanceReducer({}, disableButton(instance))).toHaveProperty(
        'disabled',
        true
      );
    });
  });

  describe('enable button action', () => {
    it('should return a state with disabled = false', () => {
      expect(buttonInstanceReducer({}, enableButton(instance))).toHaveProperty(
        'disabled',
        false
      );
    });
  });

  describe('increase counter action', () => {
    it('should return a state with count property increased by one', () => {
      expect(
        buttonInstanceReducer({}, increaseCounter(instance))
      ).toHaveProperty('count', 1);
      expect(
        buttonInstanceReducer({ count: 6 }, increaseCounter(instance))
      ).toHaveProperty('count', 7);
    });
  });
});
