import { connect } from 'react-redux';
import { increaseCounter } from '../../actions/button/button';
import ButtonPage from '../../pages/button/button';

const mapStateToProps = (state, props) => {
  return {};
};

const mapDispatchToProps = (dispatch, props) => {
  return {
    increaseCounterNormalButton: () =>
      dispatch(increaseCounter('normalButton')),
    increaseCounterLoadingButton: () =>
      dispatch(increaseCounter('loadingButton'))
  };
};

const ButtonPageContainer = connect(mapStateToProps, mapDispatchToProps)(
  ButtonPage
);

export default ButtonPageContainer;
