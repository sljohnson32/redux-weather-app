import React from 'react';
import { render } from 'react-dom';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import { Router, browserHistory } from 'react-router';
import Routes from './routes';
import thunk from 'redux-thunk';
import rootReducer from './reducers';

const middleware = [thunk];
const store = createStore(rootReducer, {}, applyMiddleware(...middleware))

render(
  <Provider store={store}>
    <Router routes={Routes} history={browserHistory}/>
  </Provider>,
  document.getElementById('root')
)
