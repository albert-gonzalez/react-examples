import { connect } from 'react-redux';
import ResultBox from '../../components/resultBox/resultBox';
 
const mapStateToProps = (state, props) => {
  console.log(state[props.instance].count);
  return {
    children: state[props.instance].count
  }
}
 
const mapDispatchToProps = (dispatch, props) => {
  return {
  }
}
 
const ButtonResultBoxContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(ResultBox)
 
export default ButtonResultBoxContainer;