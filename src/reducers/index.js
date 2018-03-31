import { combineReducers } from 'redux';
import button from './button/button';
import rgbPicker from './rgbPicker/rgbPicker';

const reducers = combineReducers({
  normalButton: button('normalButton'),
  loadingButton: button('loadingButton'),
  rgbPicker: rgbPicker('rgbPicker')
});

export default reducers;
