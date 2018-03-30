import { connect } from 'react-redux';
import { disableButton, enableButton } from '../../actions/button/button';
import Button from '../../components/button/button';

const mapStateToProps = (state, props) => {
  return {
    disabled: state[props.instance].disabled
  };
};
const mapDispatchToProps = (dispatch, props) => {
  return {
    onClick: () => handleAction(dispatch, props)
  };
};

function handleAction(dispatch, props) {
  return () => {
    const value = props.action();

    if (value instanceof Promise) {
      dispatch(disableButton(props.instance));
      value
        .then(() => dispatch(enableButton(props.instance)))
        .catch(() => dispatch(enableButton(props.instance)));
    }
  };
}
const ButtonContainer = connect(mapStateToProps, mapDispatchToProps)(Button);
export default ButtonContainer;
