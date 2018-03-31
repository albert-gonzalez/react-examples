import { connect } from 'react-redux';
import ResultBox from '../../components/resultBox/resultBox';

const mapStateToProps = (state, props) => {
  const currentState = state[props.instance];
  return {
    style: {
      background: `rgba(${currentState.red},${currentState.green},${
        currentState.blue
      }, ${currentState.alpha})`
    }
  };
};

const mapDispatchToProps = (dispatch, props) => {
  return {};
};

const RgbPickerResultBox = connect(mapStateToProps, mapDispatchToProps)(
  ResultBox
);

export default RgbPickerResultBox;
