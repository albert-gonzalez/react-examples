import { connect } from 'react-redux';
import RgbPicker from '../../components/rgbPicker/rgbPicker';
import {
  changeRedColor,
  changeGreenColor,
  changeBlueColor,
  changeAlphaChannel
} from '../../actions/rgbPicker/rgbPicker';

const mapStateToProps = (state, props) => {
  return {
    red: state[props.instance].red,
    green: state[props.instance].green,
    blue: state[props.instance].blue,
    alpha: state[props.instance].alpha
  };
};

const mapDispatchToProps = (dispatch, props) => {
  return {
    onRedChange: event =>
      dispatch(changeRedColor(props.instance, event.target.value)),
    onGreenChange: event =>
      dispatch(changeGreenColor(props.instance, event.target.value)),
    onBlueChange: event =>
      dispatch(changeBlueColor(props.instance, event.target.value)),
    onAlphaChange: event =>
      dispatch(changeAlphaChannel(props.instance, event.target.value))
  };
};

const RgbPickerContainer = connect(mapStateToProps, mapDispatchToProps)(
  RgbPicker
);

export default RgbPickerContainer;
