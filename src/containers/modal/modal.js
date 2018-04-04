import { connect } from 'react-redux';
import { hideModal } from '../../actions/modal/modal';
import Modal from '../../components/modal/modal';

const mapStateToProps = (state, props) => {
  return {
    shown: state[props.instance].shown,
    title: state[props.instance].title,
    body: state[props.instance].body
  };
};
const mapDispatchToProps = (dispatch, props) => {
  return {
    hideModal: () => dispatch(hideModal(props.instance))
  };
};

const ModalContainer = connect(mapStateToProps, mapDispatchToProps)(Modal);

export default ModalContainer;
