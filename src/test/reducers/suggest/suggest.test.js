import suggest from '../../../reducers/suggest/suggest';
import {
  changeValue,
  changeValueAndCloseBox,
  closeBox,
  parseResultAndShowBox
} from '../../../actions/suggest/suggest';

describe('suggest reducer', () => {
  const instance = 'instance';
  let suggestInstanceReducer;
  beforeEach(() => {
    suggestInstanceReducer = suggest(instance);
  });

  it('should return a default state', () => {
    expect(suggestInstanceReducer(undefined, {})).toEqual({
      results: [],
      showBox: false,
      value: ''
    });
  });

  describe('change value action', () => {
    it('should return a state the value property changed', () => {
      const state = suggestInstanceReducer(
        undefined,
        changeValue(instance, { value: 'new value' })
      );
      expect(state).toHaveProperty('value', 'new value');
    });
  });

  describe('change value and close box action', () => {
    it('should return a state the value property changed and the show box property = false', () => {
      const state = suggestInstanceReducer(
        { value: 'old value', showBox: true },
        changeValueAndCloseBox(instance, { value: 'new value' })
      );
      expect(state).toHaveProperty('value', 'new value');
      expect(state).toHaveProperty('showBox', false);
    });
  });

  describe('close box action', () => {
    it('should return a state the value property not changed and the show box property = false', () => {
      const state = suggestInstanceReducer(
        { value: 'old value', showBox: true },
        closeBox(instance, { value: 'new value' })
      );
      expect(state).toHaveProperty('value', 'old value');
      expect(state).toHaveProperty('showBox', false);
    });
  });

  describe('parse results and show box action', () => {
    it('should return a state with the results transformed by the resultTransformer function and showBox = true', () => {
      expect(
        suggestInstanceReducer(
          {
            showBox: false,
            value: 'old value'
          },
          parseResultAndShowBox(instance, {
            showBox: false,
            results: [{ title: 'First Title' }, { title: 'Second Title' }],
            resultTransformer: data =>
              data.map(result => ({ name: result.title }))
          })
        )
      ).toEqual({
        results: [{ name: 'First Title' }, { name: 'Second Title' }],
        showBox: true,
        value: 'old value'
      });
    });
  });
});
