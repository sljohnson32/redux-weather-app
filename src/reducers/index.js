import { combineReducers } from 'redux';
import settingsReducer from './settings-reducer'
import appReducer from './app-reducer'

const rootReducer = combineReducers({
  settingsReducer,
  appReducer
})

export default rootReducer;
