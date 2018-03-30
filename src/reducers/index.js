import { combineReducers } from 'redux';
import button from './button/button';

const reducers = combineReducers({
  normalButton: button('normalButton'),
  loadingButton: button('loadingButton')
});
export default reducers;
