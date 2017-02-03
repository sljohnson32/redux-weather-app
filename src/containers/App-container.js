import { connect } from 'react-redux';
import App from '../components/App'
import { fetchLocation, fetchSun, fetchWeather, rece } from '../actions'

const mapStateToProps = (state) => {
  return {
    data: state.latLongSun
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    fetchLocation: (data) => {
      dispatch(fetchLocation(data))
    },
    fetchSun: (data) => {
      dispatch(fetchSun(data))
    },
    fetchWeather: (data) => {
      dispatch(fetchWeather(data))
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
