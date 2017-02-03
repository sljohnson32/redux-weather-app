import { combineReducers } from 'redux';
import PinForecastData from './settings-reducer'
import appReducer from './app-reducer'

const rootReducer = combineReducers({
  PinForecastData,
  appReducer
})

export default rootReducer;
