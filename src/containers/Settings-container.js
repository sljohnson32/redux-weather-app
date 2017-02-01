import { connect } from 'react-redux';
import { addPin } from '../actions';
import Settings from '../components/Settings';

const mapStateToProps = (state) => {
  console.log('hey', state)
  return {
    text: state.settingsReducer
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    handleClick: (text) => {
      dispatch(addPin(text));
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Settings);
