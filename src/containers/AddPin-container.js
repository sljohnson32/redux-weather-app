import { connect } from 'react-redux';
import AddPin from '../components/AddPin'
import { receiveForecast, receiveExtForecast } from '../actions'

const mapStateToProps = (state) => {
  return {
    data: state.PinForecastData
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    receiveForecast: (data) => {
      dispatch(receiveForecast(data))
    },
    receiveExtForecast: (data, fullName) => {
      dispatch(receiveExtForecast(data, fullName))
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(AddPin);
