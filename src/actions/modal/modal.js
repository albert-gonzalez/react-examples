export const SHOW_MODAL = 'SHOW_MODAL';
export const HIDE_MODAL = 'HIDE_MODAL';

export function showModal(instance, data) {
  return { type: `${instance}_${SHOW_MODAL}`, data };
}

export function hideModal(instance) {
  return { type: `${instance}_${HIDE_MODAL}` };
}
