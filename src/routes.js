import React from 'react';
import { Route, IndexRoute } from 'react-router';
import App from './containers/App-container';
import PinBox from './containers/PinBox-container';
import Settings from './containers/Settings-container';


const Routes = (
  <Route>
    <Route path="/" component={App}>
      <IndexRoute component={PinBox} />
      <Route path='settings' component={Settings} />
    </Route>
  </Route>
);

export default Routes;
