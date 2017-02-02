import { connect } from 'react-redux';
import Settings from '../components/Settings';
import { receiveForecast } from '../actions';

const mapStateToProps = (state) => {
  return {
    text: state.settingsReducer
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    receiveForecast: (data) => {
      dispatch(receiveForecast(data))
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Settings);
