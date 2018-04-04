import modal from '../../../reducers/modal/modal';
import { showModal, hideModal } from '../../../actions/modal/modal';

describe('modal reducer', () => {
  const instance = 'instance';
  let modalInstanceReducer;
  beforeEach(() => {
    modalInstanceReducer = modal(instance);
  });

  it('should return a default state', () => {
    expect(modalInstanceReducer(undefined, {})).toEqual({
      shown: false
    });
  });

  describe('show modal action', () => {
    it('should return a state with shown = true and the title and header properties', () => {
      expect(
        modalInstanceReducer(
          {},
          showModal(instance, { title: 'A title', body: 'A body' })
        )
      ).toEqual({ title: 'A title', body: 'A body', shown: true });
    });
  });

  describe('hide modal action', () => {
    it('should return a state with shown = false', () => {
      expect(modalInstanceReducer({}, hideModal(instance))).toHaveProperty(
        'shown',
        false
      );
    });
  });
});
