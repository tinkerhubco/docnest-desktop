/* eslint flowtype-errors/show-errors: 0 */
import React from 'react';
import { Switch, Route } from 'react-router';

import App from './App';
import Login from './screens/Login';

export default () => (
  <App>
    <Switch>
      <Route path="/" render={() => <Login />} />
    </Switch>
  </App>
);
