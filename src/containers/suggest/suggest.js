import { connect } from 'react-redux';
import axios from 'axios';
import throttle from 'lodash.throttle';
import Suggest from '../../components/suggest/suggest';
import {
  changeValueAndCloseBox,
  parseResultAndShowBox,
  closeBox,
  changeValue
} from '../../actions/suggest/suggest';

const mapStateToProps = (state, props) => {
  const suggestState = state[props.instance];
  return {
    value: suggestState.value,
    result: suggestState.results,
    showBox: suggestState.showBox
  };
};

const mapDispatchToProps = (dispatch, props) => {
  return {
    onResultClick: event => {
      dispatch(
        changeValueAndCloseBox(props.instance, {
          value: event.target.textContent
        })
      );
    },
    onChange: (event, options) => {
      const value = event.target.value;
      dispatch(changeValue(props.instance, { value: value }));
      throttledCall(value, options, props, dispatch);
    },
    onClickOut: event => {
      dispatch(closeBox(props.instance));
    }
  };
};

const throttledCall = throttle((value, options, props, dispatch) => {
  if (value.length >= 3) {
    if (options.cancelToken) {
      options.cancelToken.cancel('Operation canceled by the user.');
    }
    const CancelToken = axios.CancelToken;
    options.setCancelToken(CancelToken.source());
    options.cancelToken = CancelToken.source();
    axios
      .get(`${options.url}?${options.queryParam}=${value}`, {
        cancelToken: options.cancelToken.token
      })
      .then(data => {
        dispatch(
          parseResultAndShowBox(props.instance, {
            results: data,
            resultTransformer: options.resultTransformer
          })
        );
      })
      .catch(() => {});
  }
}, 800);

const SuggestContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Suggest);

export default SuggestContainer;
