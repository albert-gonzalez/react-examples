import { SHOW_MODAL, HIDE_MODAL } from '../../actions/modal/modal';

export default function modal(instance) {
  return (state = { shown: false }, action) => {
    switch (action.type) {
      case `${instance}_${SHOW_MODAL}`:
        return {
          ...state,
          shown: true,
          title: action.data.title,
          body: action.data.body
        };
      case `${instance}_${HIDE_MODAL}`:
        return { ...state, shown: false };
      default:
        return state;
    }
  };
}
