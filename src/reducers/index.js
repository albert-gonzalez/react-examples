import { combineReducers } from 'redux';
import button from './button/button';
import rgbPicker from './rgbPicker/rgbPicker';
import miniPaint from './miniPaint/miniPaint';
import suggest from './suggest/suggest';
import modal from './modal/modal';

const reducers = combineReducers({
  normalButton: button('normalButton'),
  loadingButton: button('loadingButton'),
  rgbPicker: rgbPicker('rgbPicker'),
  miniPaint: miniPaint('miniPaint'),
  rgbPicker_miniPaint: rgbPicker('rgbPicker_miniPaint'),
  suggest: suggest('suggest'),
  modal: modal('modal'),
  modalButton: button('modalButton')
});

export default reducers;
