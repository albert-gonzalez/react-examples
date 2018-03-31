import {
  CHANGE_RED_COLOR,
  CHANGE_GREEN_COLOR,
  CHANGE_BLUE_COLOR,
  CHANGE_ALPHA_CHANNEL
} from '../../actions/rgbPicker/rgbPicker';

export default function rgbPicker(instance) {
  return (state = { red: 0, green: 0, blue: 0, alpha: 1 }, action) => {
    const value = parseFloat(action.value);

    switch (action.type) {
      case `${instance}_${CHANGE_RED_COLOR}`:
        return { ...state, red: value };
      case `${instance}_${CHANGE_GREEN_COLOR}`:
        return { ...state, green: value };
      case `${instance}_${CHANGE_BLUE_COLOR}`:
        return { ...state, blue: value };
      case `${instance}_${CHANGE_ALPHA_CHANNEL}`:
        return { ...state, alpha: value };
      default:
        return state;
    }
  };
}
