export const CHANGE_RED_COLOR = 'CHANGE_RED_COLOR';
export const CHANGE_GREEN_COLOR = 'CHANGE_GREEN_COLOR';
export const CHANGE_BLUE_COLOR = 'CHANGE_BLUE_COLOR';
export const CHANGE_ALPHA_CHANNEL = 'CHANGE_ALPHA_CHANNEL';

export function changeRedColor(instance, value) {
  return { type: `${instance}_${CHANGE_RED_COLOR}`, value };
}

export function changeGreenColor(instance, value) {
  return { type: `${instance}_${CHANGE_GREEN_COLOR}`, value };
}

export function changeBlueColor(instance, value) {
  return { type: `${instance}_${CHANGE_BLUE_COLOR}`, value };
}

export function changeAlphaChannel(instance, value) {
  return { type: `${instance}_${CHANGE_ALPHA_CHANNEL}`, value };
}
