import { connect } from 'react-redux';
import App from '../components/App'
import { fetchLocation } from '../actions'

const mapStateToProps = (state) => {
  console.log('app Reducer', state)
  return {
    data: state.appReducer
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    fetchLocation: (data) => {
      dispatch(fetchLocation(data))
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
