import { connect } from 'react-redux';
import { receiveForecast } from '../actions';

import PinBox from '../components/PinBox'

const mapStateToProps = (state) => {
  return state;
}

const mapDispatchToProps = (dispatch) => {
  return {
    receiveForecast: (data) => {
    dispatch(receiveForecast(data))
    }
  }
}


export default connect(mapStateToProps, mapDispatchToProps)(PinBox)
