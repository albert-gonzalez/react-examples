export const DISABLE_BUTTON = 'DISABLE_BUTTON';
export const ENABLE_BUTTON = 'ENABLE_BUTTON';
export const INCREASE_COUNTER = 'INCREASE_COUNTER';

export function disableButton(instance) {
    return { type: `${instance}_${DISABLE_BUTTON}` };
}

export function enableButton(instance) {
    return  { type: `${instance}_${ENABLE_BUTTON}` };
}

export function increaseCounter(instance) {
    return  { type: `${instance}_${INCREASE_COUNTER}` };
}