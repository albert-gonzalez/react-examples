import {
  PARSE_RESULT_AND_SHOW_BOX,
  CHANGE_VALUE_AND_CLOSE_BOX,
  CLOSE_BOX,
  CHANGE_VALUE
} from '../../actions/suggest/suggest';

export default function suggest(instance) {
  return (
    state = {
      showBox: false,
      results: [],
      value: ''
    },
    action
  ) => {
    switch (action.type) {
      case `${instance}_${CHANGE_VALUE}`:
        return {
          ...state,
          value: action.data.value
        };
      case `${instance}_${PARSE_RESULT_AND_SHOW_BOX}`:
        const results = action.data.resultTransformer(action.data.results);
        return {
          ...state,
          showBox: results.length > 0,
          results: action.data.resultTransformer(action.data.results)
        };
      case `${instance}_${CHANGE_VALUE_AND_CLOSE_BOX}`:
        return { ...state, value: action.data.value, showBox: false };
      case `${instance}_${CLOSE_BOX}`:
        return { ...state, showBox: false };
      default:
        return state;
    }
  };
}
