import {
  DISABLE_BUTTON,
  ENABLE_BUTTON,
  INCREASE_COUNTER
} from '../../actions/button/button';

export default function button(instance) {
  return (state = { disabled: false, count: 0 }, action) => {
    switch (action.type) {
      case `${instance}_${DISABLE_BUTTON}`:
        return { ...state, disabled: true };
      case `${instance}_${ENABLE_BUTTON}`:
        return { ...state, disabled: false };
      case `${instance}_${INCREASE_COUNTER}`:
        return { ...state, count: (state.count || 0) + 1 };
      default:
        return state;
    }
  };
}
