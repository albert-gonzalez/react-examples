export const CHANGE_VALUE = 'CHANGE_VALUE';
export const CHANGE_VALUE_AND_CLOSE_BOX = 'CHANGE_VALUE_AND_CLOSE_BOX';
export const PARSE_RESULT_AND_SHOW_BOX = 'PARSE_RESULT_AND_SHOW_BOX';
export const CLOSE_BOX = 'CLOSE_BOX';

export function changeValue(instance, data) {
  return { type: `${instance}_${CHANGE_VALUE}`, data };
}

export function changeValueAndCloseBox(instance, data) {
  return { type: `${instance}_${CHANGE_VALUE_AND_CLOSE_BOX}`, data };
}

export function parseResultAndShowBox(instance, data) {
  return { type: `${instance}_${PARSE_RESULT_AND_SHOW_BOX}`, data };
}

export function closeBox(instance, data) {
  return { type: `${instance}_${CLOSE_BOX}`, data };
}
