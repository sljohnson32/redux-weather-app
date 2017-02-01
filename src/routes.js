import React from 'react';
import { Router, Route, IndexRoute } from 'react-router';
import App from './components/App';
import PinBox from './components/PinBox';
import Settings from './components/Settings';


const Routes = (
  <Route>
    <Route path="/" component={App}>
      <IndexRoute component={PinBox} />
      <Route path='settings' component={Settings} />
    </Route>
  </Route>
);

export default Routes;
