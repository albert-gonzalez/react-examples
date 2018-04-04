import { connect } from 'react-redux';
import ModalPage from '../../pages/modal/modal';
import { showModal } from '../../actions/modal/modal';

const mapStateToProps = (state, props) => {
  return {};
};

const mapDispatchToProps = (dispatch, props) => {
  return {
    showModal: data => dispatch(showModal(data.instance, data))
  };
};

const ModalPageContainer = connect(mapStateToProps, mapDispatchToProps)(
  ModalPage
);

export default ModalPageContainer;
