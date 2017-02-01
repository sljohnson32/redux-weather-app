import React from 'react';
import { Router, Route, IndexRoute } from 'react-router';
import App from './components/App';
import PinContainer from './components/PinContainer';
import Settings from './components/Settings';

const Routes = (props) => (
  <Router {...props}>
    <Route path="/" component={App}>
      <IndexRoute component={PinContainer} />
      <Route path='settings' component={Settings} />
    </Route>
  </Router>
);

export default Routes;
