import { combineReducers } from 'redux';
import button from './button/button';
import rgbPicker from './rgbPicker/rgbPicker';
import miniPaint from './miniPaint/miniPaint';

const reducers = combineReducers({
  normalButton: button('normalButton'),
  loadingButton: button('loadingButton'),
  rgbPicker: rgbPicker('rgbPicker'),
  miniPaint: miniPaint('miniPaint'),
  rgbPicker_miniPaint: rgbPicker('rgbPicker_miniPaint')
});

export default reducers;
