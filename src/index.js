import React from 'react';
import { render } from 'react-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
// import { browserHistory } from 'react-router';
// import Routes from './routes';
// import thunk from 'redux-thunk';
import App from './containers/App'
import rootReducer from './reducers';


const store = createStore(rootReducer, {})

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
)


// const middleware = [thunk];
// <Routes history={browserHistory} />
